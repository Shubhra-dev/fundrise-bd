// src/api/http.js
import { getToken as getVaultToken, isTokenAlive } from './tokenVault';

/** ---------- tiny utils ---------- */
const DEFAULT_TIMEOUT_MS = 10000;

function withTimeout(ms = DEFAULT_TIMEOUT_MS) {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), ms);
  return { signal: c.signal, clear: () => clearTimeout(t) };
}

function isFormData(body) {
  return typeof FormData !== 'undefined' && body instanceof FormData;
}

function baseHeaders(custom = {}, hasJsonBody) {
  const h = {
    Accept: 'application/json',
    ...custom,
  };
  if (hasJsonBody) {
    // Don't set Content-Type for FormData; browser will set proper boundary
    if (!('Content-Type' in h)) h['Content-Type'] = 'application/json';
  }
  return h;
}

async function safeParseJSON(res) {
  // 204 No Content or empty body
  if (res.status === 204) return null;
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    // non-JSON payload
    return text;
  }
}

function attachAuth(headers) {
  // Memory-only token from vault; never read storage
  const token = getVaultToken();
  if (token && isTokenAlive()) {
    headers['Authorization'] = `Bearer ${token}`;
  }
}

async function doFetch(url, options, timeoutMs) {
  const { signal, clear } = withTimeout(timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal });
    const data = await safeParseJSON(res);

    if (!res.ok) {
      const message = (data && typeof data === 'object' && data.message) || `Error: ${res.status}`;
      const err = new Error(message);
      err.status = res.status;
      err.payload = data;
      throw err;
    }
    return data;
  } finally {
    clear();
  }
}

/** ---------- PUBLIC (no auth) ---------- */
export async function publicGet(endpoint, customHeaders = {}, { timeoutMs } = {}) {
  const headers = baseHeaders(customHeaders, false);
  return doFetch(endpoint, { method: 'GET', headers }, timeoutMs);
}

export async function publicPost(endpoint, body = {}, customHeaders = {}, { timeoutMs } = {}) {
  const jsonBody = !isFormData(body);
  const headers = baseHeaders(customHeaders, jsonBody);
  const opts = {
    method: 'POST',
    headers,
    body: jsonBody ? JSON.stringify(body) : body,
  };
  return doFetch(endpoint, opts, timeoutMs);
}

/** ---------- SECURE (auth header from tokenVault) ---------- */
export async function secureGet(endpoint, customHeaders = {}, { timeoutMs } = {}) {
  const headers = baseHeaders(customHeaders, false);
  attachAuth(headers);
  return doFetch(endpoint, { method: 'GET', headers }, timeoutMs);
}

export async function securePost(endpoint, body = {}, customHeaders = {}, { timeoutMs } = {}) {
  const jsonBody = !isFormData(body);
  const headers = baseHeaders(customHeaders, jsonBody);
  attachAuth(headers);
  const opts = {
    method: 'POST',
    headers,
    body: jsonBody ? JSON.stringify(body) : body,
  };
  return doFetch(endpoint, opts, timeoutMs);
}

export async function securePut(endpoint, body = {}, customHeaders = {}, { timeoutMs } = {}) {
  const jsonBody = !isFormData(body);
  const headers = baseHeaders(customHeaders, jsonBody);
  attachAuth(headers);
  const opts = {
    method: 'PUT',
    headers,
    body: jsonBody ? JSON.stringify(body) : body,
  };
  return doFetch(endpoint, opts, timeoutMs);
}

/** (optional) secure DELETE for completeness */
export async function secureDelete(endpoint, customHeaders = {}, { timeoutMs } = {}) {
  const headers = baseHeaders(customHeaders, false);
  attachAuth(headers);
  return doFetch(endpoint, { method: 'DELETE', headers }, timeoutMs);
}

// src/utils/tokenVault.js
// Memory-only token vault with cross-tab sync (BroadcastChannel + localStorage fallback)

const CHANNEL_NAME = 'auth_v1_channel';
const PING_KEY = 'auth_v1_ping'; // fallback ping via localStorage
const TOKEN_REQUEST = 'REQUEST_TOKEN';
const TOKEN_BROADCAST = 'BROADCAST_TOKEN';
const TOKEN_CLEARED = 'TOKEN_CLEARED';

let bc = null;
let token = null; // <-- kept only in memory
let lastActivity = 0; // epoch ms
let maxIdleMs = 5 * 60 * 1000; // default 5 minutes
let onTokenChange = () => {}; // callback installed by Redux bridge
let onActivity = () => {}; // external activity hook

function now() {
  return Date.now();
}

function isAlive() {
  return token && now() - lastActivity < maxIdleMs;
}

// --- Cross-tab channel ---
function ensureChannel() {
  if (!bc && 'BroadcastChannel' in window) {
    bc = new BroadcastChannel(CHANNEL_NAME);
    bc.onmessage = (ev) => {
      const { type, payload } = ev.data || {};
      if (type === TOKEN_REQUEST) {
        // Another tab is asking: if we have a valid, fresh token, share it
        if (isAlive()) {
          bc.postMessage({ type: TOKEN_BROADCAST, payload: { token, lastActivity } });
        }
      } else if (type === TOKEN_BROADCAST) {
        // A sibling tab sent a token; accept it if we're idle/empty
        if (!token || !isAlive()) {
          token = payload?.token || null;
          lastActivity = payload?.lastActivity || 0;
          if (isAlive()) onTokenChange(token);
        }
      } else if (type === TOKEN_CLEARED) {
        // Propagate logout
        clearToken(false);
      }
    };
  }

  // Fallback sync via storage events
  window.addEventListener('storage', (e) => {
    if (e.key === PING_KEY && e.newValue === 'REQ') {
      // Another tab asked: respond by writing a one-time response (but we won't write the token)
      // We cannot send token via storage safely; just nudge BroadcastChannel sender
      if (bc && isAlive()) {
        bc.postMessage({ type: TOKEN_BROADCAST, payload: { token, lastActivity } });
      }
      // cleanup ping
      setTimeout(() => localStorage.removeItem(PING_KEY), 50);
    }
  });
}

export function initTokenVault({ idleMs = maxIdleMs, onChange, onUserActivity } = {}) {
  maxIdleMs = idleMs || maxIdleMs;
  if (typeof onChange === 'function') onTokenChange = onChange;
  if (typeof onUserActivity === 'function') onActivity = onUserActivity;
  ensureChannel();
}

export function setToken(newToken) {
  token = newToken || null;
  lastActivity = now();
  if (bc && token) {
    bc.postMessage({ type: TOKEN_BROADCAST, payload: { token, lastActivity } });
  }
  onTokenChange(token);
}

export function getToken() {
  return isAlive() ? token : null;
}

export function touch() {
  // update last activity if alive
  if (token) {
    lastActivity = now();
    if (typeof onActivity === 'function') onActivity(lastActivity);
  }
}

export function clearToken(broadcast = true) {
  token = null;
  lastActivity = 0;
  if (broadcast) {
    if (bc) bc.postMessage({ type: TOKEN_CLEARED });
    // Fallback nudge to other tabs
    try {
      localStorage.setItem(PING_KEY, 'REQ');
      setTimeout(() => localStorage.removeItem(PING_KEY), 50);
    } catch {}
  }
  onTokenChange(token);
}

export function requestTokenFromSiblings() {
  // Ask other tabs for a token (does nothing if none alive)
  if (bc) {
    bc.postMessage({ type: TOKEN_REQUEST });
  }
  // Also trigger fallback ping so other tabs wake up
  try {
    localStorage.setItem(PING_KEY, 'REQ');
    setTimeout(() => localStorage.removeItem(PING_KEY), 50);
  } catch {}
}

export function isTokenAlive() {
  return isAlive();
}

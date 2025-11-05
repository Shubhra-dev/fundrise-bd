// src/store/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {
  initTokenVault,
  setToken as vaultSetToken,
  getToken as vaultGetToken,
  clearToken as vaultClearToken,
  touch as vaultTouch,
  requestTokenFromSiblings,
} from '@/utils/tokenVault';

// Non-sensitive display meta (optional persistence)
const META_KEY = 'userMeta'; // { userName, profileImage }

function readMeta() {
  try {
    const raw = localStorage.getItem(META_KEY);
    if (!raw) return { userName: '', profileImage: '' };
    const { userName = '', profileImage = '' } = JSON.parse(raw);
    return { userName, profileImage };
  } catch {
    return { userName: '', profileImage: '' };
  }
}

function writeMeta(meta) {
  try {
    localStorage.setItem(META_KEY, JSON.stringify(meta || {}));
  } catch {}
}

const initialState = {
  isLoggedIn: !!vaultGetToken(),
  userName: readMeta().userName,
  profileImage: readMeta().profileImage,
  inTime: Date.now(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Call this once in app bootstrap (after store is ready)
    bootstrap: (state) => {
      initTokenVault({
        idleMs: 5 * 60 * 1000,
        onChange: (tk) => {
          // when token changes due to other tabs
          if (tk) {
            state.isLoggedIn = true;
            state.inTime = Date.now();
          } else {
            state.isLoggedIn = false;
            state.inTime = 0;
            state.userName = state.userName || ''; // keep meta; token cleared
          }
        },
        onUserActivity: () => {
          // could be used to hook analytics, etc.
        },
      });

      // try to fetch a token from sibling tabs if we don't have one
      if (!vaultGetToken()) requestTokenFromSiblings();
    },

    logIn: (state, action) => {
      console.log(action.payload);
      const { token, name, profileImage } = action.payload;
      vaultSetToken(token); // memory only
      state.isLoggedIn = true;
      state.userName = name || '';
      state.profileImage = profileImage || '';
      state.inTime = Date.now();
      writeMeta({ userName: state.userName, profileImage: state.profileImage });
    },

    userNameChange: (state, action) => {
      state.userName = action.payload || '';
      writeMeta({ userName: state.userName, profileImage: state.profileImage });
    },

    profileImageChange: (state, action) => {
      console.log(action.payload);
      state.profileImage = action.payload || '';
      writeMeta({ userName: state.userName, profileImage: state.profileImage });
    },

    touch: (state) => {
      if (vaultGetToken()) {
        vaultTouch();
      }
    },

    recheck: (state) => {
      // If vault has no valid token, mark logged out (no trust-on-load)
      if (!vaultGetToken()) {
        state.isLoggedIn = false;
        state.inTime = 0;
      }
    },

    logOut: (state) => {
      vaultClearToken(true); // broadcast to other tabs
      state.isLoggedIn = false;
      state.inTime = 0;
      // Keep non-sensitive meta for UX; or clear it if you prefer:
      // state.userName = "";
      // state.profileImage = "";
    },
  },
});

export const { bootstrap, logIn, logOut, profileImageChange, userNameChange, touch, recheck } =
  authSlice.actions;

export default authSlice.reducer;

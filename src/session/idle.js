// src/session/idle.js
import { touch as touchAction, recheck, logOut } from '@/store/slices/authSlice';
import { isTokenAlive } from '@/utils/tokenVault';

let timer;

export function installIdleWatcher(store, idleMs = 5 * 60 * 1000) {
  const reset = () => {
    store.dispatch(touchAction());
    clearTimeout(timer);
    timer = setTimeout(() => {
      // hard recheck after idle window
      store.dispatch(recheck());
      if (!isTokenAlive()) {
        store.dispatch(logOut());
      }
    }, idleMs + 300); // small buffer
  };

  // consider these as "activity"
  ['click', 'keydown', 'mousemove', 'scroll', 'visibilitychange', 'pointerdown'].forEach((ev) => {
    window.addEventListener(ev, reset, { passive: true });
  });

  reset();
}

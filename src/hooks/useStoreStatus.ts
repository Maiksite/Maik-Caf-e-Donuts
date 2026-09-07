import { useState, useEffect } from 'react';
import { getStoreStatus } from '../data/storeHours';
import { StoreStatus } from '../types';

type Listener = (status: StoreStatus) => void;

let currentStatus: StoreStatus = getStoreStatus();
const listeners = new Set<Listener>();
let timerId: ReturnType<typeof setInterval> | null = null;

function updateStatus() {
  const nextStatus = getStoreStatus();
  currentStatus = nextStatus;
  listeners.forEach((listener) => listener(nextStatus));
}

function handleVisibilityChange() {
  if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
    updateStatus();
  }
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  if (listeners.size === 1) {
    timerId = setInterval(updateStatus, 20000);
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', handleVisibilityChange);
    }
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
      if (typeof document !== 'undefined') {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      }
    }
  };
}

export function useStoreStatus(): StoreStatus {
  const [status, setStatus] = useState<StoreStatus>(() => currentStatus);

  useEffect(() => {
    setStatus(currentStatus);
    return subscribe(setStatus);
  }, []);

  return status;
}

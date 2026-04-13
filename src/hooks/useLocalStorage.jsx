import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Initialize state lazily to avoid unnecessary local storage reads on every render
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return initialValue;
    }
  });

  // Sync state changes back to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  }, [key, value]);

  return [value, setValue];
}
import { useState, useEffect } from "react";

export function useLocaleStorage(initialState, key) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return [];
    try {
      const parsed = JSON.parse(storedValue);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );

  return [value, setValue];
}

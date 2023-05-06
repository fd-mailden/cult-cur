import React, { useState, useEffect } from "react";

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isLoudDebounce, onLoadDebounce] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      onLoadDebounce(false);
    }, delay);

    return () => {
      onLoadDebounce(true);
      clearTimeout(handler);
    };
  }, [value]);

  return { debouncedValue, isLoudDebounce };
}

import React, { useEffect, useRef, useState } from "react";

export function useObserver() {
  const [isView, onView] = useState(false);
  const indicatorRef = useRef();
  var intersectionObserver = new IntersectionObserver((entries) => {
    onView(entries[0].isIntersecting);
  });
  useEffect(() => {
    if (!indicatorRef) {
      return;
    }
    intersectionObserver.observe(indicatorRef.current);
  }, [indicatorRef]);

  return { indicatorRef, isView };
}

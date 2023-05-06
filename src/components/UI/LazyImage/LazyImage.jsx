import React, { useEffect, useState } from "react";
import { useObserver } from "../../../hooks/useObserver";
function LazyImage({ className, imageAlt, imageSrc }) {
  const { indicatorRef, isView } = useObserver();
  const [dataSrc, setDataSrc] = useState(
    "https://cataas.com/cat?width=300&i=5"
  );
  useEffect(() => {
    setDataSrc(imageSrc);
  }, [isView]);

  return (
    <img
      ref={indicatorRef}
      className={className}
      src={dataSrc}
      data-src={"https://cataas.com/cat?width=300&i=5"}
      alt={imageAlt}
    />
  );
}

export { LazyImage };

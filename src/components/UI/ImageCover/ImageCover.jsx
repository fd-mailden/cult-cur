import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDebounce } from "../../../hooks/useDebounce";
function ImageCover({ srcIMG, style  }) {
  const [isError, onError] = useState(false);
  const { debouncedValue, isLoudDebounce } = useDebounce(srcIMG, 1000);
  useEffect(() => {
    onError(false);
  }, [debouncedValue]);
  return (
    <>
      {isError ? (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KfrwffrHG-ebEu5Lvz6Sab8ceCEJ-Gbkpg&usqp=CAU 400w"
          className={style}
          alt="car"
        />
      ) : (
        <img
          src={debouncedValue}
          className={style}
          alt="car"
          onError={() => onError(true)}
        />
      )}
    </>
  );
}

ImageCover.propTypes = {
  srcIMG: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

export { ImageCover };

import React from "react";
import style from "./Subtitle.module.scss";
function Subtitle({ children, top = "20", bottom = "20" }) {
  return (
    <h4
      className={style.subtitle}
      style={{ marginTop: `${top}px`, marginBottom: `${bottom}px` }}
    >
      {children}
    </h4>
  );
}

export { Subtitle };

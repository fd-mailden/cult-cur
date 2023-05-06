import React from "react";
import style from "./ButtonCheck.module.scss";
import className from "classnames";
function ButtonCheck({ isActive, trueText, falseText, ...props }) {
  return (
    <button
      {...props}
      className={className(style.button, isActive && style["button--active"])}
    >
      {isActive ? trueText : falseText}
    </button>
  );
}

export { ButtonCheck };

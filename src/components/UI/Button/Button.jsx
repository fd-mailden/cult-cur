import React from "react";
import style from "./Button.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

function Button({ children, ...props }) {
  const { type = "button", mode = "" } = props;
  return (
    <button
      {...props}
      type={type}
      className={classNames(style.button, style[mode])}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  mode: PropTypes.string,
};
export { Button };

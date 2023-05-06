import React from "react";
import style from "./TextButton.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

function TextButton({ children, ...props  }) {
  const { type = "button", styles='' } = props;

  return (
    <button {...props} type={type} className={classNames(style.button, style[styles] )}>
      {children}
    </button>
  );
}
TextButton.propTypes = {
  styles: PropTypes.string,
  type: PropTypes.string,
};
export {TextButton};

import React from "react";
import style from "./Input.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const Input = React.forwardRef((props, ref) => {
  const { mode = "", type = "text", isValid = true } = props;
  const newProps = Object.keys(props).filter(key =>
    key !== 'isValid').reduce((obj, key) =>
    {
        obj[key] = props[key];
        return obj;
    }, {}
);
  return (
    <input
      ref={ref}
      {...newProps}
      type={type}
      className={classNames(
        style.input,
        style[mode],
        !isValid && style["input--invalid"]
      )}
    />
  );
});
Input.propTypes = {
  mode: PropTypes.string,
};
export { Input };

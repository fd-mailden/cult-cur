import React from "react";
import style from "./InputNumber.module.scss";
import classNames from "classnames";
import PropTypes from 'prop-types'
const InputNumber = React.forwardRef((props, ref) => {
  const { currency, mode = "" } = props;
  return (
    <div
      className={classNames(
        style["input-wrapper"],
        style["input-wrapper" + mode]
      )}
    >
      <input type="number" ref={ref} className={style.input} {...props} />
      <p className={style.currency}>{currency}</p>
    </div>
  );
});
InputNumber.propTypes = {
  currency: PropTypes.string,
  mode: PropTypes.string
}
export { InputNumber };

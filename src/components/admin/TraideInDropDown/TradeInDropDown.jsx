import React, { useState, useEffect } from "react";
import style from "./TradeInDropDown.module.scss";
import PropTypes from "prop-types";
import { Checkbox } from "../../UI/Checkbox/Checkbox";
import classNames from "classnames";
import { useTradeInDropDown } from "./useTradeInDropDown";
function TradeInDropDown({ initItem, index }) {
  const { isShow, onShow, options } = useTradeInDropDown(initItem);
  return (
    <React.Fragment>
      <div className={style.declaration} onClick={() => onShow(!isShow)}>
        <h3 className={style.declaration__title}>
          {"[" +
            `${index + 1}` +
            "] ---- " +
            initItem.brand +
            " / " +
            initItem.model +
            " / " +
            initItem.user_name +
            " / " +
            initItem.calculation_number}
        </h3>
        <Checkbox />
      </div>
      <ul className={classNames(style.list, isShow && style["list--active"])}>
        {options.map((item, index) => (
          <li key={index} className={style.field}>
            <p className={style.field__name}>{item.name}</p>
            <p className={style.field__value}>{item.value}</p>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
TradeInDropDown.propTypes = {
  index: PropTypes.number,
  initItem: PropTypes.object,
};
export { TradeInDropDown };

import React, { useState, useEffect } from "react";
import style from "./Toggle.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

function Toggle({ setBuy }) {
  const [isActiveButton, setActiveButton] = useState(true);
  useEffect(() => {
    setBuy(isActiveButton);
  }, [isActiveButton]);

  return (
    <div className={style.toggle}>
      <button
        onClick={() => setActiveButton(true)}
        className={classNames(
          style.toggle__button,
          isActiveButton && style["toggle__button--active"]
        )}
      >
        Купить
      </button>
      <button
        onClick={() => setActiveButton(false)}
        className={classNames(
          style.toggle__button,
          !isActiveButton && style["toggle__button--active"]
        )}
      >
        Продать
      </button>
    </div>
  );
}
Toggle.propTypes = {
  setBuy: PropTypes.func,
};
export { Toggle };

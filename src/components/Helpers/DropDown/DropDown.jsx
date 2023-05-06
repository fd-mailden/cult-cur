import React, { useState } from "react";
import style from "./DropDown.module.scss";
import { ReactComponent as Arrow } from "../../../assets/images/slider-arrow.svg";
import classNames from "classnames";
function DropDown({ item }) {
  const [isDropDown, setDropDown] = useState(false);
  return (
    <li className={style.card} onClick={() => setDropDown(!isDropDown)}>
      <div className={style.card__name}>
        <p className={style.card__text}>{item.name}</p>
        <Arrow
          className={classNames(
            style.arrow,
            isDropDown && style["arrow--active"]
          )}
        />
      </div>
      <p
        className={classNames(
          style.description,
          isDropDown && style["description--active"]
        )}
      >
        {item.description}
      </p>
    </li>
  );
}

export { DropDown };

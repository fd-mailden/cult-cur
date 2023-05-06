import React from "react";
import style from "./BoardItem.module.scss";
import PropTypes from "prop-types";
import { Icon } from "../../UI/Icon/Icon";
import { removeLocalStorage } from "../../../helpers/localStorage";
function BoardItem({ item, removeCar }) {
  return (
    <div className={style["board-item"]}>
      <div className={style["top-image"]}>
        <img
          className={style["top-image__img"]}
          src={item.images[0]}
          alt="car"
        />
        <button
          className={style["top-image__btn"]}
          onClick={() => removeCar(item)}
        >
          <Icon name="close" />
        </button>
      </div>
      <ul className={style["board-list"]}>
        <li className={style["board-list__item"]}>{item.newPrice} ₽</li>
        <li className={style["board-list__item"]}>{item.credit} ₽</li>
        <li className={style["board-list__item"]}>{item.brand}</li>
        <li className={style["board-list__item"]}>{item.model}</li>
        <li className={style["board-list__item"]}>{item.year}</li>
        <li className={style["board-list__item"]}>{item.mileage}</li>
        <li className={style["board-list__item"]}>{item.engine}</li>
        <li className={style["board-list__item"]}>{item.transmission}</li>
        <li className={style["board-list__item"]}>{item.category[0]}</li>
        <li className={style["board-list__item"]}>
          {item.steeringWheel ? item.steeringWheel : "wheel"}
        </li>
        <li className={style["board-list__item"]}>
          {item.body ? item.body : "robot"}
        </li>
        <li className={style["board-list__item"]}>{item.color}</li>
      </ul>
    </div>
  );
}
BoardItem.propTypes = {
  item: PropTypes.object,
};
export { BoardItem };

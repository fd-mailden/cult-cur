import React from "react";
import { Button } from "../../UI/Button/Button";
import style from "./FavoritesCard.module.scss";
import background from "../../../assets/images/background/favorites-bg.png";
import car from "../../../assets/images/background/favorites-car.png";
import classNames from "classnames";
function FavoritesCard() {
  return (
    <div className={classNames(style["favorites-card"], 'col-sm-6 col-lg-4 col-xl-4')}>
      <img src={car} alt="background" className={style["bg-top"]} />
      <img src={background} alt="car" className={style["bg-bottom"]} />
      <div className={style["favorites-card__inner"]}>
        <h3 className={style["favorites-card__title"]}>Новое поступление</h3>
        <Button>Показать </Button>
      </div>
    </div>
  );
}

export { FavoritesCard };

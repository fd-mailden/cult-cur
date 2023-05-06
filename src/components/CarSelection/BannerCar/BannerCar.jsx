import React from "react";
import style from "./BannerCar.module.scss";
import carSelectionBg from "../../../assets/images/background/car-selection.png";
function BannerCar() {
  return (
    <article className={style["banner-car"]}>
      <img
        src={carSelectionBg}
        alt="carSelectionBg"
        className={style["banner-car__background"]}
      />
      <div className={style["banner-car__info"]}>
        <h2 className={style["banner-car__title"]}>Подбор автомобиля</h2>
        <p className={style["banner-car__text"]}>
          Оставьте заявку на автоподбор сейчас и наши автоэксперты подберут
          автомобиль под ваши нужны и бюджет совершенно бесплатно из имеющихся
          авто на нашем складе.
        </p>
      </div>
    </article>
  );
}

export { BannerCar };

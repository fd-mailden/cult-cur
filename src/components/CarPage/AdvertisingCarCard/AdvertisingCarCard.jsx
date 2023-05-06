import React from "react";
import style from "./AdvertisingCarCard.module.scss";
import bgRight from "../../../assets/images/background/advert-car.png";
import { MarkerCard } from "../../TestDrive/MarkerCard/MarkerCard";
import bgAuto from "../../../assets/images/background/Mazda.png";
import {useOnActiveModalWindow} from '../../../hooks/useOnActiveModalWindow'

function AdvertisingCarCard({ car }) {
  const { isOpen, onShowWindow } = useOnActiveModalWindow();
  
  return (
    <article className={style.advertising}>
      <img src={bgAuto} alt="" className={style["background-left"]} />

      <img src={bgRight} alt="bg" className={style["background-right"]} />
      <div className={style.advertising__inner}>
        <div className={style["advertising-info"]}>
          <h2 className={style["advertising-info__title"]}>
            От 500 {process.env.REACT_APP_CURRENCY}/мес
          </h2>
          <ul className={style["advertising-info__list"]}>
            {`${car.brand} ${car.model} ${car.year}г с пробегом ${car.mileage} км`}
            <li className={style["advertising-info__line"]}>
              {car.newPrice + " " + process.env.REACT_APP_CURRENCY}
            </li>
          </ul>
          <div className={style["advertising-info__buttons"]}>
            <button className={style["advertising-info__button"]}>
              Рассчитать кредит
            </button>
            <a href="" className={style["advertising-info__link"]}>
              Обменять в TRADE-In
            </a>
            <a href="" className={style["advertising-info__link"]}>
              Провести торг
            </a>
          </div>
        </div>
        <div className={style["marker-wrapper"]} >
          <MarkerCard mode="relative" />
        </div>
      </div>
    </article>
  );
}

export { AdvertisingCarCard };

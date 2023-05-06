import React from "react";
import style from "./AdvertisingMileage.module.scss";
import car from "../../../assets/images/background/owner-car.png";
import overBg from "../../../assets/images/background/owner-tr.png";
import backgroundCar from "../../../assets/images/background/min-car.png";
import backgroundTr from "../../../assets/images/background/guarantee-tr.png";
import classNames from "classnames";
import { LazyImage } from "../../UI/LazyImage/LazyImage";
import { Icon } from "../../UI/Icon/Icon";

function AdvertisingMileage() {
  return (
    <div
      className={classNames(
        style["mileage-wrapper"],
        "col-sm-6 col-lg-4 col-xl-4"
      )}
    >
      <div className={style.mileage}>
        <div className={style["mileage-min"]}>
          <a href="" className={style["mileage-min__link"]}>
            Минимальный пробег
            <Icon name={'advertising_arrow'}/>
          </a>
          <LazyImage
            className={style["mileage-min__car"]}
            imageAlt="background-tr"
            imageSrc={backgroundCar}
          />
          <LazyImage
            className={style["mileage-min__bg"]}
            imageAlt="background-tr"
            imageSrc={backgroundTr}
          />
        </div>

        <div className={style["mileage-owner"]}>
          <p className={style["mileage-owner__text"]}>Продает собственик</p>
          <Icon name={'li_check'}  className={style["mileage-owner__icon"]}/>
          <LazyImage
            className={style["mileage-owner__car"]}
            imageAlt="background"
            imageSrc={car}
          />
          <LazyImage
            className={style["mileage-owner__bg"]}
            imageAlt="background"
            imageSrc={overBg}
          />
        </div>
      </div>
    </div>
  );
}

export { AdvertisingMileage };

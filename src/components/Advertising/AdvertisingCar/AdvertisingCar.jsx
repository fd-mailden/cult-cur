import React from "react";
import background from "../../../assets/images/background/backg-adv-car.png";
import { LazyImage } from "../../UI/LazyImage/LazyImage";
import style from "./AdvertisingCar.module.scss";
function AdvertisingCar() {
  return (
    <div className={style.advertising}>
      <h2 className={style.advertising__title}>Комплектация авто</h2>
      <LazyImage
        className={style.advertising__background}
        imageAlt="background"
        imageSrc={background}
      />
    </div>
  );
}

export { AdvertisingCar };

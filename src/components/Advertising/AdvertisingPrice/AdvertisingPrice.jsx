import React from "react";
import { Button } from "../../UI/Button/Button";
import style from "./AdvertisingPrice.module.scss";
import advertisingCar from "../../../assets/images/background/adv-price.png";
import classNames from "classnames";
import { LazyImage } from "../../UI/LazyImage/LazyImage";

function AdvertisingPrice() {
  return (
    <div
      className={classNames(style["advertising-wrapper"], "col-sm-6 col-lg-4 ")}
    >
      <div className={style["advertising-price"]}>
        
        <LazyImage
             className={style["advertising-price__bg"]} 
            imageAlt="background-car"
            imageSrc={advertisingCar}
          />
        <div className={style["advertising-price__content"]}>
          <p className={style["advertising-price__text"]}>Выгодная цена</p>
          <Button>Показать</Button>
        </div>
      </div>
    </div>
  );
}

export { AdvertisingPrice };

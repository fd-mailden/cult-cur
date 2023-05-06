import React from "react";
import style from "./AdvertisingNewProduct.module.scss";
import background from "../../../assets/images/background/adv-first.png";
import { Button } from "../../UI/Button/Button";
import classNames from "classnames";
import { LazyImage } from "../../UI/LazyImage/LazyImage";

function AdvertisingNewProduct() {
  return (
    <div
      className={classNames(
        style["advertising-wrapper"],
        "col-sm-6 col-lg-4 col-xl-4"
      )}
    >
      <div className={style["advertising-card"]}>
        <LazyImage
            className={style["bg-top"]} 
            imageAlt="background"
            imageSrc={background}
          />
        <div className={style['advertising-card__content']}>
          <h3 className={style["advertising-card__title"]}>
            Новое поступление
          </h3>
          <Button>Показать</Button>
        </div>
      </div>
    </div>
  );
}

export { AdvertisingNewProduct };

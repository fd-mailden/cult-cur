import React from "react";
import style from "./AdvertisingRedeem.module.scss";
import { Button } from "../../UI/Button/Button";
import mazda from "../../../assets/images/background/Mazda.png";
import classNames from "classnames";
import { LazyImage } from "../../UI/LazyImage/LazyImage";

function AdvertisingRedeem() {
  return (
    <div className={classNames(style["redeem-wrapper"], "col-12")}>
      <div className={style.redeem}>
        <LazyImage
            className={style.redeem__bg}
            imageAlt=""
            imageSrc={mazda}
          />
        <h2 className={style.redeem__title}>Выкупим Ваш автомобиль</h2>
        <Button mode="button--dark">Получить предложение</Button>
      </div>
    </div>
  );
}

export { AdvertisingRedeem };

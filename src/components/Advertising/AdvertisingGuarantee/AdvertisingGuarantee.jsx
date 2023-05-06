import React from "react";
import style from "./AdvertisingGuarantee.module.scss";
import car from "../../../assets/images/background/guarantee-car.png";
import classNames from "classnames";
import { LazyImage } from "../../UI/LazyImage/LazyImage";

function AdvertisingGuarantee() {
  return (
    <div className={classNames(style['advertising-wrapper'],"col-sm-6 col-lg-4 col-xl-4")}>
      <div className={style["advertising-card"]}>
        <LazyImage
        className={style["bg-top"]}
        imageAlt="background"
        imageSrc={car}
      />
        <h3 className={style["advertising-card__title"]}>
          Гарантия юридической чистоты
        </h3>
      </div>
    </div>
  );
}

export { AdvertisingGuarantee };

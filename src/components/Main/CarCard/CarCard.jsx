import React from "react";
import { CardSlider } from "../../Sliders/CardSlider/CardSlider";
import style from "./CarCard.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CATALOG_ROUTES } from "../../../settings/routes";
function CarCard({ car, mode = "max316" }) {
  if (!car.objectId) {
    return null;
  }
  return (
    <div className={classNames(style["card-wrapper"], mode)}>
      <div className={style["card-car"]}>
        {car.images ? <CardSlider item={car} /> : null}
        <div className={style["car-descriptions"]}>
          <h3 className={style["car-descriptions__title"]}>
            {car.brand ? car.brand : "brand"}{' '}
            {car.model ? car.model : "model"}
          </h3>
          <p className={style["car-descriptions__text"]}>
            {car.description ? car.description : "- - - -- - - -"}
          </p>
        </div>
        <div className={style["car-price"]}>
          <p className={style["car-price__place"]}>
            Автосалон
            {car.address ? car.address : ""}
          </p>
          <div className={style["car-price__prices"]}>
            <h3 className={style["car-price__new"]}>
              {car.newPrice ? car.newPrice : ""}{process.env.REACT_APP_CURRENCY}
            </h3>
            <p className={style["car-price__old"]}>
              {car.oldPrice ? car.oldPrice : ""}{process.env.REACT_APP_CURRENCY}
            </p>
          </div>
          <div className={style["car-price__prices"]}>
            <p className={style["car-price__credit"]}>кредит </p>
            <p className={style["car-price__num"]}>
              {car.credit ? car.credit : ""}{process.env.REACT_APP_CURRENCY}/мес
            </p>
          </div>
        </div>
        {car.brand && car.model ? (
          <Link
            to={CATALOG_ROUTES.CAR_PAGE.generate(car.brand, car.objectId)}
            className={style["car-price__link"]}
          >
            Смотреть авто
          </Link>
        ) : null}
      </div>
    </div>
  );
}
CarCard.propTypes = {
  car: PropTypes.object,
  mode: PropTypes.string,
};
export { CarCard };

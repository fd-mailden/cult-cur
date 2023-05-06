import React from "react";
import style from "./BrandCards.module.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { CATALOG_ROUTES } from "../../../settings/routes";
import { useDispatch } from "react-redux";
import { setCarCatalog, onLoader } from "../../../store/cars/carsReducer";
function BrandCards({ carCards, setOpenMenu }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function navigateToCatalog(brand) {
    navigate(CATALOG_ROUTES.BRAND_PAGE.generate(brand.brand));
    dispatch(setCarCatalog(brand.catalog));
    setOpenMenu(false)
  }
  return (
    <div className={style["brand-cards"]}>
      {carCards.map((item, index) => (
        <div
          key={index}
          className={style["brand-card"]}
          onClick={() => navigateToCatalog(item)}
        >
          <div className={style["img-wrapper"]}>
            <img
              src={item.logo}
              alt="logo"
              className={style["brand-card__image"]}
            />
          </div>
          <p className={style["brand-card__name"]}>
            {item.brand}{" "}
            <span className={style["brand-card__amount"]}>({item.count})</span>
          </p>
        </div>
      ))}
    </div>
  );
}
BrandCards.propTypes = {
  carCards: PropTypes.array,
};
export { BrandCards };

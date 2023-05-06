import React from "react";
import style from "./BrandList.module.scss";
import PropTypes from "prop-types";
import { CATALOG_ROUTES } from "../../../settings/routes";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCarCatalog } from "../../../store/cars/carsReducer";
function BrandList({ brands, setOpenMenu }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function findCars(brand) {
    dispatch(setCarCatalog(brand.catalog));
    navigate(CATALOG_ROUTES.BRAND_PAGE.generate(brand.brand));
    setOpenMenu(false);
  }
  return (
    <ul className={style["brand__list"]}>
      {brands.map((brand, index) => (
        <li
          key={index}
          className={style["brand__item"]}
          onClick={() => findCars(brand)}
        >
          <p className={style["brand__link"]}>{brand.brand}</p>
          <p className={style["brand__amount"]}>{brand.count}</p>
        </li>
      ))}
    </ul>
  );
}
BrandList.propTypes = {
  brands: PropTypes.array,
};
export { BrandList };

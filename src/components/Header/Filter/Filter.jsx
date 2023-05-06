import React, { useContext } from "react";
import { IconButton } from "../../UI/IconButton/IconButton";
import { TextButton } from "../../UI/TextButton/TextButton";
import { HeaderForm } from "../HeaderForm/HeaderForm";
import PropTypes from "prop-types";
import style from "./Filter.module.scss";
import classNames from "classnames";
import { NavLink, useNavigate } from "react-router-dom";
import { useHeaderContext } from "../../../context/headerContext";
import { FAVORITES_ROUTES, COMPARISON_ROUTES } from "../../../settings/routes";

function Filter() {
  const { breadcrumbs, inView } = useHeaderContext();
  const navigate = useNavigate();
  return (
    <div
      className={classNames(
        style.wrapper,
        breadcrumbs.length === 1 && style["wrapper--transparent"],
        !inView && style.scrolling
      )}
    >
      <div className={style.filter}>
        <HeaderForm />
        <NavLink
          className={(navData) => (navData.isActive ? style.hurray : "")}
          to={FAVORITES_ROUTES.FAVORITES.path}
        >
          <IconButton styles="button--md-none" btn="liked" />
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? style.hurray : "")}
          to={COMPARISON_ROUTES.COMPARISON.path}
        >
          <IconButton styles="button--md-none" btn="charts" />
        </NavLink>
        <TextButton
          styles="button--md-none"
          onClick={() => navigate("/#contact")}
        >
          Заказать звонок
        </TextButton>
      </div>
    </div>
  );
}
Filter.propTypes = {
  breadcrumbs: PropTypes.array,
  inView: PropTypes.bool,
};
export { Filter };

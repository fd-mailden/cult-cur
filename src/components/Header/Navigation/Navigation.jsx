import React from "react";
import style from "./Navigation.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useScrollToHashElement } from "../../../hooks/useScrollToHashElement";
import { MAIN_ROUTES } from "../../../settings/routes";
function Navigation({ setBurgerActive }) {
  useScrollToHashElement();
  const links = [
    { name: "Купить авто", id: "buy" },
    { name: "Продать авто", id: "sell" },
    { name: "Услуги", id: "services" },
    { name: "О компании", id: "about" },
    { name: "Контакты", id: "contact" },
  ];

  return (
    <nav className={style.nav}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={MAIN_ROUTES.MAIN.path + "#" + link.id}
          className={style.nav__link}
          onClick={() => setBurgerActive(false)}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
Navigation.propTypes = {
  setBurgerActive: PropTypes.func,
};
export { Navigation };

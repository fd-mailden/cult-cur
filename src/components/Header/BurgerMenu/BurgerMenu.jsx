import React from "react";
import { Navigation } from "../Navigation/Navigation";
import style from "./BurgerMenu.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import triangle from "../../../assets/images/background/triangle.png";
import { HeaderContact } from "../HeaderContact/HeaderContact";
import { useHeaderContext } from "../../../context/headerContext";

function BurgerMenu() {
  const { isBurgerActive, setBurgerActive } = useHeaderContext();
  return (
    <section
      className={classNames(style.burger, isBurgerActive && style.active)}
    >
      <img src={triangle} alt="triangle" className={style.triangle} />
      <Navigation setBurgerActive={setBurgerActive} />
      <HeaderContact />
    </section>
  );
}
BurgerMenu.propTypes = {
  isBurgerActive: PropTypes.bool,
  setBurgerActive: PropTypes.func,
};
export { BurgerMenu };

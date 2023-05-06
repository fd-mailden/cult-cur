import React from "react";
import style from "./HeaderMenu.module.scss";
import logoImg from "../../../assets/images/Logotype_logo day line.png";
import { Navigation } from "../Navigation/Navigation";
import { HeaderContact } from "../HeaderContact/HeaderContact";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHeaderContext } from "../../../context/headerContext";
import{MAIN_ROUTES} from '../../../settings/routes'

function HeaderMenu() {
  const { isBurgerActive, setBurgerActive, breadcrumbs, inView} = useHeaderContext();

  return (
    <header
      className={classNames(
        style.header,
        breadcrumbs.length === 1 && style["header--transparent"],
        !inView && style.scrolling
      )}
    >
      <div className={style.header__inner}>
        <Link to={MAIN_ROUTES.MAIN.path}>
          <img src={logoImg} alt="logo_image" className={style.header__logo} />
        </Link>
        <div className={style.header__nav}>
          <Navigation setBurgerActive={setBurgerActive} />
          <HeaderContact />
        </div>
        <button
          onClick={() => setBurgerActive(!isBurgerActive)}
          className={classNames(style.burger, isBurgerActive && style.active)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
HeaderMenu.propTypes = {
  isBurgerActive: PropTypes.bool,
  inView: PropTypes.bool,
  breadcrumbs: PropTypes.array,
  setBurgerActive: PropTypes.func,
};
export { HeaderMenu };

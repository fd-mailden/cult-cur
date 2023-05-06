import React from "react";
import style from "./Footer.module.scss";
import logo from "../../assets/images/footer-logo.png";
import { List } from "../UI/List/List";
import { Link } from "react-router-dom";
import { Icon } from "../UI/Icon/Icon";
import { MAIN_ROUTES, ADMIN_ROUTES } from "../../settings/routes";
import { about, socialMedia, services, sellCar, buyCar } from "./footer-data";

function Footer() {

  return (
    <footer className={style.footer} id="footer" >
      <div className={style.footer__inner}>
        <div className={style.footer__logo}>
          <Link to={MAIN_ROUTES.MAIN.path}>
            <img src={logo} alt="logo" />
          </Link>
          <a href="tel:8 800 551-84-21" className={style.footer__phone}>
            8 (800) 551-84-21
          </a>
        </div>

        <div className={style.footer__info}>
          <List list={buyCar} />
          <List list={sellCar} />
          <List list={services} />
          <List list={about} />
        </div>

        <div className={style.footer__contact}>
          <a href="tel:8 800 551-84-21" className={style.footer__phone}>
            8 (800) 551-84-21
          </a>
          <div className={style["social-media"]}>
            {socialMedia.map((media, index) => (
              <a href={media.link} rel="noopener" target="_blank" key={index}>
                <Icon
                  name={media.icon}
                  className={style["social-media__icon"]}
                />
              </a>
            ))}
          </div>
          <Link to={ADMIN_ROUTES.ADMIN.path} className={style.footer__link}>
            Admin panel
          </Link>
        </div>
      </div>
    </footer>
  );
}

export { Footer };

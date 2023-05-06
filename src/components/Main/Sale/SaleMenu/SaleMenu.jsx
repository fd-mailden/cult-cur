import React from "react";
import style from "./SaleMenu.module.scss";
import { Link } from "react-router-dom";

function SaleMenu() {
  const menu = ["Седаны", "Внедорожники", "Хэтчбеки", "Универсалы", "Купе"];

  return (
    <article className={style["sale-menu"]}>
      <div className={style["sale-menu__inner"]}>
        <h2 className={style["sale-menu__title"]}>По типу кузова</h2>
        <ul className={style["sale-menu__list"]}>
          {menu.map((item, index) => (
            <li key={index} className={style["sale-menu__item"]}>
              <Link to="/catalog" className={style["sale-menu__link"]}>
                {item}
              </Link>
            </li>
          ))}

          <li className={style["sale-menu__item"]}>
            <Link to="/catalog" className={style["sale-menu__link"]}>
              Показать все 175 авто
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default SaleMenu;

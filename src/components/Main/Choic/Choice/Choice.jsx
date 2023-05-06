import React, { useState } from "react";
import style from "./Choice.module.scss";
import auto from "../../../../assets/images/background/auto.png";
import AutoMarket from "../AutoMarket/AutoMarket";
import AutoCard from "../AutoCard/AutoCard";
import classNames from "classnames";
import { CarFilter } from "../../CarFilter/CarFilter/CarFilter";
import { CATALOG_ROUTES, TRADE_ROUTES } from "../../../../settings/routes";

const cards = [
  {
    title: "Купить автомобиль",
    text: "Выберите один из Х автомобилей с пробегом, все в наличии",
    link: CATALOG_ROUTES.CATALOG.path,
    linkText: "Смотреть каталог",
  },
  {
    title: "Продать автомобиль",
    text: "У вас есть возможность легко и просто выставить свое авто на продажу",
    link: TRADE_ROUTES.TRADE.path,
    linkText: "Продать Trade-in",
  },
];

function Choice() {
  return (
    <section className={style.choice}>
      <img src={auto} alt="auto" className={style.background} />
      <AutoMarket />
      <div className={classNames(style.cards, "row")}>
        {cards.map((card, index) => (
          <AutoCard key={index} info={card} />
        ))}
      </div>
      <CarFilter />
    </section>
  );
}
export { Choice };

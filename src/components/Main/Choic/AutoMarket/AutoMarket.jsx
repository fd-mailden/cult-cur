import React from "react";
import doneImg from "../../../../assets/images/li-done.svg";
import style from "./AutoMarket.module.scss";

function AutoMarket() {
  return (
    <article className={style.auto}>
      <h1 className={style.title}>Автомаркет </h1>
      <ul className={style.list}>
        <li className={style.list__item}>
          <img src={doneImg} alt="li" />
          <p className={style.list__text}> Проверенный дилер</p>
        </li>
        <li className={style.list__item}>
          <img src={doneImg} alt="li" />
          <p className={style.list__text}> Выгодный trade-in</p>
        </li>
        <li className={style.list__item}>
          <img src={doneImg} alt="li" />
          <p className={style.list__text}>Поддержанные авто в кредит</p>
        </li>
        <li className={style.list__item}>
          <img src={doneImg} alt="li" />
          <p className={style.list__text}>Комиссионная продажа</p>
        </li>
      </ul>
    </article>
  );
}

export default AutoMarket;

import React from "react";
import style from "./AutoCard.module.scss";
import auto from "../../../../assets/images/background/card-auto.png";
import { Link } from "react-router-dom";
function AutoCard({ info }) {
  return (
    <div className={style["card-wrapper"]}>
      <div className={style.card}>
        <img src={auto} alt="" className={style.card__background} />
        <div className={style.card__info}>
          <h3 className={style.card__title}>{info.title}</h3>
          <p className={style.card__text}>{info.text}</p>
          <Link to={info.link} className={style.card__link}>
            {info.linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AutoCard;

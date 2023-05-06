import React from "react";
import style from "./AboutAdvantage.module.scss";
import carAdvantage from '../../../../assets/images/sm-car.png'

function AboutAdvantage() {
  return (
    <article className={style.advantage}>
      <h3 className={style.advantage__title}>Преимущества Автомаркета</h3>
      <p className={style.advantage__text}>
        Покупка подержанного автомобиля – наиболее удобный по цене способ
        покупки. <br/> Если вы рассматриваете этот вариант, приглашаем вас в наши
        автоцентры в Москве.
      </p>
      <img src={carAdvantage} alt="car Advantage" className={style.advantage__image} />
    </article>
  );
}

export { AboutAdvantage };

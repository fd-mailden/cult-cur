import React from "react";
import style from "./CarServices.module.scss";
import background from "../../../assets/images/background/background-services.png";
import { Button } from "../../UI/Button/Button";
import { ServicesTerms } from "../ServicesTerms/ServicesTerms";
function CarServices() {
  return (
    <section className={style.services}>
      <img
        className={style.background}
        src={background}
        alt="background-services"
      />
      <div className={style.services__inner}>
        <article className={style["service-terms"]}>
          <h2 className={style["service-terms__title"]}>
            Лучшие условия по автокредиту
          </h2>
          <p className={style["service-terms__text"]}>
            Узнай об особых условиях или рассчитай автокредит прямо сейчас
          </p>
          <Button mode='button--primary'>Открыть калькулятор</Button>
          <a href="" className={style["service-terms__link"]}>
            Узнать об условиях
          </a>
        </article>
        <ServicesTerms/>
      </div>
    </section>
  );
}

export { CarServices };

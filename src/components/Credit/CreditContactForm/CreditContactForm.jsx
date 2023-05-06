import React from "react";
import style from "./CreditContactForm.module.scss";

import backgroundCar from "../../../assets/images/background/credit-contact-car.png";
import {FormCredit} from '../FormCredit/FormCredit'
function CreditContactForm() {
  return (
    <section className={style["credit-contact"]}>
      <img
        className={style["credit-background"]}
        src={backgroundCar}
        alt="background car"
      />

      <div className={style["credit-contact__inner"]}>
        <h2 className={style["credit-contact__title"]}>Появились вопросы? </h2>
        <a
          href="tel:8 (800) 100-10-10"
          className={style["credit-contact__phone"]}
        >
          8 (800) 100-10-10
        </a>
        <p className={style["credit-contact__subtitle"]}>
          Получите консультацию у нашего специалиста
        </p>
        <FormCredit/>
        <p className={style["credit-contact__text"]}>
          Обработка сведений о Пользователях осуществляется в соответствии с{" "}
          <a href="">
            Политикой в области обработки и обеспечения безопасности
            персональных данных.
          </a>
        </p>
      </div>
    </section>
  );
}

export { CreditContactForm };

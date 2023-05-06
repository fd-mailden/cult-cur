import React from "react";
import style from "./ThreeMethod.module.scss";

function ThreeMethod() {
  const methods = [
    {
      method_title: "Trade-IN",
      method_text:
        "Обменяем любой автомобиль  из нашего каталога на Ваше авто,  с выгодой до 12%",
      link: "",
    },
    {
      method_title: "Выкуп автомобиля",
      method_text:
        "Дорого выкупим Ваш автомобиль, оценка и сделка за один час. До 95%         от рыночной стоимости",
      link: "",
    },
    {
      method_title: "Комиссионная продажа",
      method_text:
        "Продадим автомобиль без лишних забот,  по Вашей желаемой цене. Услугу оплачивает покупатель",
      link: "",
    },
  ];

  return (
    <section className={style["methods-wrapper"]}>
      <h2 className={style["methods-title"]}>
        Три способра выгодно продать свой автомобиль
      </h2>
      <div className={style.methods}>
        {methods.map((method, index) => (
          <div key={index} className={style.method}>
            <h3 className={style.method__title}>{method.method_title}</h3>
            <p className={style.method__text}>{method.method_text}</p>
            <a href={method.link} className={style.method__link}>
              Подробнее
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export { ThreeMethod };

import React from "react";
import { ScoreBar } from "../../Helpers/ScoreBar/ScoreBar";
import style from "./CardInfoCar.module.scss";
function CardInfoCar({ setModalInfo, info }) {
  const characteristics = [
    { name: "Марка", value: info.brand, unit: "" },
    { name: "Модель", value: info.model , unit: "" },
    { name: "Год выпуска", value: info.year, unit: "год" },
    { name: "Пробег", value: info.mileage, unit: "км" },
    { name: "Двигатель", value: info.engine , unit: "" },
    { name: "Коробка", value: info.transmission , unit: "" },
    { name: "Привод", value: info.category , unit: "" },
    { name: "Руль", value: info.wheel, unit: ""  },
    { name: "Кузов", value: "Робот", unit: ""  },
    { name: "Цвет", value: info.color , unit: "" },
  ];
  return (
    <div className={style.card} onClick={setModalInfo}>
      <div className={style.card__head}>
        <h5 className={style.card__title}>{info.brand + " " + info.model}</h5>
        <h5 className={style.card__title}>
          {info.newPrice + " " + process.env.REACT_APP_CURRENCY}
        </h5>
      </div>
      <div className={style.card__head}>
        <h5 className={style.card__text}>Стоимость авто</h5>
        <div className={style.sale}>
          <p className={style.sale__percent}>-7%</p>
          <p className={style.card__text}>
            {info.oldPrice}
            {process.env.REACT_APP_CURRENCY}
          </p>
        </div>
      </div>
      <ScoreBar percent={50} />

      <ul className={style["car-characteristics"]}>
        {characteristics.map((item, index) => (
          <li key={index} className={style["car-characteristics__item"]}>
            <p className={style["car-characteristics__name"]}>{item.name}</p>
            <p className={style["car-characteristics__value"]}>
              {item.value + " " + item.unit}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { CardInfoCar };

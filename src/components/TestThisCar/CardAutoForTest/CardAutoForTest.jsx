import React from "react";
import style from "./CardAutoForTest.module.scss";
import bg from "../../../assets/images/background/Mazda-bg.png";
function CardAutoForTest({ car }) {
  return (
    <div className={style["card-wrapper"]}>
      <img src={bg} className={style.background} />
      <div className={style.card}>
        <img
          src={car.images[0]}
          alt="car image"
          className={style.card__image}
        />
        <div className={style.info}>
          <p
            className={style.info__text}
          >{`${car.brand} ${car.model} ${car.year}`}</p>
          <>
            <ul className={style.list}>
              {car.category} <li>{car.type_of_drive}</li>
              <li>{car.transmission}</li>
            </ul>
            <ul className={style.list}>
              {car.engine} <li>{car.mileage} км</li>
              <li>{car.engine_power}л.с</li>
            </ul>
          </>
        </div>
        <p className={style.card__price}>{car.newPrice} $</p>
      </div>
    </div>
  );
}

export { CardAutoForTest };

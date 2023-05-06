import React from "react";
import { Grid } from "../../UI/Grid/Grid";
import car from "../../../assets/images/selectIcons/car.svg";
import eye from "../../../assets/images/selectIcons/eye.svg";
import scales from "../../../assets/images/selectIcons/scales.svg";
import insurance from "../../../assets/images/selectIcons/insurance.svg";
import style from "./SelectInfo.module.scss";
import classNames from "classnames";
function SelectInfo() {
  const info = [
    {
      title: "Юридическая чистота",
      image: scales,
      description:
        "В наличии только проверенные автомобили. Получите прозрачную юридическую гарантию на понравившееся авто.",
    },
    {
      title: "Кредитование и страхование",
      image: insurance,
      description:
        "Поможем получить автокредит и застраховать автомобиль по лучшим условиям среди двух десятков банков партнеров.",
    },
    {
      title: "Осмотр и тест-драйв",
      image: eye,
      description:
        "Все подобранные автомобили будут ждать вас на автостоянке, где вы сможете ознакомиться с их историями и провести полноценный тест-драйв",
    },
    {
      title: "Приобрел, завел и поехал ",
      image: car,
      description:
        "Все автомобили проходят полную предпродажную подготовку. Получите помытый внутри с снаружи, готовый к эксплуатации автомобиль",
    },
  ];
  return (
    <Grid>
      {info.map((item, index) => (
        <div className="col-sm-12 col-lg-6 ">
        <div
          key={index}
          className={style["select-item"]}
        >
          <img
            src={item.image}
            alt="icon"
            className={style["select-item__image"]}
          />
          <h3 className={style["select-item__title"]}>{item.title}</h3>
          <p className={style["select-item__text"]}>{item.description}</p>
        </div></div>
      ))}
    </Grid>
  );
}

export { SelectInfo };

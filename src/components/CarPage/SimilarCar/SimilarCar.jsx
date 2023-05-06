import React, { useState, useEffect } from "react";
import style from "./SimilarCar.module.scss";
import { catalog } from "../../Main/Sale/catalog";
import { CarCard } from "../../Main/CarCard/CarCard";
import { Button } from "../../UI/Button/Button";
import classNames from "classnames";
import { Icon } from "../../UI/Icon/Icon";
import { Loading } from "../../UI/Loader/Loading";
import { useSimilar } from "../../../hooks/useSimilar";

function SimilarCar({ category = "" }) {
  const { load, carsData } = useSimilar(category);
  const [isShow, setShow] = useState(false);
  let container = document.getElementById("car-row");
  useEffect(() => {
    container = document.getElementById("car-row");
  }, []);

  return (
    <>
      {load ? (
        <Loading height="30" />
      ) : (
        <section className={style.similar}>
          <h2 className={style.similar__title}>Похожие автомобили</h2>
          <button
            onClick={() => (container.scrollLeft -= 500)}
            className={style["arrow-prev"]}
          >
            <Icon name="slider_arrow" />
          </button>
          <button
            onClick={() => (container.scrollLeft += 500)}
            className={style["arrow-next"]}
          >
            <Icon name="slider_arrow" />
          </button>
          <article
            className={classNames(
              style["car-row"],
              isShow && style["show-car"]
            )}
            id="car-row"
          >
            {carsData.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </article>
          <Button mode="button--show-black" onClick={() => setShow(!isShow)}>
            {!isShow ? "Смотреть все" : "Закрыть"}
          </Button>
        </section>
      )}
    </>
  );
}

export { SimilarCar };

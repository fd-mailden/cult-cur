import React from "react";
import style from "./TestDriveBanner.module.scss";
import { Button } from "../../UI/Button/Button";
import background from "../../../assets/images/background/test-drive-banner.png";
import { useNavigate } from "react-router-dom";
import { CAR_SELECTION_ROUTES } from "../../../settings/routes";
function TestDriveBanner() {
  const navigate = useNavigate();
  return (
    <section className={style.banner}>
      <img
        className={style.background}
        src={background}
        alt="background-banner"
      />
      <div className={style.banner__info}>
        <h2 className={style.banner__title}>
          Или запишись на подбор автомобиля прямо сейчас
        </h2>
        <p className={style.banner__text}>
          Наши специалисты примут все пожелания и подберут для вас авто под ваш
          бюджет и нужды
        </p>
        <Button
          mode="button--width-232"
          onClick={() => navigate(CAR_SELECTION_ROUTES.CAR_SELECTION.path)}
        >
          Подобрать авто
        </Button>
      </div>
    </section>
  );
}

export { TestDriveBanner };

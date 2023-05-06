import React from "react";
import style from "./Statements.module.scss";
import { StyledSentence } from "../../../UI/StyledSentence/StyledSentence";
import car from "../../../../assets/images/statement-car.png";
import background from "../../../../assets/images/background/bottom-bg.svg";
import { StatementsFilter } from "../StatementsFilter/StatementsFilter";
import { LazyImage } from "../../../UI/LazyImage/LazyImage";

function Statements() {
  return (
    <section className={style.statements} id="services">
      <img src={background} alt="background" className={style["bg-image"]} />

      <div className={style.statements__inner}>
        <div className={style.statements__left}>
          <h3 className={style.statements__title}>
            <StyledSentence sentence="Заявка !!во все банки-партнеры!. на покупку авто в кредит" />
          </h3>
          <LazyImage
            className={style.statements__image}
            imageAlt="car"
            imageSrc={car}
          />
        </div>
        <div className={style["filter-wrapper"]}>
          <StatementsFilter />
        </div>
      </div>
    </section>
  );
}

export { Statements };

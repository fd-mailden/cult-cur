import React, { useState, useEffect } from "react";
import style from "./CarFilter.module.scss";
import { StyledSentence } from "../../../UI/StyledSentence/StyledSentence";
import { ReactComponent as RedArrow } from "../../../../assets/images/red-arrow.svg";
import { Toggle } from "../../../UI/Toggle/Toggle";
import FilterComponent from "../FilterComponent/FilterComponent";
import SellComponent from "../SellComponent/SellComponent";

function CarFilter() {
  const [isBuy, setBuy] = useState(true);
  const [isStepTwo, setStepTwo] = useState(false);
  useEffect(() => {
    setStepTwo(false);
  }, [isBuy]);

  return (
    <article className={style.filter} id="buy">
      <div className={style.filter__top}>
        {!isStepTwo ? (
          <h2 className={style.filter__title}>
            {isBuy ? (
              <StyledSentence
                sentence={`Выбрать автомобиль с пробегом в !!${process.env.REACT_APP_WHERE_PLACE}!.`}
              />
            ) : (
              <StyledSentence
                sentence={`Продать автомобиль с пробегом в !!${process.env.REACT_APP_WHERE_PLACE}!.`}
              />
            )}{" "}
            <RedArrow className={style.arrow} />
          </h2>
        ) : (
          <h2 className={style.filter__title} onClick={() => setStepTwo(false)}>
            <RedArrow className={style["white-arrow"]} /> Наше предложение
          </h2>
        )}

        <Toggle setBuy={setBuy} />
      </div>
      {isBuy ? (
        <FilterComponent />
      ) : (
        <SellComponent setStepTwo={setStepTwo} isStepTwo={isStepTwo} />
      )}
    </article>
  );
}

export { CarFilter };

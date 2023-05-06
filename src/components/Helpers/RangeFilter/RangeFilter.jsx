import React, { useState, useEffect } from "react";
import style from "./RangeFilter.module.scss";
import { RangeUI } from "../../UI/Range/Range";
import { InputNumber } from "../../UI/InputNumber/InputNumber";
function RangeFilter({ addToForm }) {
  const [initialPrize, setInitialPrize] = useState("");
  const [month, setMonth] = useState(24);
  useEffect(() => {
    addToForm("initial_fee", initialPrize);
    addToForm("credit_month", month);
  }, []);
  useEffect(() => {
    addToForm("initial_fee", initialPrize);
  }, [initialPrize]);
  useEffect(() => {
    addToForm("credit_month", month);
  }, [month]);

  


  return (
    <div className={style["st-filter__range"]}>
      <div className={style["st-filter__item"]}>
        <h3 className={style["st-filter__title"]}>Первоночальный взнос</h3>
        <RangeUI
          MIN={500}
          MAX={40000}
          center={20000}
          currency={process.env.REACT_APP_CURRENCY}
          setRange={setInitialPrize}
        />
        <InputNumber mode="--max-width" currency={process.env.REACT_APP_CURRENCY} value={initialPrize} />
      </div>
      <div className={style["st-filter__item"]}>
        <h3 className={style["st-filter__title"]}>Срок кредитования</h3>
        <RangeUI
          MIN={12}
          MAX={60}
          center={24}
          setRange={setMonth}
          currency="мес."
        />
        <InputNumber mode="--max-width" currency="мес." value={month} />
      </div>
    </div>
  );
}

export { RangeFilter };

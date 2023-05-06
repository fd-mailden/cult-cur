import React from "react";
import style from "./FunctionsCar.module.scss";
import {useFunctionsCar} from './useFunctionsCar'
function FunctionsCar({car}) {
  const { models: { funcItems },} = useFunctionsCar()
  return (
    <article className={style["car-functions"]}>
      {funcItems.map((item, index) => (
        <button key={index} className={style.button} onClick= {()=>item.func(car)}>
          <img src={item.icon} alt="icon" className={style.button__icon} />
          {item.name}
        </button>
      ))}
    </article>
  );
}

export { FunctionsCar };

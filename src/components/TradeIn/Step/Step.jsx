import React, { useState } from "react";
import style from "./Step.module.scss";
import classNames from "classnames";

function Step({ amount, descriptions }) {

  let steps = [
    { step: " 1 шаг", description: descriptions[0] },
    { step: " 2 шаг", description: descriptions[1] },
    { step: " 3 шаг", description: descriptions[2] },
    { step: " 4 шаг", description: descriptions[3] },
  ];
  return (
    <ul className={style.steps}>
      {steps.map((element, index) => {
        if (index + 1 <= amount) {
          return (
            <li
            key={index}
              className={classNames(
                style.step,
                element.description  && style.active
              )}
            >
              {element.step}
              <p className={style.step__description}>— {element.description}</p>
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
}

export { Step };

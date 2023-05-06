import React, { useState, useEffect } from "react";
import style from "./AdditionalInfo.module.scss";
import { additional } from "../characteristics";
import { Select } from "../../UI/Select/Select";
import { Input } from "../../UI/Input/Input";
import classNames from "classnames";
import { Checkbox } from "../../UI/Checkbox/Checkbox";
import { ErrorText } from "../../UI/ErrorText/ErrorText";

function AdditionalInfo({ addToForm, invalidFields }) {
  const [check, setCheck] = useState(false);
  const re = /^[А-ЯЁ][а-яё]+$/;
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    let firstName = inputName.split(" ")[0];
    let LastName = inputName.split(" ")[1];
    let validLength = inputName.split(" ").length == 2;
    if (
      validLength &&
      re.test(String(firstName)) &&
      re.test(String(LastName))
    ) {
      addToForm("pts_owner", inputName);
    }
  }, [inputName]);

  useEffect(() => {
    addToForm("wheel", check ? "right" : "left");
  }, [check]);

  return (
    <div className={style.additional}>
      <h2 className={style.additional__title}>Дополнительная информация</h2>
      <p className={style.additional__subtitle}>
        Если вы заполните эти поля, повысите точность расчета
      </p>
      <div className={classNames(style.additional__selects, "row")}>
        {additional.map((selectData, index) => (
          <Select
            key={index}
            selectData={selectData}
            mode="--max-width"
            field={selectData.field}
            setDataField={addToForm}
            isEmpty = {invalidFields[selectData.field]}
          />
        ))}
        <Input
          placeholder="Владельцев по ПТС"
          onChange={(e) => setInputName(e.target.value)}
          isValid={!invalidFields["pts_owner"] }
        />
        {invalidFields.pts_owner && (
            <ErrorText text='Не полное имя или Нет заглавной буквы '/>
        )}
      </div>
      <Checkbox label="Правый руль" setCheck={setCheck} />
      <p className={style.additional__text}>
        Указанная рассчетная стоимость является приблизительной и действует при
        сдаче автомобиля в trade-in
      </p>
    </div>
  );
}

export { AdditionalInfo };

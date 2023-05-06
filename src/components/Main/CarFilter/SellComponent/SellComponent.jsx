import React, { useState } from "react";
import { InputNumber } from "../../../UI/InputNumber/InputNumber";
import { Input } from "../../../UI/Input/Input";
import { Select } from "../../../UI/Select/Select";
import { Button } from "../../../UI/Button/Button";
import style from "./SellComponent.module.scss";
import { TradeInGrade } from "../TradeInGrade/TradeInGrade";
import classNames from "classnames";
import { sell } from "./Filter";
import { useNavigate } from "react-router-dom";
import { getFields } from "../../../../api/carRequests";
import { useToastManager } from "../../../../hooks/useToastManager";
function SellComponent({ setStepTwo, isStepTwo }) {
  const navigate = useNavigate();
  const [requisite, setRequisite] = useState({});
  const { someToast } = useToastManager();

  const [contentForm, setContentForm] = useState({});
  function onInvite() {
    if (Object.keys(requisite).length === 5) {
      getFields("VIN", "VIN", requisite["VIN"]).then((res) => {
        if (res.length == 0) {
          someToast("VIN number is not available", "error");
        } else {
          setContentForm({ ...requisite, ...res[0] });
          setStepTwo(!isStepTwo);
          someToast("success 🦄", "success");
        }
      });
    }
  }
  function addFieldToRequisite(field, fieldValue) {
    let newRequisite = { ...requisite };
    newRequisite[field] = fieldValue;
    setRequisite(newRequisite);
  }
  return (
    <>
      {!isStepTwo ? (
        <div className={style.sell}>
          <form className={classNames(style.sell__form, "row")}>
            {sell.map((item, index) => {
              if (item.type == "select") {
                return (
                  <Select
                    key={index}
                    mode={item.size}
                    selectData={item.selectData}
                    setDataField={addFieldToRequisite}
                    field={item.field}
                  />
                );
              } else if (item.type == "input-number") {
                return (
                  <InputNumber
                    key={index}
                    mode={item.size}
                    placeholder={item.placeholder}
                    currency={item.currency}
                    onChange={(e) =>
                      addFieldToRequisite(item.field, e.target.value)
                    }
                  />
                );
              } else if (item.type == "input") {
                return (
                  <Input
                    key={index}
                    mode={item.size}
                    placeholder={item.placeholder}
                    onChange={(e) =>
                      addFieldToRequisite(item.field, e.target.value)
                    }
                  />
                );
              }
            })}
          </form>

          <p className={style.sell__text}>
            Указанная рассчетная стоимость является приблизительной и действует
            при сдаче автомобиля в trade-in
          </p>
          <div className={style.sell__buttons}>
            <Button onClick={() => navigate("/trade-in")} mode="button--dark">
              Я не помню VIN
            </Button>
            <Button
              onClick={() => onInvite()}
              disabled={Object.keys(requisite).length != 5}
            >
              Получить предложениие
            </Button>
          </div>
        </div>
      ) : (
        <TradeInGrade setStepTwo={setStepTwo} contentForm={contentForm} />
      )}
    </>
  );
}

export default SellComponent;

import React, { useState, useEffect , memo} from "react";
import style from "./CarInsuranceSelfInfo.module.scss";
import { Title } from "../../UI/Title/Title";
import { Select } from "../../UI/Select/Select";
import { Input } from "../../UI/Input/Input";
import { InputNumber } from "../../UI/InputNumber/InputNumber";
import { Subtitle } from "../../UI/Subtitle/Subtitle";
import { yearSelect, insurance } from "../formData";
import { Checkbox } from "../../UI/Checkbox/Checkbox";
import { Button } from "../../UI/Button/Button";
import { BrandModelSelect } from "../../Helpers/BrandModelSelect/BrandModelSelect";
import { addToObject } from "../../../helpers/addToObject";
import PropTypes from 'prop-types';
function CarInsuranceSelfInfoComp({ data, setData,}) {
  const [isAutoPledge, onAutoPledge] = useState(false);
  const [isAntiTheftDevice, onAntiTheftDevice] = useState(false);
  const [isInstallmentPlan, onInstallmentPlan] = useState(false);
  useEffect(() => {
    setData(addToObject("auto_pledge", isAutoPledge, data));
  }, [isAutoPledge]);
  useEffect(() => {
    setData(addToObject("anti_theft_device", isAntiTheftDevice, data));
  }, [isAntiTheftDevice]);
  useEffect(() => {
    setData(addToObject("installment_plan", isInstallmentPlan, data));
  }, [isInstallmentPlan]);

  function addToForm(field, fieldValue) {
    setData(addToObject(field, fieldValue, data));
  }

  return (
    <article className={style.form}>
      <Title>Автострахование</Title>
      <Subtitle top="16" bottom="16">
        Тип страховки
      </Subtitle>
      <Select
        selectData={insurance}
        setDataField={addToForm}
        field={insurance.field}
      />
      <Subtitle top="16" bottom="16">
        Данные вашего авто
      </Subtitle>
      <div className={style.form__selects}>
        <BrandModelSelect setOptions={setData} propsOptions={data} />
        <InputNumber
          mode="--sm-width"
          placeholder="Стоимость"
          currency={process.env.REACT_APP_CURRENCY}
          onChange={(e) => addToForm("price", e.target.value)}
        />
        <Select
          mode={yearSelect.size}
          selectData={yearSelect}
          field={yearSelect.field}
          setDataField={addToForm}
        />
        <InputNumber
          mode="--sm-width"
          placeholder="Мощность"
          currency="лс"
          onChange={(e) => addToForm("power", e.target.value)}
        />
        <Input
          mode="input--sm"
          placeholder="Гос. номер"
          onChange={(e) => addToForm("government_number", e.target.value)}
        />
      </div>
      <div className={style["check-box"]}>
        <Checkbox label="Авто в залоге" setCheck={onAutoPledge} />
        <Checkbox
          label="Противоугонное устройство"
          setCheck={onAntiTheftDevice}
        />
        <Checkbox label="Необходима рассрочка" setCheck={onInstallmentPlan} />
      </div>
      <Button mode="button--height" type = 'submit'>
        Получить предложение
      </Button>
    </article>
  );
}
CarInsuranceSelfInfoComp.propTypes = {
  setData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export const CarInsuranceSelfInfo = memo(CarInsuranceSelfInfoComp);

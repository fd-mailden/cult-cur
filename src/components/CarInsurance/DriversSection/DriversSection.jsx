import React, { useState, useEffect } from "react";
import style from "./DriversSection.module.scss";
import { InputNumber } from "../../UI/InputNumber/InputNumber";
import { Select } from "../../UI/Select/Select";
import { Icon } from "../../UI/Icon/Icon";
import { driverItem } from "./driverItem";
import { addToObject } from "../../../helpers/addToObject";
function DriversSection({ setDriver, formData }) {
  const [driers, setDrivers] = useState([driverItem]);
  const [infoDrivers, setInfoDrivers] = useState([]);
  useEffect(() => {
    setDriver(addToObject("drivers", infoDrivers, formData));
  }, [infoDrivers]);
  const addDriverInfo = (index, field, fieldValue) => {
    let newDrivers = [...infoDrivers];
    newDrivers[index] = addToObject(field, fieldValue, newDrivers[index]);
    setInfoDrivers(newDrivers);
  };
  const addDriverSelect = (index, field, fieldValue) => {
    let newDrivers = [...infoDrivers];
    newDrivers[index] = addToObject(field, fieldValue, newDrivers[index]);
    setInfoDrivers(newDrivers);
  };
  const deleteProduct = () => {
    setDrivers(driers.filter((element, index) => index < driers.length - 1));
    setInfoDrivers(
      infoDrivers.filter((element, index) => index < infoDrivers.length - 1)
    );
  };
  return (
    <div className={style.drivers}>
      {driers.map((driver, index) => (
        <div key={index} className={style.drivers__form}>
          <InputNumber
            mode={driver.age.mode}
            placeholder={driver.age.placeholder}
            onChange={(e) =>
              addDriverInfo(index, driver.age.field, e.target.value)
            }
          />
          <InputNumber
            mode={driver.experience.mode}
            placeholder={driver.experience.placeholder}
            onChange={(e) =>
              addDriverInfo(index, driver.experience.field, e.target.value)
            }
          />
          <Select
            selectData={driver.gender.selectData}
            mode={driver.gender.mode}
            field={driver.gender.selectData.field}
            index={index}
            setDataWithIndex={addDriverSelect}
          />
        </div>
      ))}
      {driers.length < 5 && (
        <button
          type="button"
          className={style["add-driver"]}
          onClick={() => setDrivers((current) => [...current, driverItem])}
        >
          <Icon name="plus" />{" "}
          <p className={style["add-driver__text"]}>Добавить водителя</p>
        </button>
      )}
      {driers.length >= 2 && (
        <button
          type="button"
          className={style["add-driver"]}
          onClick={() => deleteProduct()}
        >
          <Icon name="remove" />{" "}
          <p className={style["add-driver__text"]}>Удалить водителя</p>
        </button>
      )}
    </div>
  );
}

export { DriversSection };

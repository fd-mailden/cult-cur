import React, { useState, useEffect } from "react";
import { characteristics, charactersModel } from "../characteristics";
import { Select } from "../../UI/Select/Select";
import style from "./FormCarInfo.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { carOptions, selectBrandList } from "../../../store/cars/carSelectors";

function FormCarInfo({
  setDataToForm,
  setTradeInForm,
  tradeInForm,
  invalidFields,
}) {
  const brandList = useSelector(selectBrandList);
  const options = useSelector(carOptions);
  const [optionList, setOptionsList] = useState(options);
  const [characters, setCharacters] = useState(charactersModel(optionList));

  useEffect(() => {
    setCharacters(charactersModel(optionList));
  }, [optionList]);
  useEffect(() => {
    setOptionsList(options);
  }, [options]);

  function changeOptionList(brand) {
    let newOptions = { ...optionList };
    let models = brandList.find((item) => item.brand == brand);
    if (models) {
      let a = models.catalog.map((item) => item.model);
      newOptions["model"] = a.filter(function (item, pos) {
        return a.indexOf(item) == pos;
      });
    } else {
      newOptions["model"] = options.model;
    }
    setOptionsList(newOptions);
  }
  function setDataToForm(field, value) {
    let formData = { ...tradeInForm };
    if (field == "brand") {
      changeOptionList(value);
      if (value == "Марка") {
        formData[field] = "";
      } else {
        formData[field] = value;
      }
      formData["model"] = "";
      setTradeInForm(formData);
    } else {
      formData[field] = value;
      setTradeInForm(formData);
    }
  }
  return (
    <div className={classNames(style.info, "row")}>
      {characters.map((selectData, index) => (
        <Select
          key={index}
          selectData={selectData}
          mode={selectData.mode}
          field={selectData.field}
          setDataField={setDataToForm}
          isEmpty={invalidFields[selectData.field]}
        />
      ))}
      {characteristics.map((selectData, index) => (
        <Select
          key={index}
          selectData={selectData}
          mode={selectData.mode}
          field={selectData.field}
          setDataField={setDataToForm}
          isEmpty={invalidFields[selectData.field]}
        />
      ))}
    </div>
  );
}

export { FormCarInfo };

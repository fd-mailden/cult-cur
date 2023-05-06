import { Select } from "../../UI/Select/Select";
import React, { useEffect, useState, memo } from "react";
import { selectOptions } from "./selectOptions";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { carOptions, selectBrandList } from "../../../store/cars/carSelectors";
function BrandModelSelectComp({ setOptions, propsOptions, mode = "--max-width" }) {
  const options = useSelector(carOptions);
  const brandList = useSelector(selectBrandList);
  const [thisOptions, setThisOptions] = useState([]);
  const [objField, setObjField] = useState({});
  useEffect(() => {
    setThisOptions(selectOptions(options));
  }, [options]);
  useEffect(() => {
    let newOpt = { ...propsOptions };
    newOpt["brand"] = objField["brand"];
    newOpt["model"] = objField["model"];
    setOptions(newOpt);
  }, [objField]);
  function addDataField(field, fieldValue) {
    let newData = { ...objField };
    let newOptions = { ...options };
    if (field == "brand") {
      let thisBrand = brandList.find((item) => item.brand == fieldValue);
      let thisModels = thisBrand.catalog.map((item) => item.model);
      newOptions["model"] = thisModels.filter(function (item, pos) {
        return thisModels.indexOf(item) == pos;
      });
      setThisOptions(selectOptions(newOptions));
      newData[field] = fieldValue;
      newData["model"] = null;
      setObjField(newData);
    } else {
      newData[field] = fieldValue;
      setObjField(newData);
    }
  }

  return (
    <>
      {thisOptions.map((option, index) => (
        <Select
          key={index}
          selectData={option}
          mode={mode}
          field={option.field}
          setDataField={addDataField}
        />
      ))}
    </>
  );
}
BrandModelSelectComp.propTypes = {
  setOptions: PropTypes.func,
  propsOptions: PropTypes.object,
};
export const BrandModelSelect = memo(BrandModelSelectComp);

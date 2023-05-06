import React, { useState, useRef, memo } from "react";
import style from "./Select.module.scss";
import classNames from "classnames";
import { ReactComponent as Arrow } from "../../../assets/images/arrow.svg";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectCars,
  selectFilteredCar,
} from "../../../store/cars/carSelectors";
function SelectComponent({ ...props }) {
  const cars = useSelector(selectCars);
  const filteredCar = useSelector(selectFilteredCar);
  const [isSelect, setSelect] = useState(false);
  const [s, sets] = useState("");
  const [f, setF] = useState("");
  const {
    selectData = { name: "", data: [""] },
    mode = "",
    setInfo = sets,
    field = "",
    setDataField = setF,
    setDataWithIndex = setF,
    isEmpty = false,
    index = "1",
  } = props;
  const [title, setTitle] = useState(selectData.name);
  const [isInvalid, onInvalid] = useState(false);
  useEffect(() => {
    onInvalid(isEmpty);
  }, [isEmpty]);

  function onSelect(item) {
    setTitle(item);
    setSelect(false);
    setInfo(selectData.name, item);
    setDataField(field, item);
    setDataWithIndex(index, field, item);
    onInvalid(false);
  }

  useEffect(() => {
    if (selectData.name != "Марка") {
      setTitle(selectData.name);
    }

    if (!field && cars.length == filteredCar.length) {
      setTitle(selectData.name);
    }
  }, [selectData]);

  const ref = useRef();
  useOnClickOutside(ref, () => setSelect(false));
  return (
    <div
      className={classNames(
        style.select,
        style["select" + mode],
        isInvalid && style["select--empty"]
      )}
      ref={ref}
    >
      <div className={style.select__title} onClick={() => setSelect(!isSelect)}>
        <p
          className={classNames(
            style.select__name,
            isSelect && style["active-name"]
          )}
        >
          {title}
        </p>

        <Arrow
          className={classNames(
            style["select-arrow"],
            isSelect && style["select-arrow-active"]
          )}
        />
      </div>
      <ul
        className={classNames(
          style["select-list"],
          style["select-list" + mode],
          isSelect && style["active"]
        )}
      >
        {selectData.data.map((item, index) => (
          <li
            onClick={() => onSelect(item)}
            className={style["select-list__item"]}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
SelectComponent.propTypes = {
  mode: PropTypes.string,
  selectData: PropTypes.object,
};
export const Select = memo(SelectComponent);

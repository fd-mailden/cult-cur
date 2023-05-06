import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  carOptions,
  selectCars,
  selectFilteredCar,
} from "../store/cars/carSelectors";
import { VARIABLES_BUY } from "../settings/filterVariables";
import {
  addAddToFilteredCar,
  pushToCarOptions,
  clearCarOptions,
  setSearchResult,
} from "../store/cars/carsReducer";
import { characteristics } from "../settings/carCharacteristics";
import { getFilters } from "../helpers/getFilters";

export function useFilteringCars() {
  const dispatch = useDispatch();
  const filteredCar = useSelector(selectFilteredCar);
  const cars = useSelector(selectCars);
  const options = useSelector(carOptions);
  const [buyFilters, setBuyFilters] = useState(getFilters(options));
  const [stateOptions, setOption] = useState({});

  function carFilter(name, value) {
    if (name == "brand") {
      let objOptions = {};
      objOptions[name] = value;
      setOption(objOptions);
    } else {
      let objOptions = { ...stateOptions };
      objOptions[name] = value;
      setOption(objOptions);
    }

    if (name == "brand") {
      dispatch(clearCarOptions());
      let newCarOpt = cars.filter((item) => item.brand == value);
      newCarOpt.map((item) => {
        for (var opt in characteristics) {
          dispatch(pushToCarOptions({ name: opt, value: item[opt] }));
        }
      });
    }
  }
  function sp(name) {
    if (name) {
      let newName = name.split("-");
      return newName;
    }
  }
  useEffect(() => {
    let arr = cars;
    let optarr = Object.keys(stateOptions);
    if (optarr) {
      optarr.map((opt) => {
        if (sp(opt)[0] === "max") {
          let maxName = sp(opt)[1];
          let endList = arr.filter((item) => {
            if (stateOptions[opt]) {
              return item[maxName] < stateOptions[opt];
            } else {
              return item[maxName] > stateOptions[opt];
            }
          });
          arr = endList;
          dispatch(addAddToFilteredCar(arr));
        } else if (sp(opt)[0] == "min") {
          let minName = sp(opt)[1];
          let endList = arr.filter((item) => {
            if (item[minName]) {
              return item[minName] > stateOptions[opt];
            }
          });
          arr = endList;
          dispatch(addAddToFilteredCar(arr));
        } else {
          let endList = arr.filter((item) => item[opt] == stateOptions[opt]);
          arr = endList;
          dispatch(addAddToFilteredCar(arr));
        }
      });
    }
  }, [stateOptions]);

  function setFilter(name, value) {
    let findValue = VARIABLES_BUY.find((item) => item.showName == name);
    if (findValue) {
      carFilter(findValue.name, value);
    }
  }

  useEffect(() => {
    setBuyFilters(getFilters(options));
  }, [options]);

  function clearFilter() {
    cars.map((item) => {
      for (var opt in characteristics) {
        dispatch(pushToCarOptions({ name: opt, value: item[opt] }));
      }
    });
    setBuyFilters(getFilters(options));
    dispatch(addAddToFilteredCar(cars));
    dispatch(setSearchResult(cars));
  }
  return { buyFilters, setFilter, clearFilter, };
}

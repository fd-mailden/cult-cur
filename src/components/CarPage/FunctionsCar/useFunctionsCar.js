import React from "react";
import favorite from "../../../assets/images/functionsIcon/favorite.svg";
import compare from "../../../assets/images/functionsIcon/compare.svg";
import testDrive from "../../../assets/images/functionsIcon/test-drive.svg";
import download from "../../../assets/images/functionsIcon/download.svg";
import price from "../../../assets/images/functionsIcon/price.svg";
import { useDispatch } from "react-redux";
import { onFavorites } from "../../../store/local/localReducer";
import { useNavigate } from "react-router-dom";
import { TEST_DRIVE_ROUTES } from "../../../settings/routes";
function useFunctionsCar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const funcItems = [
    {
      icon: favorite,
      name: "В избранное",
      func: function (itemCar) {
        dispatch(onFavorites({ stateName: "favorites", carData: itemCar }));
      },
    },
    {
      icon: compare,
      name: "Сравнить",
      func: function (itemCar) {
        dispatch(onFavorites({ stateName: "comparison", carData: itemCar }));
      },
    },
    {
      icon: testDrive,
      name: "Заказать тест-драйв",
      func: function (itemCar) {
        navigate(TEST_DRIVE_ROUTES.TEST_DRIVE_CAR.generate(itemCar.objectId));
      },
    },
    {
      icon: download,
      name: "Скачать отчет по а/м",
      func: function (itemCar) {
        console.log(itemCar);
      },
    },
    {
      icon: price,
      name: "Предложить свою цену",
      func: function (itemCar) {
        console.log(itemCar);
      },
    },
  ];

  return {
    models: { funcItems },
  };
}

export { useFunctionsCar };

import React, { useState, useEffect } from "react";

const fieldNames = {
  id: "id",
  user_name: "Имя",
  phone: "телефон",
  brand: "Марка",
  model: "Модель",
  year: "Год выпуска",
  pts_owner: "ПТС Владельца",
  type_of_drive: "Привод",
  equipment: "Комплектация",
  trade_in_price: "Примерная цена",
  mileage: "Проег",
  wheel: "Руль",
  VIN: "VIN номер",
  generation: "Поколение",
  salon: "Салон",
  your_price: "Цена владельца",
  category: "Тип кузова",
  engine: "  Двигатель",
  PSD: "ПСД",
  modification: "Модификация",
  calculation_number: "calculation_number",
  KPP: "КПП",
};

export function useTradeInDropDown(initItem) {
  const [isShow, onShow] = useState(false);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const itemNames = [];
    for (var item in fieldNames) {
      itemNames.push({ name: fieldNames[item], value: initItem[item] });
    }
    setOptions(itemNames);
  }, []);
  return { isShow, onShow, options };
}

export const tagsDef = [
  { text: "Продает собственник", active: true },
  { text: "Новые поступления", active: false },
  { text: "Выгодная цена", active: false },
];
export const VARIABLES_BUY = [
  { name: "brand", showName: "Марка" },
  { name: "model", showName: "Модель" },
  { name: "minPrice", showName: "Цена от" },
  { name: "maxPrice", showName: "Цена до" },
  { name: "transmission", showName: "Коробка" },
  ///
  { name: "minYear", showName: "Год от" },
  { name: "maxYear", showName: "Год до" },
  { name: "minMileage", showName: "Пробег, от" },
  { name: "maxMileage", showName: "Пробег, до" },
  { name: "bodyType", showName: "Тип кузова" },
  ///
  { name: "driveUnit", showName: "Привод" },
  { name: "engine", showName: "Двигатель" },
  { name: "minVolume", showName: "Объем, от" },
  { name: "maxVolume", showName: "Объем, до" },
  { name: "color", showName: "Цвет" },
  //
  { name: "minVolume", showName: "Объем, от" },
  { name: "maxVolume", showName: "Объем, до" },
];

const buyAdvanced = [
  {
    selectData: {
      name: "Марка",
      data: ["Audi", "BMW", "Dodge"],
    },
    type: "select",
    size: "--sm",
  },
  {
    selectData: {
      name: "Модель",

      data: [
        "100",
        "90",
        "A3",
        "i3",
        "X6",
        "3 Series",
        "5 Series",
        "X4",
        "Grand Caravan Passenger",
        "Durango",
        "Challenger",
        "Journey",
      ],
    },
    type: "select",
    size: "--sm",
  },
  {
    type: "input",
    size: "--sm",
    placeholder: "Цена от",
    currency: process.env.REACT_APP_CURRENCY,
  },
  {
    type: "input",
    size: "--sm",
    placeholder: "Цена до",
    currency: process.env.REACT_APP_CURRENCY,
  },
  {
    selectData: {
      name: "Коробка",
      data: ["Автомат", "Полу Автомат", "Механика"],
    },
    type: "select",
    size: "--lg",
  },
  {
    type: "input",
    size: "--sm",
    placeholder: "Год от",
    currency: "",
    mode: "--none",
  },
  {
    type: "input",
    size: "--sm",
    placeholder: "Год до",
    currency: "",
    mode: "--none",
  },
  {
    type: "input",
    size: "--sm",
    placeholder: "Пробег, от",
    mode: "--none",
    currency: "",
  },
  {
    type: "input",
    size: "--sm",
    placeholder: "Пробег, до",
    mode: "--none",
    currency: "",
  },
  {
    selectData: {
      name: "Тип кузова",
      data: [
        "Седан",
        "Хетчбек",
        "Универсал",
        "Лифтбэк",
        "Купе",
        "Кабриолет",
        "Автобус",
      ],
    },
    type: "select",
    mode: "--none",
    size: "--lg",
  },
  {
    selectData: {
      name: "Привод",
      data: ["RWD", "FWD", "4WD ", "AWD"],
    },
    type: "select",
    mode: "--none",
    size: "--sm",
  },
  {
    selectData: {
      name: "Двигатель",
      data: [
        "электродвигатель",
        "комбинированный двигател",
        "поршневой двигатель ",
        "роторно-поршневой двигатель",
      ],
    },
    type: "select",
    mode: "--none",
    size: "--sm",
  },
  {
    type: "input",
    size: "--sm",
    placeholder: "Объем, от",
    mode: "--none",
    currency: "",
  },
  {
    type: "input",
    size: "--sm",
    placeholder: "Объем, до",
    mode: "--none",
    currency: "",
  },
  {
    selectData: {
      name: "Цвет",
      data: ["green", "white", "blue", "black", "orange", "bark-gray"],
    },
    type: "select",
    mode: "--none",
    size: "--lg",
  },
  {
    type: "input",
    size: "--sm",
    placeholder: "Объем, до",
    mode: "--none",
    currency: "",
  },
  {
    type: "input",
    size: "--sm",
    placeholder: "Объем, до",
    mode: "--none",
    currency: "",
  },
];

export { buyAdvanced };

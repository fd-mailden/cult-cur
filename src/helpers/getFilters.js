export function getFilters(options) {
  const filters = [
    {
      selectData: {
        name: "Марка",
        data: options ? options.brand : ["Audi", "BMW", "Dodge"],
      },
      type: "select",
      size: "--sm",
    },
    {
      selectData: {
        name: "Модель",

        data: options
          ? options.model
          : [
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
        data: options
          ? options.transmission
          : ["Автомат", "Полу Автомат", "Механика"],
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
        data: options
          ? options.category
          : [
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
        data: options ? options.type_of_drive : ["RWD", "FWD", "4WD ", "AWD"],
      },
      type: "select",
      mode: "--none",
      size: "--sm",
    },
    {
      selectData: {
        name: "Двигатель",
        data: options
          ? options.engine
          : [
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
        data: options
          ? options.color
          : ["green", "white", "blue", "black", "orange", "bark-gray"],
      },
      type: "select",
      mode: "--none",
      size: "--lg",
    },
    {
      type: "input",
      size: "--sm",
      placeholder: "Мощность, до",
      mode: "--none",
      currency: "",
    },
    {
      type: "input",
      size: "--sm",
      placeholder: "Мощность, до",
      mode: "--none",
      currency: "",
    },
  ];
  return filters;
}

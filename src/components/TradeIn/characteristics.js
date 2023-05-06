export const characteristics = [
  {
    name: "Год выпуска",
    mode: "--width232",
    data: ["2000", "2001", "2002", "2003", "2004"],
    field: "year",
  },
  {
    name: "Поколение",
    mode: "--width232",
    data: ["Старое ", "Новое"],
    field: "generation",
  },

  {
    name: "Тип кузова",
    mode: "--width232",
    data: [
      "Седан",
      "Хетчбек",
      "Универсал",
      "Лифтбэк",
      "Купе",
      "Кабриолет",
      "Автобус",
    ],
    field: "category",
  },
  {
    name: "Модификация",
    mode: "--width232",
    data: ["есть ", "нет"],
    field: "modification",
  },
  {
    name: "Двигатель",
    mode: "--width232",
    data: [
      "электродвигатель",
      "комбинированный двигател",
      "поршневой двигатель ",
      "роторно-поршневой двигатель",
    ],
    field: "engine",
  },
  {
    name: "Привод",
    mode: "--width232",
    data: ["AWD", "RWD", "FWD", "4WD"],
    field: "type_of_drive",
  },
  {
    name: "КПП",
    mode: "--width232",
    data: ["Механическая", "Автоматическая", "Полуавтоматическая"],
    field: "KPP",
  },
  {
    name: "Проег",
    mode: "--width232",
    data: [
      "до 30000 км",
      "от 30000 км до 80 тыс. км",
      "от 80 тыс. км до 100 тыс. км",
      "до 100 тыс. км",
    ],
    field: "mileage",
  },
];
export function charactersModel(optionList) {
  const charactersModel = [
    {
      name: "Марка",
      mode: "--width232",
      data: optionList
        ? ["Марка", ...optionList.brand]
        : ["BMV", "Citroen", "Lexus", "Mazda", "Opel"],
      field: "brand",
    },
    {
      name: "Модель",
      mode: "--width232",
      data: optionList
        ? optionList.model
        : ["BMV", "Citroen", "Lexus", "Mazda", "Opel"],
      field: "model",
    },
  ];
  return charactersModel;
}

export const city = {
  name: "Салон",
  mode: "--width232",
  data: ["Киев", "Mall Equator", "Центральный рынок"],
  field: "salon",
};

export const additional = [
  {
    name: "Комплектация",
    mode: "--width232",
    data: ["Минимальная", "Максиальная"],
    field: "equipment",
  },
  {
    name: "ПСД",
    mode: "--width232",
    data: ["ЭПСД", "ПСД"],
    field: "PSD",
  },
];

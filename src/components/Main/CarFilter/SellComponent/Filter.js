const sell = [
  {
    type: "input",
    size: "input--lg",
    placeholder: "Введите VIN номер",
    field: "VIN",
  },
  {
    type: "input-number",
    size: "--sm",
    placeholder: "Пробег",
    currency: "км",
    field: "mileage",
  },
  {
    selectData: {
      name: "Салон",
      data: ["Киев", "Mall Equator", "Центральный рынок",],
      
    },
    type: "select",
    size: "--sm",field: "salon",
  },
  {
    type: "input",
    size: "input--lg",
    placeholder: "Владельцев по ПТС",
    field: "pts_owner",
  },
  {
    selectData: {
      name: "ПТС",
      data: ["ПТС", "ЭПТС"],
     
    },
    type: "select",
    size: "--lg", field: 'PTS'
  },
];

export { sell };

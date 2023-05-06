export const driverItem = {
  age: {
    placeholder: "Возраст",
    mode: "--width130",
    type: "number",
    field: "age",
  },
  experience: {
    placeholder: "Стаж",
    mode: "--width130",
    type: "number",
    field: "experience",
  },
  gender: {
    type: "select",
    selectData: {
      name: "Пол",
      data: ["Женский", "Мужской"],
      field: "gender",
    },
    mode: "--width160",
  },
};

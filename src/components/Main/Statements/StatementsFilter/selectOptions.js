export function selectOptions(options) {
  const info = [
    {
      name: "Марка",
      data: options
        ? options.brand
        : ["BMV", "Citroen", "Lexus", "Mazda", "Opel"],
      field: "brand",
    },
    {
      name: "Модель",
      data: options
        ? options.model
        : ["BMV", "Citroen", "Lexus", "Mazda", "Opel"],
      field: "model",
    },
  ];
  return info;
}

export function selectOptions(options) {
  const info = [
    {
      name: "Марка",
      data: options
        ? options.brand
        : ["BMV", "Citroen", "Lexus", "Mazda", "Opel"],
      field: "brand",
      mode: "--max-width",
    },
    {
      name: "Модель",
      data: options
        ? options.model
        : ["BMV", "Citroen", "Lexus", "Mazda", "Opel"],
      mode: "--max-width",
      field: "model",
    },
  ];
  return info;
}

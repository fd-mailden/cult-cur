let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_en = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let arr_EN = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const randomInteger = (min, max) =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1));
const compareRandom = () => Math.random() - 0.5;
export function generateVIN() {
  let arr = [...arr_num, ...arr_en, ...arr_EN];
  arr.sort(compareRandom);
  let VIN = "";
  for (let i = 0; i < 17; i++) {
    VIN += arr[randomInteger(0, arr.length - 1)];
  }
  return VIN;
}

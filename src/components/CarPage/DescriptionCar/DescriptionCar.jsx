import React from "react";
import style from "./DescriptionCar.module.scss";
import { DropDown } from "../../Helpers/DropDown/DropDown";
import { Icon } from "../../UI/Icon/Icon";
function DescriptionCar() {
  const check = [
    "Гарантия юридической чистоты",
    "Расширенная проверка по 95 параметрам",
  ];
  const description = [
    {
      name: "Безопасность",
      description:
        "БезопасностьБезопасностьБезопасностьБезопасностьБезопасностьБезопасностьБезопасностьБезопасность",
    },
    {
      name: "Дополнительно",
      description: "ДополнительноДополнительноДополнительноДополнительно",
    },
    {
      name: "Интерьер",
      description: "ИнтерьерИнтерьерИнтерьерИнтерьерИнтерьерИнтерьер",
    },
    {
      name: "Комфорт",
      description: "КомфортКомфортКомфортКомфортКомфортКомфортКомфорт",
    },
    {
      name: "Мультимедиа",
      description:
        "МультимедиаМультимедиаМультимедиаМультимедиаМультимедиаМультимедиаМультимедиа",
    },
    {
      name: "Охранные системы",
      description:
        "Охранные системыОхранные системыОхранные системыОхранные системы",
    },
    {
      name: "Регулировки",
      description:
        "РегулировкиРегулировкиРегулировкиРегулировки РегулировкиРегулировки",
    },
  ];
  return (
    <ul className={style.description}>
      {check.map((item, index) => (
        <li key={index} className={style["description__check"]}>
          <Icon name="li_check" />
          {item}
        </li>
      ))}
      {description.map((item, index) => (
        <DropDown key={index} item={item} />
      ))}
    </ul>
  );
}

export { DescriptionCar };

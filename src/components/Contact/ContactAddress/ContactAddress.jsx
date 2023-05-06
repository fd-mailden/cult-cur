import React, { useContext } from "react";
import style from "./ContactAddress.module.scss";
import { useContactContext } from "../../../context/contactContext";
import { Button } from "../../UI/Button/Button";
import { ButtonCheck } from "../../UI/ButtonCheck/ButtonCheck";
function ContactAddress() {
  const { contact, onActiveMarker } = useContactContext();

  return (
    <section className={style.address}>
      <div className={style.address__inner}>
        {contact.map((item, index) => (
          <div key={index} className={style["address-item"]}>
            <div className={style["address-item__left"]}>
              <h4 className={style["address-item__name"]}>{item.name}</h4>
              <a href="" className={style["address-item__link"]}>
                {item.address}
              </a>
            </div>
            <div className={style["address-item__center"]}>
              <a
                href={"tel:" + item.phone}
                className={style["address-item__phone"]}
              >
                {item.phone}
              </a>
              <p className={style["address-item__link"]}>{item.workTime}</p>
            </div>
            <div className={style["address-item__right"]}>
              <Button mode= 'button--height44'>Оставить заявку</Button>
              <ButtonCheck
                onClick={() => onActiveMarker(item.id)}
                isActive={item.active}
                trueText="На карте"
                falseText="Показать на карте"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export { ContactAddress };

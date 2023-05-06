import React, { useEffect, useState } from "react";
import style from "./WindowInfo.module.scss";
import { Button } from "../../UI/Button/Button";
import { Icon } from "../../UI/Icon/Icon";
import { Link } from "react-router-dom";
import { CREDIT_ROUTES } from "../../../settings/routes";
function WindowInfo({ setFeedback, item, onBidding }) {
  const benefit = [
    { name: "В Trade-in", benefit: `${item.newPrice} $ ` },
    { name: "В кредит", benefit: `${item.newPrice} $ ` },
  ];
  const [allBenefit, setAllBenefit] = useState(0);
  useEffect(() => {
    benefit.map((benefitItem) =>
      setAllBenefit(allBenefit + benefitItem.benefit)
    );
  }, []);

  return (
    <div className={style.info}>
      <div className={style.info__head}>
        <h4 className={style.info__title}>{item.brand + " " + item.model}</h4>
        <h4 className={style.info__title}>{item.newPrice} $</h4>
      </div>
      <div className={style.section}>
        <p className={style.info__text}>Стоимость авто</p>
        <div className={style.sale}>
          <p className={style.sale__percent}>-7%</p>
          <p className={style.sale__price}>{item.oldPrice} $</p>
        </div>
      </div>
      <h4 className={style.info__price}>Хорошая цена</h4>
      <div className={style.benefit}>
        {benefit.map((item, index) => (
          <div key={index} className={style.section}>
            <p className={style.benefit__text}>
              <Icon name="check_box" className={style.benefit__check} />
              {item.name}
            </p>
            <p className={style.info__text}>- {item.benefit}₽</p>
          </div>
        ))}
      </div>
      <div className={style.section}>
        <p className={style.benefit__title}>Ваша выгода</p>
        <p className={style.benefit__title}>0 $</p>
      </div>
      <p className={style.description}>
        Максимальная скидка, которую может предоставить дилер. Подробности можно
        узнать по телефону.
      </p>
      <div className={style.button}>
        <Button onClick={() => setFeedback(true)} mode="button--width165">
          Звонок
        </Button>
        <Button mode="button--width165black" onClick = {()=>onBidding(true)}>Провести торг</Button>
      </div>
      <Link to={CREDIT_ROUTES.CREDIT.path} className={style.link}>
        Рассчитать кредит
      </Link>
    </div>
  );
}

export { WindowInfo };

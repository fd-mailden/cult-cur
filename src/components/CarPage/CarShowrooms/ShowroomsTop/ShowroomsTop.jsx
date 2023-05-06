import React from "react";
import style from "./ShowroomsTop.module.scss";
import background from "../../../../assets/images/background/showroom-bg.png";
import { Button } from "../../../UI/Button/Button";
import { Icon } from "../../../UI/Icon/Icon";

function ShowroomsTop() {
  return (
    <div className={style.banner}>
      <img src={background} alt="background-showroom" className={style.banner__background}/>
        <div className={style["banner-info"]}>
          <div className={style["banner-info__left"]}>
            <h3 className={style["banner-info__title"]}>
              Автосалон в {process.env.REACT_APP_WHERE_PLACE}
            </h3>
            <p className={style["banner-info__address"]}>{process.env.REACT_APP_CITY}, улица №</p>
            <a href="tel:8 (800)-551-84-21" className={style.banner__phone}>
          8 (800)-551-84-21
        </a>
          </div>
          <div className={style["banner-info__right"]}>
            <Icon name='star' className={style['banner-info__start']}/>
            <h3 className={style["banner-info__new"]}>4,6</h3>
            <p className={style["banner-info__max"]}>/ 5.0</p>
          </div>
          <Button>Оставить отзыв</Button>

        </div>
       
    </div>
  );
}

export { ShowroomsTop };

import React from "react";
import style from "./ContactCard.module.scss";
import { Icon } from "../../UI/Icon/Icon";
function ContactCard({ infoMarker }) {
  return (
    <div className={style.marker}>
      <div className={style["marker-number"]}>
        <Icon name="star" />
        <h3 className={style["marker-number__new"]}>
          {infoMarker ? infoMarker.num : "4,3"}
        </h3>
        <p className={style["marker-number__all"]}>
          / {infoMarker ? infoMarker.max_num : "5.0"}
        </p>
      </div>
      <h4 className={style.marker__address}>
        Автосалон в <a href="">{process.env.REACT_APP_WHERE_PLACE}</a>
        <Icon name="map_marker" />
      </h4>
      <a
        className={style.marker__link}
        href={infoMarker ? "tel:" + infoMarker.phone : "---"}
      >
        {infoMarker ? infoMarker.phone : "---"}
      </a>
      <div className={style.marker__route}>
        <a
          className={style.marker__link}
          rel="noopener"
          target="_blank"
          href={infoMarker ? infoMarker.url_map : "---"}
        >
          {infoMarker ? infoMarker.address : "---"}
        </a>
        <a
          rel="noopener"
          target="_blank"
          href={infoMarker ? infoMarker.url_map : "---"}
          className={style.marker__build}
        >
          Построить маршрут
        </a>
      </div>
    </div>
  );
}

export { ContactCard };

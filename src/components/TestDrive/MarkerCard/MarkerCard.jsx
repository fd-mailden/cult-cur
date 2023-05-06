import React from "react";
import style from "./MarkerCard.module.scss";
import { ReactComponent as Star } from "../../../assets/images/star.svg";
import { ReactComponent as Marker } from "../../../assets/images/marker.svg";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectContact } from "../../../store/cars/carSelectors";
function MarkerCard(props) {
  const contact = useSelector(selectContact);
  const { mode = "", infoMarker = contact[1] } = props;

  return (
    <div className={classNames(style.marker, style["marker--" + mode])}>
      <div className={style["marker-number"]}>
        <Star />
        <h3 className={style["marker-number__new"]}>
          {infoMarker ? infoMarker.num : "--"}
        </h3>
        <p className={style["marker-number__all"]}>
          / {infoMarker ? infoMarker.max_num : "--"}
        </p>
      </div>
      <a
        rel="noopener"
        target="_blank"
        href={infoMarker ? infoMarker.url_map : "--"}
        className={style.marker__address}
      >
        Автосалон в {infoMarker ? infoMarker.name : "--"}
        <Marker />
      </a>
      <a
        className={style.marker__phone}
        href={infoMarker ? "tel:" + infoMarker.phone : "--"}
      >
        {infoMarker ? infoMarker.phone : "--"}
      </a>
    </div>
  );
}

export { MarkerCard };

import React, { memo } from "react";
import style from "./Offer.module.scss";
import { Icon } from "../../UI/Icon/Icon";
function OfferComponent({ offer, setOffer }) {
  return (
    <div className={style.offer} onClick={() => setOffer(offer.id)}>
      <div className={style["offer-left"]}>
        <div className={style["offer-check"]}>
          <div className={style["check-box"]}>
            {offer.flag && (
              <Icon name="check_box" className={style["check-box__icon"]} />
            )}
          </div>
          <img src={offer.image} alt="" className={style.offer__image} />
        </div>
        <div className={style.offer__info}>
          <p className={style.offer__light}>{offer.name}</p>
          <p className={style.offer__dim}>{offer.programs + " программ"}</p>
        </div>
      </div>
      <div className={style["offer-right"]}>
        <p className={style.offer__light}>{"от " + offer.price + "₽"}</p>
        <p className={style.offer__dim}>{offer.percent}</p>
      </div>
    </div>
  );
}

export const Offer = memo(OfferComponent);

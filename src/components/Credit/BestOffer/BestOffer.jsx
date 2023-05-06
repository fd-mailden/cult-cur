import React, { useEffect, useState } from "react";
import style from "./BestOffer.module.scss";
import { offers } from "../offers";
import { Offer } from "../Offer/Offer";
import classNames from "classnames";
import { Icon } from "../../UI/Icon/Icon";
import { OfferList } from "../OfferList/OfferList";
function BestOffer({ setActiveOffer }) {
  const [isOffersLengthFull, setOffersLengthFull] = useState(false);
  const [thisOffers, setOffers] = useState(offers.slice(0, 3));
  useEffect(() => {
    if (!isOffersLengthFull) {
      setOffers(offers.slice(0, 3));
    } else {
      setOffers(offers);
    }
  }, [isOffersLengthFull]);
  function addOffer(offerId) {
    let newOffers = offers.map((offer) => {
      if (offer.id == offerId) {
        offer.flag = true;
        setActiveOffer({
          credit_id: offer.id,
          credit_price: offer.price,
          credit_bank: offer.name,
        });
        return offer;
      } else {
        offer.flag = false;
        return offer;
      }
    });
    setOffers(newOffers);
  }

  return (
    <section className={style.offers}>
      <p className={style.offers__title}>Лучшие предложения</p>
      <div className={style.offers__wrapper}>
        <OfferList offers={thisOffers} addOffer={addOffer} />
        <button
          className={classNames(
            style.offers__button,
            isOffersLengthFull && style["offers__button--active"]
          )}
          onClick={() => setOffersLengthFull(!isOffersLengthFull)}
        >
          {!isOffersLengthFull
            ? `Показать еще ${offers.length - 3} предложений`
            : "Закрыть"}
          <Icon name="arrow" />
        </button>
      </div>
    </section>
  );
}

export default BestOffer;

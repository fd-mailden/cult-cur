import React from "react";
import {Offer} from '../Offer/Offer'
function OfferList({offers, addOffer}) {
  return (
    <>
      {offers.map((offer, index) => (
        <Offer key={index} offer={offer} setOffer={addOffer} />
      ))}
    </>
  );
}

export { OfferList };

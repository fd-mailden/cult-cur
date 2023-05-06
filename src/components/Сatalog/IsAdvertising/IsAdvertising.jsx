import React from "react";
import { ChoiceOfAdvertising } from "../../Advertising/ChoiceOfAdvertising/ChoiceOfAdvertising";
import { CarCard } from "../../Main/CarCard/CarCard";

function IsAdvertising({item}) {
  return (
    <>
      {item.type == "advertising" ? (
        <ChoiceOfAdvertising componentName={item.component} />
      ) : (
        <CarCard car={item} mode="col-sm-6 col-lg-4 col-xl-4" />
      )}
    </>
  );
}

export { IsAdvertising };

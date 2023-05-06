import React from "react";
import { AdvertisingNewProduct } from "../AdvertisingNewProduct/AdvertisingNewProduct";
import { AdvertisingGuarantee } from "../AdvertisingGuarantee/AdvertisingGuarantee";
import { AdvertisingMileage } from "../AdvertisingMileage/AdvertisingMileage";
import { AdvertisingRedeem } from "../AdvertisingRedeem/AdvertisingRedeem";
import { AdvertisingPrice } from "../AdvertisingPrice/AdvertisingPrice";
import PropTypes from "prop-types";

function ChoiceOfAdvertising({ componentName }) {
  return (
    <>
      {componentName == "AdvertisingNewProduct" && <AdvertisingNewProduct />}
      {componentName == "AdvertisingGuarantee" && <AdvertisingGuarantee />}
      {componentName == "AdvertisingMileage" && <AdvertisingMileage />}
      {componentName == "AdvertisingRedeem" && <AdvertisingRedeem />}
      {componentName == "AdvertisingPrice" && <AdvertisingPrice />}
  </>
  );
}
ChoiceOfAdvertising.propTypes = {
  componentName: PropTypes.string,
};
export { ChoiceOfAdvertising };

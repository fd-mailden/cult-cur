import React, { useEffect, useState } from "react";
import { useTestDriveContext } from "../../../context/testDriveContext";
import { market } from "./market";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaContactForm from "../../../helpers/yup/yup";
import { usePostData } from "../../../hooks/usePostData";
import { getDate } from "../../../helpers/getDate";
function useTestDriveForm() {
  const { setAutoSalon, allSalons } = useTestDriveContext();
  const [formData, setFormData] = useState({});
  const [marketState, setMarketState] = useState(market);
  const [isChoosingSalon, onChoosingSalon] = useState(false);
  const { error, loading, postingData } = usePostData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schemaContactForm) });
  const onSubmit = (data) => submitForm({ ...data, ...formData });

  useEffect(() => {
    if (allSalons) {
      let newMarket = allSalons.map((item) => item.name);
      let dataMarker = {
        name: "Автосалон",
        data: newMarket ? newMarket : ["Автосалон", "Батайск", "City Plaza"],
        field: "salon",
      };
      setMarketState(dataMarker);
    }
  }, [allSalons]);
  function addToForm(field, fieldValue) {
    let newData = { ...formData };
    newData[field] = fieldValue;
    const date = getDate();
    newData.date = date;
    setFormData(newData);
    setAutoSalon(fieldValue);
  }
  function submitForm(data) {
    if (!data.salon) {
      return onChoosingSalon(true);
    }
    if (!data.brand || !data.model) {
      return onChoosingSalon(true);
    }
    !error && reset();
    postingData("test-drive_declaration", data);
    onChoosingSalon(false);
  }

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
    marketState,
    setMarketState,
    isChoosingSalon,
    loading,
    addToForm,
    formData,
    setFormData,
  };
}

export { useTestDriveForm };

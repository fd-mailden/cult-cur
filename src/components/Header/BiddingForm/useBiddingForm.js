import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaFormMail from "../../../helpers/yup/yupMailForm";
import { usePostData } from "../../../hooks/usePostData";
import { getDate } from "../../../helpers/getDate";
export function useBiddingForm(car, onClose) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schemaFormMail) });
  const onSubmit = (data) => submitForm(data);
  const { error, loading, postingData } = usePostData();
  function submitForm(data) {
    data.date = getDate();
    data.carId = car.objectId;
    data.model = car.model;
    data.brand = car.brand;
    postingData("bidding", data);
    !error && reset();
    !error && onClose(false)
  }
  return {
    models: { errors, register, loading },
    commands: { onSubmit, handleSubmit },
  };
}

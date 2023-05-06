import React from "react";
import schemaContactForm from "../../../helpers/yup/yup";
import { usePostData } from "../../../hooks/usePostData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getDate } from "../../../helpers/getDate";
export function useTestThisCarForm(car) {
  const { error, loading, postingData } = usePostData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schemaContactForm) });
  const onSubmit = (data) => submitForm(data);
  function submitForm(data) {
    data.salon = car.salon;
    data.model = car.model;
    data.brand = car.brand;
    data.date = getDate();
    console.log(data);
    postingData("test-drive_declaration", data);
    if (!error) reset();
  }
  return {
    models: { error, loading: loading ? loading : false, register, errors },
    commands: { onSubmit, handleSubmit },
  };
}

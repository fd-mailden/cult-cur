import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaContactForm from "../helpers/yup/yup";
import { usePostData } from "./usePostData";
import { getDate } from "../helpers/getDate";

export function useSubmitContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schemaContactForm) });
  const onSubmit = (data) => submitForm(data);
  const { error, loading, postingData } = usePostData();
  function submitForm(data) {
    if (!data.connection_type) {
      data.connection_type = "Звонок";
    }
    data.date = getDate();
    postingData("call_me", data);
    !error && reset();
  }
  return {
    models: { errors, register, loading },
    commands: { onSubmit, handleSubmit },
  };
}

import React, { useState, useEffect } from "react";
import schemaContactForm from "../../../../helpers/yup/yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postFirebaseRequest } from "../../../../api/carRequests";
import { useNavigate } from "react-router-dom";
import { CATALOG_ROUTES } from "../../../../settings/routes";
import { useToastManager } from "../../../../hooks/useToastManager";
import { getDate } from "../../../../helpers/getDate";

export function useStatementsFilter(loanOffers) {
  const { someToast } = useToastManager();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isLoad, setLoad] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaContactForm) });
  const onSubmit = (data) =>
    submitForm({ ...data, ...formData, ...loanOffers });

  function submitForm(dataForm) {
    setLoad(true);
    let date = getDate();
    dataForm.date = date;
    postFirebaseRequest("buy_car_on_credit", dataForm)
      .then((res) => {
        setLoad(false);
        navigate(CATALOG_ROUTES.CATALOG.path);
        someToast("Thanks for the application", "success");
      })
      .catch((err) => {
        setLoad(false);
        someToast("Try again later !", "error");
      });
  }

  function addToForm(field, fieldValue) {
    let newData = { ...formData };
    newData[field] = fieldValue;
    setFormData(newData);
  }
  return{
    models: { register, errors, isLoad, formData },
    commands: { addToForm, handleSubmit, onSubmit, setFormData},
  };
}

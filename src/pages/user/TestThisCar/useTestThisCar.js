import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFields } from "../../../api/carRequests";
import { selectContact } from "../../../store/cars/carSelectors";
import { useToastManager } from "../../../hooks/useToastManager";
export function useTestThisCar() {
  const { someToast } = useToastManager();
  let location = useLocation();
  const contact = useSelector(selectContact);
  const [loading, setLoading] = useState(true);
  const [car, setCar] = useState({});
  const [marker, setMarker] = useState({});

  useEffect(() => {
    let idCar = location.pathname.split("/");
    getFields("car-list", "objectId", idCar[idCar.length - 1])
      .then((res) => {
        setCar(res[0]);
        setLoading(false);
      })
      .catch((err) => {
        someToast("try again later", "error");
      });
  }, []);

  useEffect(() => {
    const salonAddress = contact.find((item) => item.name === car.salon);
    if (salonAddress) {
      setMarker(salonAddress);
    }
  }, [contact, car]);

  return {
    models: { car, loading, marker },
  };
}

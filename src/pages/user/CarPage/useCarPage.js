import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useOnActiveModalWindow } from "../../../hooks/useOnActiveModalWindow";
import { getFields } from "../../../api/carRequests";

export function useCarPage() {
  let location = useLocation();
  const { isOpen, onShowWindow } = useOnActiveModalWindow();
  const [isFeedback, setFeedback] = useState(false);
  const [isBIdding, onBidding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [car, setCar] = useState(null);

  useEffect(() => {
    let idCar = location.pathname.split("/");
    getFields("car-list", "objectId", idCar[idCar.length - 1]).then((res) => {
      setCar(res[0]);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setLoading(false);
    });
  }, [location]);
  
  useEffect(() => {
    setFeedback(false);
    onBidding(false);
  }, [isOpen]);

  return {
    models: { car, isOpen, isFeedback, loading, isBIdding },
    commands: { onShowWindow, setFeedback, onBidding },
  };
}

export default useCarPage;

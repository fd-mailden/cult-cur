import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCars, selectLoading } from "../store/cars/carSelectors";
function useSimilar(character) {
  const cars = useSelector(selectCars);
  const loading = useSelector(selectLoading);
  const [load, onLoad] = useState(true);
  const [carsData, setCarsData] = useState(null);
  useEffect(() => {
    if (cars) {
      let filteredCars = cars.filter((item) => item.category == character);
      if (filteredCars) {
        setCarsData(filteredCars);
        onLoad(false);
      } else {
        setCarsData(cars);
        onLoad(false);
      }
    }
  }, [loading, character]);

    

  return { load, carsData };
}

export { useSimilar };

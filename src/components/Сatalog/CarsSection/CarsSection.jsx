import React, { useState, useEffect } from "react";
import { СatalogGrid } from "../СatalogGrid/СatalogGrid";
import { СatalogFilter } from "../СatalogFilter/СatalogFilter";
import { useSelector } from "react-redux";
import {
  selectCatalog,
  selectLoading,
  selectSearchResult,
} from "../../../store/cars/carSelectors";
function CarsSection() {
  const carCatalog = useSelector(selectCatalog);
  const searchResult = useSelector(selectSearchResult);
  const loading = useSelector(selectLoading);
  const [carList, setCarList] = useState(carCatalog);
  useEffect(() => {
    setCarList(carCatalog);
  }, [loading]);

  useEffect(() => {
    searchResult.length ? setCarList(searchResult) : setCarList(carCatalog);
  }, [searchResult]);
  function filteredCategory(category) {
    const newCarlist = searchResult.filter((word) => word.category == category);
    setCarList(newCarlist);
  }
  const filteredCars = (category) => {
    !category ? setCarList(searchResult) : filteredCategory(category);
  };

  return (
    <>
      <СatalogFilter filteredCars={filteredCars} />
      <СatalogGrid carCatalog={carList} loading={loading} />
    </>
  );
}

export { CarsSection };

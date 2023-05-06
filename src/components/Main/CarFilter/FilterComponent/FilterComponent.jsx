import React, { useState, useEffect } from "react";
import style from "./FilterComponent.module.scss";
import classNames from "classnames";
import { RadioBtn } from "../../../UI/RadioBtn/RadioBtn";
import { Button } from "../../../UI/Button/Button";
import { Tag } from "../../../UI/Tag/Tag";
import { useSelector, useDispatch } from "react-redux";
import { useFilteringCars } from "../../../../hooks/useFilteringCars";
import {
  selectFilteredCar,
  selectCars,
} from "../../../../store/cars/carSelectors";
import {
  setSearchResult,
  addAddToFilteredCar,
} from "../../../../store/cars/carsReducer";
import { FilterList } from "../FilterList";
import { useNavigate } from "react-router-dom";
import { tagsDef } from "./Filter";
function FilterComponent() {
  const { buyFilters, setFilter, clearFilter } = useFilteringCars();
  const [isAdvancedSearch, setAdvancedSearch] = useState(false);
  const cars = useSelector(selectCars);
  const filteredCar = useSelector(selectFilteredCar);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function navigateToCars() {
    await dispatch(setSearchResult(filteredCar));
    await navigate("/catalog");
    await window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }

  return (
    <div className={style.filter}>
      <FilterList
        buyFilters={buyFilters}
        setFilter={setFilter}
        isAdvancedSearch={isAdvancedSearch}
      />
      <div className={style.filter__tags}>
        {tagsDef.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
      <div className={style.filter__bottom}>
        <RadioBtn
          setAdvancedSearch={setAdvancedSearch}
          description="Расширенный поиск"
        />
        <div className={style["bottom-buttons"]}>
          <Button mode="button--dark" onClick={() => clearFilter()}>
            Очистить поиск
          </Button>
          <Button onClick={() => navigateToCars()}>
            Показать {filteredCar.length} авто
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;

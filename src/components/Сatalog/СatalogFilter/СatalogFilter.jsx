import React, { useState } from "react";
import style from "./СatalogFilter.module.scss";
import { filterItems } from "../filter";
import classNames from "classnames";
function СatalogFilter({ filteredCars }) {
  const [category, setCategory] = useState("");

  function addCategory(newCategory) {
    if (newCategory === category) {
      setCategory("");
      filteredCars("");
    } else {
      setCategory(newCategory);
      filteredCars(newCategory);
    }
  }

  return (
    <article className={style["catalog-filter"]}>
      {filterItems.map((item, index) => (
        <div
          key={index}
          className={classNames(
            style["catalog-filter__item"],
            category === item.name && style["catalog-filter__item--active"]
          )}
          onClick={() => addCategory(item.name)}
        >
          <p className={style["catalog-filter__name"]}>{item.name}</p>
          <img
            className={style["catalog-filter__image"]}
            src={item.image}
            alt="car"
          />
        </div>
      ))}
    </article>
  );
}

export { СatalogFilter };

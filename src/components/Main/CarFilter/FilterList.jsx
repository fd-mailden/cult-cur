import React from "react";
import classNames from "classnames";
import style from "./FilterComponent/FilterComponent.module.scss";
import { Select } from "../../UI/Select/Select";
import { InputNumber } from "../../UI/InputNumber/InputNumber";

function FilterList({ buyFilters, setFilter, isAdvancedSearch }) {
  return (
    <div className={classNames(style.filter__item, "row")}>
      {buyFilters.map((item, index) => {
        if (item.type == "select") {
          return (
            <Select
              key={index}
              mode={
                item.mode
                  ? isAdvancedSearch
                    ? item.size
                    : item.mode
                  : item.size
              }
              selectData={item.selectData}
              setInfo={setFilter}
            />
          );
        } else if (item.type == "input") {
          return (
            <InputNumber
              key={index}
              mode={
                item.mode
                  ? isAdvancedSearch
                    ? item.size
                    : item.mode
                  : item.size
              }
              placeholder={item.placeholder}
              currency={item.currency}
              onChange={(e) => setFilter(item.placeholder, e.target.value)}
            />
          );
        }
      })}
    </div>
  );
}

export { FilterList };

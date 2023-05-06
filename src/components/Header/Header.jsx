import React, { useState, useEffect } from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { Filter } from "./Filter/Filter";
import { FilterMenu } from "./FilterMenu/FilterMenu";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { HeaderContext } from "../../context/headerContext";
import { useSelector } from "react-redux";
import { selectBrandList } from "../../store/cars/carSelectors";
import { useDebounce } from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchResult } from "../../store/cars/carsReducer";
import PropTypes from "prop-types";

function Header({ inView }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectBrands = useSelector(selectBrandList);
  const [isBurgerActive, setBurgerActive] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [brandList, setBrandList] = useState([]);
  const breadcrumbs = useBreadcrumbs();
  const [searchQuery, setSearchQuery] = useState("");
  const { debouncedValue, isLoudDebounce } = useDebounce(searchQuery, 1000);
  useEffect(() => {
    setBrandList(selectBrands);
  }, [selectBrands]);
  function filterBrand(dataFilter, searchedText) {
    let value = dataFilter.filter((item) =>
      item.brand.toLowerCase().includes(searchedText.toLowerCase())
    );
    return value;
  }
  useEffect(() => {
    if (debouncedValue) {
      setBrandList(filterBrand(selectBrands, debouncedValue));
    } else {
      setBrandList(selectBrands);
    }
  }, [debouncedValue]);
  const handelSubmit = (e) => {
    e.preventDefault();
    let brandCatalog = brandList.map((brand) => [...brand.catalog]);
    let newCatalog = [].concat(...brandCatalog);
    dispatch(setSearchResult(newCatalog));
    navigate("/catalog");
  };
  return (
    <HeaderContext.Provider
      value={{
        setBurgerActive,
        isBurgerActive,
        isOpenMenu,
        setOpenMenu,
        breadcrumbs,
        brandList: brandList,
        isLoudDebounce,
        setSearchQuery,
        searchQuery,
        inView,
        handelSubmit,
      }}
    >
      <BurgerMenu />
      <HeaderMenu />
      <Filter />
      <FilterMenu />
    </HeaderContext.Provider>
  );
}
Header.propTypes = {
  inView: PropTypes.bool,
};
export { Header };

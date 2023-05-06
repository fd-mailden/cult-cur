import React, { useEffect } from "react";
import style from "./Favorites.module.scss";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { FormContactUs } from "../../../components/Main/FormContactUs/FormContactUs";
import { catalog } from "../../../components/Main/Sale/catalog";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import { useSelector} from "react-redux";
import { selectFavorites } from "../../../store/local/localSelectors";
import { GridFavorites } from "../../../components/Favorites/GridFavorites/GridFavorites";

function Favorites() {
  const favorites = useSelector(selectFavorites);
  return (
    <MainWrapper mode="white">
      <div className={style.favorites}>
        <Breadcrumbs />
        <h1 className={style.favorites__title}>Избранное</h1>
        <GridFavorites favoritesCar={favorites} carCatalog={catalog} />
      </div>
      <FormContactUs />
    </MainWrapper>
  );
}

export { Favorites };

import React from "react";
import PropTypes from "prop-types";
import { Grid } from "../../UI/Grid/Grid";
import { CarCard } from "../../Main/CarCard/CarCard";
import { Skeleton } from "../../UI/Skeleton/Skeleton";
import { FavoritesCard } from "../FavoritesCard/FavoritesCard";
function GridFavorites({ favoritesCar, carCatalog }) {
  return (
    <Grid>
      {favoritesCar == null
        ? carCatalog.map((item, index) => <Skeleton key={index} />)
        : favoritesCar.map((item, index) => (
            <CarCard key={index} car={item} mode="col-sm-6 col-lg-4 col-xl-4" />
          ))}
      <FavoritesCard />
    </Grid>
  );
}

GridFavorites.propTypes = { favoritesCar: PropTypes.array };

export { GridFavorites };

import React from "react";
import { advertising } from "../filter";
import { Grid } from "../../UI/Grid/Grid";
import { Skeleton } from "../../UI/Skeleton/Skeleton";
import { IsAdvertising } from "../IsAdvertising/IsAdvertising";
function СatalogGrid({ loading, carCatalog }) {
  return (
    <Grid>
      {loading
        ? advertising.map((item, index) => <Skeleton key={index} />)
        : carCatalog.map((item, index) => (
            <IsAdvertising key={index} item={item} />
          ))}
    </Grid>
  );
}

export { СatalogGrid };

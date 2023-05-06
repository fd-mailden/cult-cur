import React from "react";
import { Grid } from "../../UI/Grid/Grid";
import { Skeleton } from "../../UI/Skeleton/Skeleton";
function SkeletonGrid() {
  return (
    <Grid>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Grid>
  );
}

export { SkeletonGrid };

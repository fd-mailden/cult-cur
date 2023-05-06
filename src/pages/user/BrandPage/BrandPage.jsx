import React, { useEffect, useState } from "react";
import FilterComponent from "../../../components/Main/CarFilter/FilterComponent/FilterComponent";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import style from "./BrandPage.module.scss";
import { getFields } from "../../../api/carRequests";
import { useNavigate } from "react-router-dom";
import { Grid } from "../../../components/UI/Grid/Grid";
import { CarCard } from "../../../components/Main/CarCard/CarCard";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import {useSelector ,useDispatch} from 'react-redux';
import {selectCatalog, selectLoading} from '../../../store/cars/carSelectors'
import {setCarCatalog, onLoader} from '../../../store/cars/carsReducer'
import {SkeletonGrid} from '../../../components/Helpers/SkeletonGrid/SkeletonGrid'
function BrandPage() {
  const catalog = useSelector(selectCatalog)
  const selectLoader= useSelector(selectLoading)
  const dispatch = useDispatch()
  useEffect(() => {
    let pathname = window.location.pathname;
    let withoutCatalog = pathname.split("/catalog/").join("");
    getFields("car-list",'brand', withoutCatalog).then(async (res) => {
      await dispatch(onLoader(true))
      await dispatch(setCarCatalog(res))
      await dispatch(onLoader(false))

    });
  }, []);

  return (
    <MainWrapper mode="white">
      <section className={style.brand}>
        <div className={style.breadcrumbs}><Breadcrumbs/></div>
        <Grid>
          {selectLoader ? (
            <SkeletonGrid/>
          ) : (
            catalog.map((car, index) => (
              <CarCard
                key={index}
                car={car}
                mode="col-sm-6 col-lg-4 col-xl-4"
              />
            ))
          )}
        </Grid>
      </section>
    </MainWrapper>
  );
}

export { BrandPage };

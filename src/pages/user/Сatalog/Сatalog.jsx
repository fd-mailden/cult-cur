import React from "react";
import FilterComponent from "../../../components/Main/CarFilter/FilterComponent/FilterComponent";
import style from "./Сatalog.module.scss";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { CatalogContactForm } from "../../../components/Сatalog/CatalogContactForm/CatalogContactForm";
import { About } from "../../../components/Main/About/About/About";
import { CarsSection } from "../../../components/Сatalog/CarsSection/CarsSection";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
function Сatalog() {
  return (
    <MainWrapper>
      <div className={style["catalog-filter"]}>
        <FilterComponent />
      </div>
      <section className={style.catalog} id="catalog">
        <div className={style.catalog__inner}>
          <Breadcrumbs />
          <CarsSection />
        </div>
      </section>
      <CatalogContactForm />
      <section className={style.catalog}>
        <About />
        <div className={style.catalog__inner}></div>
      </section>
    </MainWrapper>
  );
}

export { Сatalog };

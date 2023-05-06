import React, { useState } from "react";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import style from "./CarInsurance.module.scss";
import bgLeft from "../../../assets/images/background/car-insurance-left.png";
import bgRight from "../../../assets/images/background/car-insurance-right.png";
import { CarInsuranceSelfInfo } from "../../../components/CarInsurance/CarInsuranceSelfInfo/CarInsuranceSelfInfo";
import { CarInsuranceDrivers } from "../../../components/CarInsurance/CarInsuranceDrivers/CarInsuranceDrivers";
import { InsuranceSponsors } from "../../../components/CarInsurance/InsuranceSponsors/InsuranceSponsors";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import { Loading } from "../../../components/UI/Loader/Loading";
import { useCarInsurance } from "./useCarInsurance";

function CarInsurance() {
  const{
    models: { errors, error, loading, register, isInvalid, selectData },
    commands: { handleSubmit, onSubmit , setSelectData},
  } = useCarInsurance();

  return (
    <MainWrapper>
      <img
        src={bgLeft}
        alt="background-left"
        className={style["background-left"]}
      />
      <img
        src={bgRight}
        alt="background-right"
        className={style["background-right"]}
      />
      <section className={style["car-insurance__inner"]}>
        <Breadcrumbs mode="breadcrumbs--white" />
        {loading ? (
          <Loading height="20" />
        ) : (
          <form
            className={style["car-insurance__forms"]}
            onSubmit={handleSubmit(onSubmit)}
          >
            <CarInsuranceSelfInfo setData={setSelectData} data={selectData} />
            <CarInsuranceDrivers
              setData={setSelectData}
              data={selectData}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
            />
          </form>
        )}
        {isInvalid && (
          <p className={style["error-text"]}>
            <span>***</span> Не все поля заполнены или заполнены некорректно{" "}
            <span>***</span>
          </p>
        )}
      </section>
      <InsuranceSponsors />
    </MainWrapper>
  );
}

export { CarInsurance };

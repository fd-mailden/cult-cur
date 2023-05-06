import React from "react";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { ComparisonBoard } from "../../../components/Comparison/ComparisonBoard/ComparisonBoard";
import { FormContactUs } from "../../../components/Main/FormContactUs/FormContactUs";
import { Title } from "../../../components/UI/Title/Title";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import style from "./Comparison.module.scss";

function Comparison() {
  return (
    <MainWrapper mode="white">
      <div className={style.comparison}>
        <Breadcrumbs />
        <Title mode="title--black">Сравнение</Title>
      </div>
      <ComparisonBoard />
      <FormContactUs />
    </MainWrapper>
  );
}

export { Comparison };

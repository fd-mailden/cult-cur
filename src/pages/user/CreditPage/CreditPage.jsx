import React, { useState } from "react";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import BestOffer from "../../../components/Credit/BestOffer/BestOffer";
import { CreditContactForm } from "../../../components/Credit/CreditContactForm/CreditContactForm";
import { StatementsFilter } from "../../../components/Main/Statements/StatementsFilter/StatementsFilter";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import style from "./CreditPage.module.scss";
function CreditPage() {
  const [activeOffer, setActiveOffer] = useState({});

  return (
    <MainWrapper>
      <section className={style.credit}>
        <Breadcrumbs mode="breadcrumbs--white" />
        <h1 className={style.credit__title}>Рассчитать кредит</h1>
        <div className={style.credit__account}>
          <StatementsFilter loanOffers={activeOffer} />
          <BestOffer setActiveOffer={setActiveOffer} />
        </div>
      </section>
      <CreditContactForm />
    </MainWrapper>
  );
}

export { CreditPage };

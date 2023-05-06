import React from "react";
import style from "./CatalogContactForm.module.scss";
import bgRight from "../../../assets/images/background/form-bg-right.png";
import bgLeft from "../../../assets/images/background/form-bg-left.png";
import { FormContactCatalog } from "./FormContactCatalog";
import { SentenceLink } from "../../SentenceLink/SentenceLink";

function CatalogContactForm() {
  return (
    <section className={style["catalog-form"]}>
      <img src={bgRight} className={style["catalog-form__right"]} alt="" />
      <img src={bgLeft} className={style["catalog-form__left"]} alt="" />
      <h2 className={style["catalog-form__title"]}>
        Поиск авто занимает много времени?
      </h2>
      <p className={style["catalog-form__subtitle"]}>
        Оставьте заявку на подбор и мы сами найдем для вас несколько лучших
        вариантов автомобилей под ваши нужды!
      </p>
      <FormContactCatalog style={style} />
      <SentenceLink mode="contact" />
    </section>
  );
}

export { CatalogContactForm };

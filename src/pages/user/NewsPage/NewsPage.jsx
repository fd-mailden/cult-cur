import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { GridNews } from "../../../components/News/GridNews/GridNews";
import { Title } from "../../../components/UI/Title/Title";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import { FormContactUs } from "../../../components/Main/FormContactUs/FormContactUs";
import style from "./NewsPage.module.scss";
import { getCarsRequest } from "../../../api/carRequests";
import { setNewsAdvertising } from "../../../helpers/setAdvertising";
import { SkeletonGrid } from "../../../components/Helpers/SkeletonGrid/SkeletonGrid";
function NewsPage() {
  const [news, setNews] = useState([]);
  const [isLoader, onLoader] = useState(true);

  useEffect(() => {
    getCarsRequest("news")
      .then((res) => {
        setNews(
          setNewsAdvertising(res, {
            type: "advertising",
            component: "AdvertisingRedeem",
          })
        );
        onLoader(false);
      })
      .catch((err) => console.log("wwwww404wwwww"));
  }, []);

  return (
    <MainWrapper mode="white">
      <section className={style.news}>
        <Breadcrumbs />
        <Title mode="title--black">Новости</Title>
        {isLoader ? <SkeletonGrid /> : <GridNews news={news} />}
      </section>
      <FormContactUs />
    </MainWrapper>
  );
}

export { NewsPage };

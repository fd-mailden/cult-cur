import React from "react";
import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import style from "./SeparateNewsPages.module.scss";
import { Title } from "../../../components/UI/Title/Title";
import { LineList } from "../../../components/UI/LineList/LineList";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import { Loading } from "../../../components/UI/Loader/Loading";
import { getFields } from "../../../api/carRequests";
function SeparateNewsPages() {
  const [isLoading, setIsLoading] = useState(true);
  const [thisNews, setThisNews] = useState({});
  useEffect(() => {
    let pathname = window.location.pathname;
    let newRe = pathname.split("/");
    getFields("news", "id", newRe[2]).then((res) => {
      setThisNews(res[0])
      setIsLoading(false)
    }).catch(err=>console.log('error'))

  }, []);

  return (
    <MainWrapper mode="white">
      {isLoading ? (
        <Loading />
      ) : (
        <section className={style.news}>
          <Breadcrumbs />

          <div className={style["content-wrapper"]}>
            <Title mode="title--black">{thisNews.title}</Title>
            <div className={style.tags}>
              {thisNews.tags.map((tag, index) => (
                <p className={style.tag} key={index}>
                  {tag}
                </p>
              ))}
            </div>
            <p className={style.news__text}>{thisNews.text}</p>
            <img
              src={thisNews.image}
              alt="news image"
              className={style.news__image}
            />
            <h3 className={style.news__subtitle}>{thisNews.subTitle}</h3>
            <p className={style.news__text}>{thisNews.subTitleText}</p>
            <LineList
              listTitle={thisNews.list.listName}
              list={thisNews.list.listItem}
            />
          </div>
        </section>
      )}
    </MainWrapper>
  );
}

export { SeparateNewsPages };

import React from "react";
import style from "./NewsItem.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { NEWS_PAGE_ROUTES } from "../../../settings/routes";
import { LazyImage } from "../../UI/LazyImage/LazyImage";
function NewsItem({ news }) {
  return (
    <div
      className={classNames(
        style["news-wrapper"],
        "col-sm-6 col-lg-4 col-xl-4"
      )}
    >
      <div className={style.news}>
        <LazyImage  className={style.news__image} imageAlt="" imageSrc={news.image}/>
        <div className={style.tags}>
          {news.tags.map((tag, index) => (
            <p className={style.tag} key={index}>
              {tag}
            </p>
          ))}
        </div>
        <h4 className={style.news__title}>{news.title}</h4>
        <p className={style.news__text}>{news.text}</p>
        <Link
          to={NEWS_PAGE_ROUTES.SEPARATE_NEWS.generate(news.id)}
          className={style.news__link}
        >
          Читать статью
        </Link>
      </div>
    </div>
  );
}

export { NewsItem };

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import { LazyImage } from "../../UI/LazyImage/LazyImage";
import arrowRight from "../../../assets/images/slider-arrow.svg";
import { ReactComponent as Like } from "../../../assets/images/liked.svg";
import { ReactComponent as Chart } from "../../../assets/images/charts.svg";
import Slider from "react-slick";

import { useDispatch } from "react-redux";
import { onFavorites } from "../../../store/local/localReducer";
import classNames from "classnames";

import "./CardSlider.scss";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <img src={arrowRight} alt="arrow" className="cars-arrow" />
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <img src={arrowRight} alt="arrow" className="cars-arrow" />
    </button>
  );
}

function CardSlider({ item }) {
  const [favorite, onFavorite] = useState(false);
  const [comparison, onComparison] = useState(false);
  const dispatch = useDispatch();
  const handelFavorites = (item) => {
    dispatch(onFavorites(item));
    if (item.stateName === "favorites") {
      onFavorite(!favorite);
    } else {
      onComparison(!comparison);
    }
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className={"car-slider"}>
      <div className="slide-icons">
        <Chart
          className={classNames(
            "slide-icons__item",
            item.isActiveComp || comparison && "slide-icons__item--active"
          )}
          onClick={() =>
            handelFavorites({
              carData: { ...item, isActiveComp: true },
              stateName: "comparison",
            })
          }
        />
        <Like
          className={classNames(
            "slide-icons__item",
            item.isActiveFav || favorite && "slide-icons__item--active"
          )}
          onClick={() =>
            handelFavorites({
              carData: { ...item, isActiveFav: true },
              stateName: "favorites",
            })
          }
        />
      </div>
      <Slider {...settings}>
        {item.images.map((image, index) => (
          <img className={"img-slider"} alt="" src={image} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export { CardSlider };

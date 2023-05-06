import React from "react";
import "./SaleSlider.scss";
import PropTypes from "prop-types";
import Slider from "react-slick";
import classNames from "classnames";
import { ReactComponent as ArrowRight } from "../../../assets/images/slider-arrow.svg";
function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      <ArrowRight className="slick-next__svg" />
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <ArrowRight />
    </button>
  );
}

function SaleSlider({ children, toShow = 3, initialSlide = 1, toScroll = 1 }) {
  var settings = {
    className: "slider" ,
    dots: false,
    speed: 500,
    slidesToShow: toShow,
    slidesToScroll: toScroll,
    initialSlide: initialSlide,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return <Slider {...settings}>{children}</Slider>;
}
SaleSlider.propTypes = {
  toShow: PropTypes.number,
  initialSlide: PropTypes.number,
  toScroll: PropTypes.number,
};
export { SaleSlider };

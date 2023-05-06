import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car from "../../../assets/images/big-car.png";
import style from "./CarSlider.module.scss";
import { ReactComponent as ArrowRight } from "../../../assets/images/slider-arrow.svg";

export class CarSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  next() {
    this.slider2.slickNext();
  }
  previous() {
    this.slider2.slickPrev();
  }

  render() {
    return (
      <div className={style["slider-wrapper"]}>
        <Slider
          arrows={false}
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          {this.props.sliderItems.map((image, index) => (
            <img
              src={image}
              key={index}
              alt=""
              className={style["active-slide"]}
            />
          ))}
        </Slider>
        <Slider
          arrows={false}
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          className = {style['bottom-slider']}
        >
          {this.props.sliderItems.map((image, index) => (
            <img src={image} key={index} alt="" className={style.slide} />
          ))}
        </Slider>
        <button className={style["button-prev"]} onClick={this.previous}>
          <ArrowRight />
        </button>
        <button className={style["button-next"]} onClick={this.next}>
          <ArrowRight />
        </button>
      </div>
    );
  }
}

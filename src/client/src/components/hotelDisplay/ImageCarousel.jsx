import React from "react";
import { connect } from "react-redux";
import HotelDisplay from "../../pages/HotelDisplay";
import style from "./HotelDetails.module.css";
import data from "../../data.json";
// import Slider from 'react-animated-slider';
import Slider from "react-slick";

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const { hotelDetails } = this.props;
    const { openModal, currentSlide, showSlides } = this;
    console.log("data", data);
    console.log("image carousel", hotelDetails);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };

    return (
      <div>
        {hotelDetails && hotelDetails.hotel_images && (
          <div className={style.container}>
            <div class={style.row}>
              <div class={style.column}>
                <img
                  src={hotelDetails.hotel_images["entrance"][1]["image"]}
                  onclick={`${openModal} ${currentSlide}`}
                  class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                />
              </div>

              <div class={style.column}>
                <img
                  src={hotelDetails.hotel_images["entrance"][1]["image"]}
                  onclick="openModal();currentSlide(2)"
                  class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                />
              </div>

              <div class={style.column}>
                <img
                  src={hotelDetails.hotel_images["entrance"][1]["image"]}
                  onclick="openModal();currentSlide(3)"
                  class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                />
              </div>
              <div class={style.column}>
                <img
                  src={hotelDetails.hotel_images["entrance"][1]["image"]}
                  onclick="openModal();currentSlide(4)"
                  class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                />
              </div>
              <div class={style.column}>
                <img
                  src={hotelDetails.hotel_images["entrance"][1]["image"]}
                  onclick="openModal();currentSlide(2)"
                  class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                />
              </div>
              <div class={style.column}>
                <img
                  src={hotelDetails.hotel_images["entrance"][1]["image"]}
                  onclick="openModal();currentSlide(3)"
                  class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                />
              </div>
              <div class={style.column}>
                <img
                  src={hotelDetails.hotel_images["entrance"][1]["image"]}
                  onclick={`${openModal} ${currentSlide}`}
                  class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                />
              </div>
              <div class={style.column}>
                <img
                  src={hotelDetails.hotel_images["entrance"][1]["image"]}
                  onclick="openModal();currentSlide(2)"
                  class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                />
              </div>
              <div class={style.column}>
                <img
                  src={hotelDetails.hotel_images["entrance"][1]["image"]}
                  onclick="openModal();currentSlide(3)"
                  class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                />
              </div>
              <div class={style.column}>
                <img
                  src={hotelDetails.hotel_images["entrance"][1]["image"]}
                  onclick="openModal();currentSlide(4)"
                  class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                />
              </div>
              <div class={style.column}>
                <img
                  src={hotelDetails.hotel_images["entrance"][1]["image"]}
                  onclick="openModal();currentSlide(2)"
                  class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                />
              </div>
              <div class={style.column}>
                <img
                  src={hotelDetails.hotel_images["entrance"][1]["image"]}
                  onclick="openModal();currentSlide(3)"
                  class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                />
              </div>

              <a class={style.prev} onclick="plusSlides(-1)">
                &#10094;
              </a>
              <a class={style.next} onclick="plusSlides(1)">
                &#10095;
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelDetails: state.dataReducer.entityData,
});

export default connect(mapStateToProps, null)(ImageCarousel);

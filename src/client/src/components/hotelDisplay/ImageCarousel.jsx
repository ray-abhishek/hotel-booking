import React from "react";
import { connect } from "react-redux";
import HotelDisplay from "../../pages/HotelDisplay";
import style from "./HotelDetails.module.css";

// import data from '../../data.json';
// import Slider from 'react-animated-slider';
// import Slider from 'react-slick';


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
    // console.log("hotelDetails", hotelDetails)
    return (
      <div>
        <div className={style.container}>
          {hotelDetails.hotel_images &&
            hotelDetails.hotel_images["entrance"]?.map((item, i) => (
              <div class={style.row}>
                <div class={style.column}>
                  <img
                    src={item.image}
                    onclick={`${openModal} ${currentSlide}`}
                    class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                  />

                  <img
                    src={item.image}
                    onclick={`${openModal} ${currentSlide}`}
                    class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                  />

                  <img
                    src={item.image}
                    onclick={`${openModal} ${currentSlide}`}
                    class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                  />

                  <img
                    src={item.image}
                    onclick={`${openModal} ${currentSlide}`}
                    class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                  />

                  <img
                    src={item.image}
                    onclick={`${openModal} ${currentSlide}`}
                    class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}
                  />
                </div>

                
  <a class={style.prev} onclick="plusSlides(-1)">&#10094;</a>
  <a class={style.next} onclick="plusSlides(1)">&#10095;</a>
              </div>
            ))}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelDetails: state.dataReducer.entityData,
});

export default connect(mapStateToProps, null)(ImageCarousel);
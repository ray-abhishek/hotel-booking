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
    console.log("hotelDetails", typeof (hotelDetails.hotel_images &&
    hotelDetails.hotel_images["entrance"]))
    return (
      <div>
        <div className={`${style.container} `}>
        <div class="carousel" data-flickity='{ "wrapAround": "true", "autoPlay": true, "freeScroll": true }'>
        {hotelDetails && hotelDetails.hotel_images && (
          <>
           
            <div class="carousel-cell d-flex">
              {hotelDetails &&
                hotelDetails["hotel_images"] &&
                hotelDetails["hotel_images"]["entrance"] &&
                hotelDetails["hotel_images"]["entrance"].map((ele, i) => (
                  <div className="border-0 mr-2">
                    <img
                      src={
                        hotelDetails &&
                        hotelDetails["hotel_images"]["entrance"][i]["image"] 
                      }
                        className={style.cardImg}
                    />
                
                  </div>
                ))}
            </div>
 
          </>
        )}
  {/* // <a class={style.prev} onclick="plusSlides(-1)">&#10094;</a>
  // <a class={style.next} onclick="plusSlides(1)">&#10095;</a> */}
              
           </div>
        </div>
       
       </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelDetails: state.dataReducer.entityData,
});

export default connect(mapStateToProps, null)(ImageCarousel);
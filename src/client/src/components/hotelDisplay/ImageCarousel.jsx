import React from 'react'
import { connect } from 'react-redux'
import HotelDisplay from '../../pages/HotelDisplay';
import style from './HotelDetails.module.css';

class ImageCarousel extends React.Component{
        constructor(props){
            super(props)
            this.state={

            }
        }
        render(){
            const { hotelDetails } = this.props;
            console.log( "image carousel" ,hotelDetails)
            return(

                <div className="ml-5" >
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel" style={{ display: "flex", flexDirection: "row", left: -230, textAlign:"center"}}>
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="10000" style={{display:"block"}}>
            <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][0]["image"]} className="img-fluid d-block" alt="image1" style={{width:"auto", height: 400, position: 'center'}} />
            </div>
            <div class="carousel-item" data-interval="2000" style={{display:"block"}}>
            <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][1]["image"]} className="img-fluid d-block" alt="image2" style={{width:"auto", height:400}} />
            </div>
            <div class="carousel-item" data-interval="2000" style={{display:"block"}}>
            <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][1]["image"]} className="img-fluid d-block" alt="image2" style={{width:"auto", height:400}} />
            </div>
            <div class="carousel-item" data-interval="2000" style={{display:"block"}}>
            <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][1]["image"]} className="img-fluid d-block" alt="image2" style={{width:"auto", height:400}} />
            </div>
            <div class="carousel-item" data-interval="2000" style={{display:"block"}}>
            <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][1]["image"]} className="img-fluid d-block" alt="image2" style={{width:"auto", height:400}} />
            </div>
            <div class="carousel-item" data-interval="2000" style={{display:"block"}}>
            <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][1]["image"]} className="img-fluid d-block" alt="image2" style={{width:"auto", height:400}} />
            </div>
            <div class="carousel-item" data-interval="2000" style={{display:"block"}}>
            <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][1]["image"]} className="img-fluid d-block" alt="image2" style={{width:"auto", height:400}} />
            </div>
            <div class="carousel-item" data-interval="2000" style={{display:"block"}}>
            <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][1]["image"]} className="img-fluid d-block" alt="image2" style={{width:"auto", height:400}} />
            </div>
       
          </div>
          <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        </div>
            )
        }
}

const mapStateToProps=(state)=>({
    hotelDetails: state.dataReducer.data
})

export default connect(mapStateToProps, null) (ImageCarousel)
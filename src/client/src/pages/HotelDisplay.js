import React from 'react';

import ImageCarousel from '../components/hotelDisplay/ImageCarousel';
import { Route } from 'react-router-dom';
import Description from '../components/hotelDisplay/aboutHotel/Description';
import Features from '../components/hotelDisplay/aboutHotel/Features';
import SimilarHomes from '../components/hotelDisplay/SimilarHomes';
// import Axios from 'axios';

class HotelDisplay extends React.Component {
        constructor(props){
            super(props)
            this.state={

            }
        }

        render(){
            console.log("match params",this.props.match.params)
            return(
                <div>
                     Hotel Display 
                     {this.props.match.params.id}
                     <ImageCarousel />
                     <Features />
                     <Description />
                     <SimilarHomes paramsId = {this.props.match.params.id}/>
                </div>
            )
        }
}



export default HotelDisplay;


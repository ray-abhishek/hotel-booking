import React from "react";
import ImageCarousel from "../components/hotelDisplay/ImageCarousel";
import { Route } from "react-router-dom";
import Description from "../components/hotelDisplay/aboutHotel/Description";
import Features from "../components/hotelDisplay/aboutHotel/Features";
import SimilarHomes from "../components/hotelDisplay/SimilarHomes";
import FindOutMore from "../components/hotelDisplay/aboutHotel/FindOutMore";
import HomeTruths from "../components/hotelDisplay/aboutHotel/HomeTruths";
import Policies from "../components/hotelDisplay/aboutHotel/Policies";
import Rooms from "../components/hotelDisplay/aboutHotel/Rooms";
import { fetchEntityRequest } from "../redux/action";
import { connect } from "react-redux";
import FeaturesDetails from "../components/hotelDisplay/aboutHotel/FeaturesDetails";
<<<<<<< HEAD
=======
import BookingBox from '../components/hotelDisplay/BookingBox';
import StickyBox from 'react-sticky-box';
>>>>>>> c169085bee52e57986cb83a0c16c3a794b9c2f23

// import Axios from 'axios';

class HotelDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("this.componentDidMount worked");
    const { fetchEntityRequest, data, location } = this.props;
    let url = `${location.pathname}${location.search}`;
    fetchEntityRequest(url);
    console.log(url, "url hotel Display");
  }

  render() {
    // console.log("match params", this.props.match.params);
    console.log(this.props.data, "inside homeDisplay");
    return (
<<<<<<< HEAD
      <div className="col-md-8 offset-md-2 ">
        Hotel Display
        {this.props.match.params.id}
        <ImageCarousel />
        {/* <Payment {...this.props} /> */}
=======
      <>
      <div className="container">
        <div className="row">
          <div className="col-12"  style={{width: "100%", left: -200, right: 0}}>
          <ImageCarousel />
          </div>
        </div>
      </div>

      <div className="container">
      <div className="row d-flex">      
      
      <div className="col-8 ">
>>>>>>> c169085bee52e57986cb83a0c16c3a794b9c2f23
        <Features {...this.props} />
     
        <Description {...this.props} />
        <Rooms {...this.props} />
        <FeaturesDetails {...this.props} />
        <FindOutMore />
        <HomeTruths {...this.props} />
        <Policies {...this.props} />
    </div>
    <div className="col-4 mt-3">
      <StickyBox offsetTop={20} offsetBottom={20} >
    <BookingBox {...this.props} />
    </StickyBox> </div>
    </div>
    </div>
      <div className="container">
        <div className="row">
          <div className="col-12">

        <SimilarHomes paramsId={this.props.match.params.id} />
          </div>
        </div>
        </div>
    </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.dataReducer.entityData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEntityRequest: (query) => dispatch(fetchEntityRequest(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelDisplay);

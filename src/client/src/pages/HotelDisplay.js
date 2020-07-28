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
import Payment from '../components/hotelDisplay/Payment'
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
      <div className="col-md-8 offset-md-2 ">
        Hotel Display
        {this.props.match.params.id}
        <ImageCarousel />
        <Payment/>
        <Features {...this.props} />
        <Description {...this.props} />
        <Rooms {...this.props} />
        <FeaturesDetails {...this.props} />
        <FindOutMore />
        <HomeTruths {...this.props} />
        <Policies {...this.props} />
        <SimilarHomes paramsId={this.props.match.params.id} />
      </div>
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

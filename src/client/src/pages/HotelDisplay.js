import React from "react";

import ImageCarousel from "../components/hotelDisplay/ImageCarousel";
import { Route } from "react-router-dom";
import Description from "../components/hotelDisplay/aboutHotel/Description";
import Features from "../components/hotelDisplay/aboutHotel/Features";
import SimilarHomes from "../components/hotelDisplay/SimilarHomes";
import FindOutMore from "../components/hotelDisplay/aboutHotel/FindOutMore";
import HomeTruths from "../components/hotelDisplay/aboutHotel/HomeTruths";
import Policies from "../components/hotelDisplay/aboutHotel/Policies";
import { fetchRequest } from "../redux/action";
import { connect } from "react-redux";
// import Axios from 'axios';

class HotelDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("this.componentDidMount worked");
    const { fetchRequest, data, location } = this.props;
    let url = `${location.pathname}${location.search}`;
    fetchRequest(url);
    console.log(url, "url hotel Display");
  }

  render() {
    // console.log("match params", this.props.match.params);
    console.log(this.props.data, "inside homeDisplay");
    return (
      <div>
        Hotel Display
        {this.props.match.params.id}
        <ImageCarousel />
        <Features {...this.props} />
        <Description {...this.props} />
        {/* <Rooms {...this.props} /> */}
        <FindOutMore />
        <HomeTruths {...this.props} />
        <Policies {...this.props} />
        <SimilarHomes paramsId={this.props.match.params.id} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.dataReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRequest: (query) => dispatch(fetchRequest(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelDisplay);

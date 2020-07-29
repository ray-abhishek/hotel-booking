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
import BookingBox from "../components/hotelDisplay/BookingBox";
import StickyBox from "react-sticky-box";
import style from "./HotelDisplay.module.css";
// import Axios from 'axios';

class HotelDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    ////console.log("this.componentDidMount worked");
    const { fetchEntityRequest, data, location } = this.props;
    let url = `${location.pathname}${location.search}`;
    fetchEntityRequest(url);
    ////console.log(url, "url hotel Display");
  }

  render() {
    // ////console.log("match params", this.props.match.params);
    // ////console.log(this.props.data, "inside homeDisplay");
    return (
      <>
        <div className="">
          <ImageCarousel />
        </div>
        <div className="container mt-5" style={{ maxWidth: "850px" }}>
          <div className={`${style.hdContainer}`}>
            <div className={`${style.bioBox}`}>
              <Features {...this.props} />
              <Description {...this.props} />
              <Rooms {...this.props} />
              <FeaturesDetails {...this.props} />
              <FindOutMore />
              <HomeTruths {...this.props} />
              <Policies {...this.props} />
            </div>
            <div className="ml-4">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <BookingBox {...this.props} />
              </StickyBox>
            </div>
          </div>
          <SimilarHomes paramsId={this.props.match.params.id} />
        </div>

        <SimilarHomes paramsId={this.props.match.params.id}/>
    
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

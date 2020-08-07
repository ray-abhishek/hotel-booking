import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import { connect } from "react-redux";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
var data;
class Location extends Component {
  static defaultProps = {
    center: [51.509865, -0.118092],
    zoom: 5,
  };

  render() {
    const { hotelData } = this.props;
    data = this.props.hotelData;

    let lat1 =
      hotelData && hotelData["location_info"] && hotelData["location_info"][0];
    let lng1 =
      hotelData && hotelData["location_info"] && hotelData["location_info"][1];
    // let lat1 = hotelData["location_info"][0];
    // let lng1 = hotelData["location_info"][1];
    return (
      // Important! Always set the container height explicitly
      <div
        className="card border-0 mt-4"
        style={{
          fontFamily: "tiemposText",
          fontSize: "14px",
        }}
      >
        <h5 className="card-heading font-weight-bold h5">Location</h5>
        <hr />
        <div className="mb-5 mt-2">
          {" "}
          {!hotelData ||
            (!hotelData["location_info"] && <div>Data Loading........</div>)}
          {hotelData && Object.keys(hotelData).length == 0 && (
            <data>Data not found</data>
          )}
          {hotelData && hotelData["location_info"] && (
            <div style={{ height: "50vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.REACT_APP_API_KEY,
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <AnyReactComponent
                  lat={lat1}
                  lng={lng1}
                  text={
                    <i
                      style={{ color: "red", fontSize: "30px" }}
                      class="fa fa-map-marker"
                      aria-hidden="true"
                    >
                      <small style={{ fontSize: "15px" }}>
                        {hotelData["name"]}
                      </small>
                    </i>
                  }
                />
              </GoogleMapReact>
            </div>
          )}
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  hotelData: state.dataReducer.entityData,
  catalogData: state.dataReducer.catalogData,
});

export default connect(mapStateToProps, null)(Location);

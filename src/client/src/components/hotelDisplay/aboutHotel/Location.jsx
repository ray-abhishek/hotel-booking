import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import { connect } from "react-redux";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Location extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 0,
  };

  render() {
    const { hotelData } = this.props;
    console.log(hotelData, "hotel Data from props in Location");

    let lat1 = hotelData["location_info"] && hotelData["location_info"][0];
    let lng1 = hotelData["location_info"] && hotelData["location_info"][1];
    // let lat1 = hotelData["location_info"][0];
    // let lng1 = hotelData["location_info"][1];
    return (
      // Important! Always set the container height explicitly
      <div>
        <h2>Location</h2>
        {hotelData["location_info"] && (
          <div style={{ height: "50vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyCcS0j7hDpSs-F4xDi2q6AkTD_sWqECR9M",
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

        {!hotelData["location_info"] && <div>Data Loading........</div>}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  hotelData: state.dataReducer.entityData,
  catalogData: state.dataReducer.catalogData,
});

export default connect(mapStateToProps, null)(Location);

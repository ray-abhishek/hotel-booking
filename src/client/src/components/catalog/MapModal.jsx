import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import { connect } from "react-redux";
var hotelData1;
// import * as parkData from "./data/skateboard-parks.json";
// import mapStyles from "./mapStyles";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  render() {
    hotelData1 = this.props.catalogData;
    const { hotelData, catalogData } = this.props;
    // console.log(catalogData, "hotelData from props");
    // console.log(hotelData1, "hotalData1");
    return (
      <div
        class="modal fade bd-example-modal-xl"
        tabindex="-1"
        id="map"
        role="dialog"
        aria-labelledby="myExtraLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div style={{ width: "100%", height: "90vh" }}>
              <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCcS0j7hDpSs-F4xDi2q6AkTD_sWqECR9M`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </div>
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

function Map(props) {
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{
        lat: 50,
        lng: 90,
      }}
    >
      {hotelData1?.map((hotel, i) => (
        <Marker
          key={i}
          position={{
            lat: hotel["location_info"][0],
            lng: hotel["location_info"][1],
          }}
          onClick={() => {
            setSelectedPark(hotel);
          }}
        />
      ))}
      {selectedPark && (
        <InfoWindow
          position={{
            lat: selectedPark["location_info"][0],
            lng: selectedPark["location_info"][1],
          }}
          onCloseClick={() => {
            setSelectedPark(null);
          }}
        >
          <div>
            <h5>{selectedPark["name"]}</h5>
            <h5>{selectedPark["location"]}</h5>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

import React from "react";
import { connect } from "react-redux";

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { hotelDetails } = this.props;
    console.log(hotelDetails, "Rooms");
    return (
      <div class="card mx-5 my-3">
        <div>
          <h2
            font-family="tiemposText"
            font-weight="400"
            font-size="L"
            color="secondary"
          >
            Rooms
          </h2>
        </div>
        {hotelDetails && (
          <>
            <div>
              <h3 font-size="S" font-weight="bold" color="secondary">
                {hotelDetails && hotelDetails.hotel_images["entrance"]}
              </h3>
              <h6
                font-size="S"
                color="secondaryText"
                font-family="akkuratRegular"
                font-style="italic"
              >
                Entrance level
              </h6>
            </div>
            <div class="row">
              {hotelDetails &&
                hotelDetails["hotel_images"]["entrance"].map((ele) => (
                  <div className="card">
                    <img
                      src={hotelDetails["hotel_images"]["entrance"]["image"]}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        {hotelDetails["hotel_images"]["entrance"]["type"]}
                      </p>
                    </div>
                  </div>
                ))}
              <h6
                font-size="S"
                color="secondaryText"
                font-family="akkuratRegular"
                font-style="italic"
              >
                Outside
              </h6>
            </div>
            <div class="row">
              {hotelDetails["hotel_images"]["entrance"].map((ele) => (
                <div className="card">
                  <img
                    src={hotelDetails["hotel_images"]["entrance"]["image"]}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      {hotelDetails["hotel_images"]["entrance"]["type"]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelDetails: state.dataReducer.data,
});

export default connect(mapStateToProps, null)(Rooms);

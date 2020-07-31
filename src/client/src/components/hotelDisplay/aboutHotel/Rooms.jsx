import React from "react";
import { connect } from "react-redux";

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { hotelDetails } = this.props;
    // console.log(hotelDetails, "Rooms");
    return (
      <div
        class="card border-0 my-3"
        style={{
          fontFamily: "tiemposText",
          fontSize: "14px",
        }}
      >
        <div>
          <h5
            font-family="tiemposText"
            font-weight="400"
            font-size="L"
            color="secondary"
          >
            Rooms
          </h5>
        </div>
        <hr />
        {hotelDetails && hotelDetails.hotel_images && (
          <>
            <div>
              <h6
                font-size="S"
                color="secondaryText"
                font-family="akkuratRegular"
                font-style="italic"
              >
                Entrance level
              </h6>
            </div>
            <div class="d-flex">
              {hotelDetails &&
                hotelDetails["hotel_images"] &&
                hotelDetails["hotel_images"]["entrance"] &&
                hotelDetails["hotel_images"]["entrance"].map((ele, i) => (
                  <div className="border-0 mr-3">
                    <img
                      src={
                        hotelDetails &&
                        hotelDetails["hotel_images"]["entrance"][i]["image"]
                      }
                      className="card-img-top"
                      alt="..."
                      style={{ height: "110px", width: "150px" }}
                    />
                    <div className="">
                      <p className="text-center">
                        {hotelDetails &&
                          hotelDetails["hotel_images"]["entrance"][i]["type"]}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <div>
              <h6
                font-size="S"
                color="secondaryText"
                font-family="akkuratRegular"
                font-style="italic"
                className=" mt-3"
              >
                Outside
              </h6>
            </div>
            <div className="d-flex">
              {hotelDetails &&
                hotelDetails["hotel_images"] &&
                // hotelDetails["hotel_images"]["entrance"] &&
                hotelDetails["hotel_images"]["outside"].map((ele, i) => (
                  <div className="border-0 mr-3">
                    <img
                      src={hotelDetails["hotel_images"]["outside"][i]["image"]}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "110px", width: "150px" }}
                    />
                    <div className="">
                      <p className="text-center">
                        {hotelDetails["hotel_images"]["outside"][i]["type"]}
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
  hotelDetails: state.dataReducer.entityData,
});

export default connect(mapStateToProps, null)(Rooms);

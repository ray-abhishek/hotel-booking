import React, { Component } from "react";
import queryString from "query-string";
import { connect } from "react-redux";
import {
  fetchCatalogListSuccess,
  fetchCatalogRequest,
} from "../../redux/action";
// import Payment from "../bookingPage";

//import style from "./Sort.module.css";

class ConfirmationMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastName: "",
      email: "",
      countryCode: "",
      mobileNo: "",
      message: "",
      notification: false,
      data: this.props.location.state || {},
    };
  }

  render() {
    const { info, data } = this.state.data;
    const { hotelData } = this.props;
    const { amount_paid, order_id } = data.data;
    console.log("confirmation details", amount_paid, order_id);
    const font = {
      fontFamily: "tiemposText",
      fontSize: ".9em",
    };
    return (
      hotelData &&
      info &&
      data && (
        <div className="row offset-0 offset-md-1" state={font}>
          <div
            className="col-12 col-md-6 order-md-1 order-2 text-center ml-md-5"
            style={{ margin: "Auto 30px" }}
          >
            {/* <h3 className="mb-2 mt-5">Thank you for booking with us.</h3> */}
            <h3 className="my-2">We’ve received your booking request</h3>
            <p className="my-4">
              <span className="font-weight-bold">Thank for your request. </span>
              <span>So, what happens next?</span>
            </p>
            <p className="mb-5">
              One of our Travel Advisors will be in touch very soon - if you
              want to speak to us right now,call us on +1 855-553-4954
            </p>
            <div class="card col border-0 d-block d-md-none mt-5">
              <div className="bg-dark text-light text-center ">
                <p class="py-3">
                  <img
                    style={{ verticalAlign: "middle", width: "18px" }}
                    type="envelop_white"
                    src="https://d344sq77q05r9.cloudfront.net/prod-20-07-27-13:03/assets/4626e10de839567e2dcd31fe962ebf69.svg"
                    alt="envelop_white"
                  />
                  {`  Send us an email `}
                  <br />
                  <img
                    style={{ verticalAlign: "middle" }}
                    type="phone_white"
                    src="https://d344sq77q05r9.cloudfront.net/prod-20-07-27-13:03/assets/a208188ddf764d570bdc73f484ee1ca4.svg"
                    alt="phone_white"
                  />
                  {`  +1 855-553-4954`}
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-12 border-0 card col-md-4 order-1 order-md-2 my-5"
            style={{ maxHeight: "550px" }}
          >
            <img
              src={
                hotelData &&
                hotelData["hotel_images"] &&
                hotelData["hotel_images"]["entrance"]["0"]["image"] &&
                `${hotelData["hotel_images"]["entrance"]["0"]["image"]}`
              }
              class="card-img-top d-none d-md-block"
              style={{ height: "170px" }}
              alt="..."
            />

            <div className="row">
              <div class="card col-6 col-md-12 border-0">
                <div class="card-body bg-dark text-light">
                  <h5>{hotelData && hotelData["name"] && hotelData["name"]}</h5>
                  <h6>
                    {hotelData &&
                      hotelData["location"] &&
                      hotelData["location"]}
                  </h6>
                  <h6>
                    <span style={{ padding: "0,10px" }}>
                      {hotelData &&
                        hotelData["people"] &&
                        ` ${hotelData["people"]}`}{" "}
                      Sleeps |
                    </span>
                    <span style={{ padding: "0,10px" }}>
                      {hotelData &&
                        hotelData["bedrooms"] &&
                        ` ${hotelData["bedrooms"]}`}{" "}
                      bedrooms |
                    </span>
                    <span style={{ padding: "0,10px" }}>
                      {hotelData &&
                        hotelData["bathrooms"] &&
                        ` ${hotelData["bathrooms"]}`}{" "}
                      bathrooms
                    </span>
                  </h6>
                  <p>
                    {info && info.arrival && `${info.arrival}  ->  `}
                    {info && info.departure && `${info.departure}`}
                  </p>
                </div>
              </div>
              <div class="card col-6 col-md-12 border-0  ">
                <div
                  className=" text-light text-center pb-5 p-md-0"
                  style={{ background: "#696969" }}
                >
                  <p class=" py-5 py-md-0 pt-md-3">
                    {data && order_id && (
                      <>
                        {" "}
                        <h6>Order id : {data && order_id && `${order_id}`}</h6>
                        <h6>
                          Estimated total{" "}
                          {info &&
                            info.amount &&
                            `--->       ${info.amount / 100}`}
                        </h6>
                      </>
                    )}
                  </p>
                </div>
              </div>
              <div class="card col-6 col-md-12 border-0 d-none d-md-block">
                <div className="bg-dark text-light text-center pb-5">
                  <p class=" p-md-3">
                    <img
                      style={{ verticalAlign: "middle", width: "18px" }}
                      type="envelop_white"
                      src="https://d344sq77q05r9.cloudfront.net/prod-20-07-27-13:03/assets/4626e10de839567e2dcd31fe962ebf69.svg"
                      alt="envelop_white"
                    />
                    {`  Send us an email `}
                    <br />
                    <img
                      style={{ verticalAlign: "middle" }}
                      type="phone_white"
                      src="https://d344sq77q05r9.cloudfront.net/prod-20-07-27-13:03/assets/a208188ddf764d570bdc73f484ee1ca4.svg"
                      alt="phone_white"
                    />
                    {`  +1 855-553-4954`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  hotelData: state.dataReducer.entityData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogRequest: (payload) => dispatch(fetchCatalogRequest(payload)),
  fetchCatalogListSuccess: (payload) =>
    dispatch(fetchCatalogListSuccess(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationMessage);

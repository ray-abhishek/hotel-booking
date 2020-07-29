import React, { Component } from "react";
import queryString from "query-string";
import { connect } from "react-redux";
import {
  fetchCatalogListSuccess,
  fetchCatalogRequest,
} from "../../redux/action";
import Payment from "./Payment";

//import style from "./Sort.module.css";

class BookingForm extends Component {
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
    };
  }

  handleOnChange = (e) => {
    const { id, name, value } = e.target;

    if (id == "notification") {
      this.setState({
        notification: !this.state.notification,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //  console.log("submit", e);
  };

  render() {
    const { hotelData, details, differenceDate } = this.props.location.state;
    console.log(hotelData, details, "form details");
    console.log(details["arrivalDate"], "arrivaldate");
    let arrival =
      details &&
      details["arrivalDate"] &&
      `${details["arrivalDate"].toUTCString().slice(0, 17)}`;
    let departure =
      details &&
      details["departureDate"] &&
      `${details["departureDate"].toUTCString().slice(0, 17)}`;
    return (
      <div className="row">
        <div className="col-12 col-md-7 order-2 order-md-1">
          <h3 className="my-5">Request a booking</h3>
          <p className="my-4">
            We’re available round-the-clock to help you plan your stay.
            <br />
            Call our Travel Advisors on +1 855-553-4954
          </p>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div class="form-group">
              <label for="firstName">First name*</label>
              <input
                onChange={(e) => this.handleOnChange(e)}
                value={this.firstname}
                type="text"
                class="form-control"
                id="firstName"
                name="firstname"
              />
            </div>
            <div class="form-group">
              <label for="lastName">Last name*</label>
              <input
                onChange={(e) => this.handleOnChange(e)}
                value={this.lastName}
                type="text"
                class="form-control"
                id="lastName"
                name="lastName"
              />
            </div>

            <div class="form-group">
              <label for="email">Email address*</label>
              <input
                onChange={(e) => this.handleOnChange(e)}
                value={this.email}
                type="email"
                class="form-control"
                id="email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label class="my-1 mr-2" for="mobileNo">
                Phone number
              </label>

              <div class="form-row">
                <div class="col-4">
                  <select
                    onChange={(e) => this.handleOnChange(e)}
                    value={this.countryCode}
                    class="custom-select  mr-sm-2"
                    id="countryCode"
                    name="countryCode"
                  >
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-8">
                  <input
                    onChange={(e) => this.handleOnChange(e)}
                    value={this.mobileNo}
                    type="text"
                    class="form-control"
                    id="mobileNo"
                    name="mobileNo"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="message">message</label>
              <textarea
                onChange={(e) => this.handleOnChange(e)}
                checked={this.notification}
                class="form-control"
                id="message"
                name="message"
                rows="3"
              ></textarea>
            </div>

            <div class="form-group form-check bg-dark text-light px-5 py-1">
              <input
                onChange={(e) => this.handleOnChange(e)}
                checked={this.notification}
                type="checkbox"
                class="form-check-input"
                id="notification"
                name="notification"
              />
              <label class="form-check-label " for="exampleCheck1">
                <small>
                  Send me emails with travel inspiration and news about
                  onefinestay.
                </small>
              </label>
            </div>
            <div className="text-center ">
              <Payment
                {...this.props}
                personDetails={{
                  ...this.state,
                  arrival: arrival,
                  departure: departure,
                  differenceDate: differenceDate,
                }}
              />
            </div>
          </form>
        </div>
        <div
          className="col-12 border-0 card col-md-5 order-1 order-md-2 my-5"
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
                  {hotelData && hotelData["location"] && hotelData["location"]}
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
                  {arrival && `${arrival}  ->  `}
                  {departure && `${departure}`}
                </p>
              </div>
            </div>
            <div class="card col-6 col-md-12 border-0 ">
              <div className="bg-dark text-light text-center pb-5">
                <p class=" p-md-3 py-5">
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
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogRequest: (payload) => dispatch(fetchCatalogRequest(payload)),
  fetchCatalogListSuccess: (payload) =>
    dispatch(fetchCatalogListSuccess(payload)),
});
export default connect(null, mapDispatchToProps)(BookingForm);

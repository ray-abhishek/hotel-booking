import React from "react";
import Stick from "react-slick";
import DatePicker from "react-datepicker";
import { StickyContainer, Sticky } from "react-sticky";
import style from "./HotelDetails.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addDays } from "date-fns";
import axios from "axios";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import dates from "./dates.json";

const ExampleCustomArrival = ({ value, onClick }) => (
  <button style={labelStyle} onClick={onClick}>
    {value ? value : "Arrival Date"}
  </button>
);

const ExampleCustomDeparture = ({ value, onClick }) => (
  <button style={labelStyle} onClick={onClick}>
    {value ? value : "Departure"}
  </button>
);

class BookingBox extends React.Component {
  constructor(props) {
    super(props);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    this.state = {
      arrivalDate: null,
      departureDate: null,
      bookedDates: "",
      isLoading: false,
    };
  }

  handleArrivalDateChange = (date) => {
    this.setState({
      arrivalDate: date,
    });
    this.handledepartureDateChange();
  };
  handledepartureDateChange = (date) => {
    this.setState({
      departureDate: date,
    });
  };

  async componentDidMount() {
    console.log("id", this.props.match.params.id);
    const res = await axios.get(
      "https://86214663421f.ngrok.io/booked-dates/" + this.props.match.params.id
    );

    this.setState({
      bookedDates: res.data,
      isLoading: true,
    });
    console.log("booked dates", res.data);
  }

  handleBooking = () => {
    ////console.log("hotelData", hotelData);
    const { arrivalDate, departureDate } = this.state;
    // differencce of date
    let differenceDate = Math.floor(
      (Date.UTC(
        departureDate && departureDate.getFullYear(),
        departureDate && departureDate.getMonth(),
        departureDate && departureDate.getDate()
      ) -
        Date.UTC(
          arrivalDate && arrivalDate.getFullYear(),
          arrivalDate && arrivalDate.getMonth(),
          arrivalDate && arrivalDate.getDate()
        )) /
        (1000 * 60 * 60 * 24)
    );
    this.props.history.push({
      pathname:
        "/home-listing/" + this.props.match.params.id + "/request-booking",
      state: {
        details: this.state,
        hotelData: this.props.hotelData,
        differenceDate: differenceDate,
      },
    });
  };

  render() {
    const { arrivalDate, departureDate, bookedDates, isLoading } = this.state;
    const {
      setStartDate,
      getFullYear,
      getMonth,
      getDate,
      handleBooking,
    } = this;
    const { hotelData } = this.props;
    // console.log("hotelData", hotelData)
    let arrival = `${arrivalDate && arrivalDate.getFullYear()}-${
      arrivalDate && arrivalDate.getMonth() + 1
    }-${arrivalDate && arrivalDate.getDate()}`;

    let departure = `${departureDate && departureDate.getFullYear()}-${
      departureDate && departureDate.getMonth() + 1
    }-${departureDate && departureDate.getDate()}
          `;

    // differencce of date
    let differenceDate = Math.floor(
      (Date.UTC(
        departureDate && departureDate.getFullYear(),
        departureDate && departureDate.getMonth(),
        departureDate && departureDate.getDate()
      ) -
        Date.UTC(
          arrivalDate && arrivalDate.getFullYear(),
          arrivalDate && arrivalDate.getMonth(),
          arrivalDate && arrivalDate.getDate()
        )) /
        (1000 * 60 * 60 * 24)
    );

    //  <Button bsStyle={condition ? 'success' : undefined} />

    // console.log( "arrival" ,arrival)
    console.log("booking Dates", bookedDates);
    if (!isLoading) {
      console.log("isLoading", isLoading);
      return <div>Loading...</div>;
    }

    return (
      <div className="clearfix p-2" style={{ fontSize: "15px" }}>
        <div className="card py-4 px-5" style={cardStyle}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="form-row row mb-5 mt-3">
              <div className="form-group " style={formStyle}>
                <div style={titleStyle}> Arrival Date</div>
                <div className="border border-medium mt-1 rounded d-flex pr-2 ">
                  <DatePicker
                    style
                    className="datepicker"
                    selected={this.state.arrivalDate}
                    onChange={(date) => this.handleArrivalDateChange(date)}
                    selectsStart
                    startDate={new Date()}
                    endDate={new Date()}
                    minDate={new Date()}
                    excludeDates={
                      bookedDates &&
                      bookedDates.data["ahead"].map(
                        (item) => (new Date(), addDays(new Date(), item))
                      )
                    }
                    placeholderText="Arrival date"
                    customInput={<ExampleCustomArrival />}
                  ></DatePicker>
                  <img
                    type="calendar"
                    height="18px"
                    width="18px"
                    src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/69db739b45ad31493bdf934e1715f135.svg"
                    alt="calendar"
                    class="sc-1ny7b47-0 jhFEmf mt-2"
                  />
                </div>
              </div>
            </div>
            <div className="form-row row mb-5">
              <div className="form-group" style={formStyle}>
                <div style={titleStyle}>Departure Date </div>

                <div className="border border-medium d-flex justify-content-between pr-2 mt-1">
                  <DatePicker
                    className="datepicker"
                    selected={this.state.departureDate}
                    onChange={(date) => this.handledepartureDateChange(date)}
                    selectsEnd
                    startDate={new Date()}
                    endDate={new Date()}
                    minDate={this.state.arrivalDate}
                    excludeDates={
                      bookedDates &&
                      bookedDates.data["ahead"]?.map((item) =>
                        addDays(new Date(), item)
                      )
                    }
                    placeholderText="Departure date "
                    customInput={<ExampleCustomDeparture />}
                  />
                  <img
                    type="calendar"
                    height="18px"
                    width="18px"
                    src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/69db739b45ad31493bdf934e1715f135.svg"
                    alt="calendar"
                    class="sc-1ny7b47-0 jhFEmf mt-2"
                  />
                </div>
              </div>
            </div>
          </form>
          {
            departureDate ? (
              <div style={{ width: 280 }}>
                <div className="d-flex justify-content-between pr-2">
                  <div className="text-muted">{differenceDate + " Nights"}</div>
                  <strong>
                    {" "}
                    {hotelData && hotelData["cost_per_night"]} $/Nights{" "}
                  </strong>
                </div>
                <div className="d-flex justify-content-between my-3 pr-2">
                  <div className="text-muted">Total</div>

                  <strong>
                    {" "}
                    ${" "}
                    {hotelData && hotelData["cost_per_night"] * differenceDate}
                  </strong>
                </div>
              </div>
            ) : (
              ""
            )
            //  <p className="text-danger">The minimum length of stay for this home is 30 nights</p>
          }

          <p className="text-muted">
            Please enquire about these dates and a Travel Advisor will get back
            to you
          </p>
          <button
            className="btn btn-danger btn-lg btn-block mb-3"
            style={{ backgroundColor: "#FF8065" }}
            onClick={(arrival, departure) => handleBooking(arrival, departure)}
          >
            Request a Booking
          </button>

          <hr />
          <div className="card mt-3 pl-3 pt-2 pb-2">
            <div
              className="text-center"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              Ask a Question{" "}
            </div>
          </div>
          <div className="mt-5 clearfix">
            <small style={contact}>Contact us</small>
            <small className="float-right" style={{ fontSize: 16 }}>
              +91-8051665056
            </small>
          </div>
          <hr />
          <div className="clearfix mt-3">
            <i class="far fa-heart pr-3"></i>
            <small style={{ display: "inlineBlock" }}>Add to Wishlist</small>
            <small className="float-right pl-3">Share</small>
            <img
              type="share"
              src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/5ea8b6bf30a043bb85d0e2e10bb0f192.svg"
              alt="share"
              class="sc-1ny7b47-0 jhFEmf float-right"
              style={{ verticalAlign: "middle" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
const contact = {
  fontSize: 16,
  textDecoration: "underline",
};

const labelStyle = {
  border: "none",
  background: "white",
  height: 33,
  opacity: 0.5,
};

const cardStyle = {
  width: 380,
  height: "auto",
  backgroundColor: "#FDFDFD",
};

const formStyle = {
  fontSize: "15px",
  width: 280,
  height: 33,
};

const titleStyle = {
  fontSize: "16px",
  fontWeight: "bold",
};

const mapStateToProps = (state) => ({
  hotelData: state.dataReducer.entityData,
});

export default connect(mapStateToProps, null)(BookingBox);

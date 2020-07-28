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
    console.log("submit", e);
  };

  render() {
    console.log(this.state, "form details");
    return (
      <div className="row">
        <div className="col-12 col-md-8 order-2 order-md-1">
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
              {/* <button type="submit" class="btn btn-danger my-3">
                Request a booking
              </button> */}
              <Payment {...this.props} />
            </div>
          </form>
        </div>
        <div
          className="col-12 border-0 card col-md-4 order-1 order-md-2 my-5"
          style={{ maxHeight: "550px" }}
        >
          <img
            src="https://onefinestay.imgix.net/media-library/2017-03-27-22-00-15-461248-EMM354-TAKE-01-19.jpg?auto=format&w=900&dpr=1"
            class="card-img-top d-none d-md-block"
            style={{ height: "170px" }}
            alt="..."
          />

          <div className="row">
            <div class="card col-6 col-md-12 border-0">
              <div class="card-body bg-dark text-light">
                <h5>Card title</h5>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card col-6 col-md-12 border-0 ">
              <div className="bg-dark text-light pb-5">
                <p class=" p-md-3 py-5">Some quick example text to build.</p>
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

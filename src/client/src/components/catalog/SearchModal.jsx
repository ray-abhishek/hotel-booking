import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { fetchCatalogRequest } from "../../redux/action";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "react-google-places-autocomplete/dist/index.min.css";
// import { Redirect } from "react-router-dom";

const ExampleCustomArrival = ({ value, onClick }) => (
  <button style={{ border: "none", background: "white" }} onClick={onClick}>
    {value ? value : "Arrival"}
  </button>
);

const ExampleCustomDeparture = ({ value, onClick }) => (
  <button style={{ border: "none", background: "white" }} onClick={onClick}>
    {value ? value : "Departure"}
  </button>
);

class SearchBarModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      arrivalDate: null,
      departureDate: null,
      guests: null,
    };
  }

  handleArrivalDateChange = (date) => {
    this.setState({
      arrivalDate: date,
    });
  };
  handledepartureDateChange = (date) => {
    this.setState({
      departureDate: date,
    });
  };

  setCity = (e) => {
    console.log(e["description"]);
    let cityName = e["description"].split(",")[0];
    this.setState({ city: cityName });
  };

  handleOnClick = (e) => {
    ////console.log(this.props, "clicked");
    const { arrivalDate, departureDate } = this.state;
    const { fetchCatalogRequest } = this.props;
    let url = "/search";
    let arrival =
      arrivalDate &&
      `${arrivalDate.getFullYear()}-${
        arrivalDate.getMonth() + 1
      }-${arrivalDate.getDate()}`;
    let departure =
      departureDate &&
      `${departureDate.getFullYear()}-${
        departureDate.getMonth() + 1
      }-${departureDate.getDate()}`;
    let query = "";
    if (this.state.city) {
      url += `/${this.state.city}`;
      query += !arrivalDate ? "" : `&arrivalDate=${arrival}`;
      query += !departureDate ? "" : `&departureDate=${departure}`;
      query += !this.state.guests ? "" : `&sleeps=${this.state.guests}`;
      query = query.length > 0 ? query.slice(1) : "";
      url += query.length > 0 ? `?${query}` : "";
      this.props.history.push(url);
    } else {
      query += !arrivalDate ? "" : `&arrivalDate=${arrival}`;
      query += !departureDate ? "" : `&departureDate=${departure}`;
      query += !this.state.guests ? "" : `&sleeps=${this.state.guests}`;
      query = query.length > 0 ? query.slice(1) : "";
      url += query.length > 0 ? `?${query}` : "";
      this.props.history.push(url);
    }
    ////console.log(url, "fetchCatalogRequest url");
    fetchCatalogRequest(url);
  };

  render() {
    return (
      <div style={{backgroundColor : 'white'}}
        class="modal fade"
        id="searchModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="search"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="search">
                Search
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="form-group JUGAADU" >
                  <div className="border row ">
                    <div className="col-7 offset-2">
                      {/* <input
                        type="text"
                        list="topdestinations"
                        placeholder="Where to next?"
                        onChange={(e) => {
                          this.setState({
                            city: e.target.value,
                          });
                        }}
                      /> */}

                      <GooglePlacesAutocomplete
                        onSelect={(e) => this.setCity(e)}
                        placeholder="Where to next?"
                        debounce={500}
                      />
                    </div>
                    <div className=" col-1">
                      <img
                        type="search"
                        src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/8d5ffea350722a76661c3e841b6d24ee.svg"
                        alt="search"
                      />
                    </div>
                  </div>
                  <datalist id="topdestinations">
                    <option value="London" />
                    <option value="Tokyo" />
                    <option value="New York" />
                    <option value="Paris" />
                  </datalist>
                </div>

                <div className="form-group row py-2  border">
                  <div
                    style={{ backgroundColor: "white" }}
                    className="col-7 offset-2"
                  >
                    <DatePicker
                      className="datepicker"
                      selected={this.state.arrivalDate}
                      onChange={(date) => this.handleArrivalDateChange(date)}
                      selectsStart
                      startDate={this.state.arrivalDate}
                      endDate={this.state.departureDate}
                      customInput={<ExampleCustomArrival />}
                    />
                  </div>
                  <div className="col-1">
                    <img
                      type="calendar"
                      height="18px"
                      width="18px"
                      src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/69db739b45ad31493bdf934e1715f135.svg"
                      alt="calendar"
                    />
                  </div>
                </div>

                <div className="form-group row py-2  border">
                  <div
                    style={{ backgroundColor: "white" }}
                    className="col-7 offset-2"
                  >
                    <DatePicker
                      className="datepicker"
                      selected={this.state.departureDate}
                      onChange={(date) => this.handledepartureDateChange(date)}
                      // disabledKeyboardNavigation
                      selectsStart
                      startDate={this.state.arrivalDate}
                      endDate={this.state.departureDate}
                      customInput={<ExampleCustomDeparture />}
                    />
                  </div>
                  <div className="col-1">
                    <img
                      type="calendar"
                      height="18px"
                      width="18px"
                      src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/69db739b45ad31493bdf934e1715f135.svg"
                      alt="calendar"
                    />
                  </div>
                </div>
                <div className="form-group row border">
                  <select
                    style={{ border: "none" }}
                    className="form-control col-8 offset-2"
                    id="guests"
                    placeholder=""
                    onChange={(e) => {
                      this.setState({
                        guests: e.target.value,
                      });
                    }}
                  >
                    <option selected>Guests</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={(e) => this.handleOnClick(e)}
                type="submit"
                className="btn btn-danger col-3"
                data-dismiss="modal"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogRequest: (payload) => dispatch(fetchCatalogRequest(payload)),
});

export default connect(null, mapDispatchToProps)(SearchBarModal);

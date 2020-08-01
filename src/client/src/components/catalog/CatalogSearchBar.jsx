import React, { Component } from "react";
import style from "./CatalogSearchBar.module.css";
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

class CatalogSearchBar extends Component {
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
    fetchCatalogRequest(url);
  };

  setCity = (e) => {
    console.log(e["description"]);
    let cityName = e["description"].split(",")[0];
    this.setState({ city: cityName });
  };

  render() {
    return (
      <div style={searchBarStyle}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-row row" style={{height:'42px'}}>
            <div className="form-group col-4" style={{height:'42px'}}>
              <div style={child1}>
                <GooglePlacesAutocomplete
                  onSelect={(e) => this.setCity(e)}
                  inputStyle={inputStyle}
                  placeholder="Where to next?"
                  debounce={500}
                />
              </div>
              <datalist id="topdestinations">
                <option value="London" />
                <option value="Tokyo" />
                <option value="New York" />
                <option value="Paris" />
              </datalist>
            </div>

            <div className="form-group col-2" style={{height:'42px'}}>
              <div className="" style={child2}>
                <div className="w-100" style={{ backgroundColor: "white" }}>
                  <DatePicker
                    className="datepicker"
                    selected={this.state.arrivalDate}
                    onChange={(date) => this.handleArrivalDateChange(date)}
                    // disabledKeyboardNavigation
                    // placeholderText="Arrival"
                    selectsStart
                    startDate={this.state.arrivalDate}
                    endDate={this.state.departureDate}
                    customInput={<ExampleCustomArrival />}
                  />
                </div>
                <div className="pt-2">
                  <img
                    type="calendar"
                    height="18px"
                    width="18px"
                    src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/69db739b45ad31493bdf934e1715f135.svg"
                    alt="calendar"
                    class="sc-1ny7b47-0 jhFEmf"
                  />
                </div>
              </div>
            </div>

            <div className="form-group col-2">
              <div className="" style={child3}>
                <div className="w-100" style={{ backgroundColor: "white !important" }}>
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
                <div className="pt-2">
                  <img
                    type="calendar"
                    height="18px"
                    width="18px"
                    src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/69db739b45ad31493bdf934e1715f135.svg"
                    alt="calendar"
                    class="sc-1ny7b47-0 jhFEmf"
                  />
                </div>
              </div>
            </div>
            <div className="form-group col-2" style={child4}>
              <select
                className="form-control border-0"
                id="guests"
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

            <button
              style={submitButton}
              onClick={(e) => this.handleOnClick(e)}
              type="submit"
              className="btn col-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const searchBarStyle = {
  position: "relative",
  fontSize: "12px",
  backgroundColor: "white",
  height: "42px",
  borderRadius: "5px",
  width : "665px"
  // maxWidth: "800px",
  // margin: "4rem auto 6rem auto",
};

const searchImgStyle = {
  //position: "relative",
  right: "25px",
};

const inputStyle = {
  padding: "12px",
  width: "100%",
  boxShadow: "none",
};

const child1 = {
  zIndex: "2",
  height: "100%",
};

const child2 = {
  zIndex: "2",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "stretch",
  alignContent: "center",
};

const child3 = {
  zIndex: "2",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "stretch",
  alignContent: "center",
};

const child4 = {
  height: "100%",
};

const submitButton = {
  maxHeight: "42px",
  border: '1px solid rgb(246, 99, 68)',
  color : 'rgb(246, 99, 68)',
  //backgroundColor : 'rgb(246, 99, 68)',
  //color : 'white'
};

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogRequest: (query) => dispatch(fetchCatalogRequest(query)),
});

export default connect(null, mapDispatchToProps)(CatalogSearchBar);

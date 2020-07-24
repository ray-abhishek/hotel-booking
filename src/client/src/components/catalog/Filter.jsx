import React, { Component } from "react";
import style from "./Filter.module.css";
import { fetchRequest, fetchHotelDataSuccess } from "../../redux/action";
import { connect } from "react-redux";
import { Router, Link } from "react-router-dom";
import { node } from "prop-types";
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
      minPrice: 100,
      page: 1,
      perPage: 10,
    };
  }

  handleOnChange = (e) => {
    const { id } = e.target;
    const { features, minPrice, perPage } = this.state;
    const { location, history, match } = this.props;
    let index = features.indexOf(id);
    index == -1 ? features.push(id) : features.splice(index, 1);
    this.setState({
      features,
    });

    //uri construction
    let url =
      match.url[match.url.length - 1] !== "/" ? match.url + "/" : match.url;
    console.log(url, "url");

    if (features.length > 0) {
      let stringArr = features.map((ele, i) =>
        i == 0 ? `?feature=${ele}` : `&feature=${ele}`
      );
      url += stringArr.join("");
      url += minPrice !== 100 ? `&minPrice=${minPrice}` : "";
      url += perPage > 10 ? `&perPage=${perPage}` : "";
    } else {
      if (minPrice !== 100 && perPage > 10) {
        url += `?minPrice=${minPrice}&perPage=${perPage}`;
      } else if (minPrice !== 100) {
        url += `?minPrice=${minPrice}`;
      } else if (perPage > 10) {
        url += `?perPage=${perPage}`;
      }
    }

    history.push(url);
    this.props.fetchRequest(url);
  };

  handlePriceChange = (e) => {
    const { features, minPrice, perPage } = this.state;
    const { location, history, match } = this.props;

    this.setState({
      minPrice: e.target.valueAsNumber,
    });

    let url =
      match.url[match.url.length - 1] !== "/" ? match.url + "/" : match.url;
    console.log(url, "url");

    if (features.length > 0) {
      let stringArr = features.map((ele, i) =>
        i == 0 ? `?feature=${ele}` : `&feature=${ele}`
      );
      url += stringArr.join("");
      url +=
        e.target.valueAsNumber !== 100
          ? `&minPrice=${e.target.valueAsNumber}`
          : "";
      url += perPage > 10 ? `&perPage=${perPage}` : "";
    } else {
      if (e.target.valueAsNumber !== 100 && perPage > 10) {
        url += `?minPrice=${e.target.valueAsNumber}&perPage=${perPage}`;
      } else if (e.target.valueAsNumber !== 100) {
        url += `?minPrice=${e.target.valueAsNumber}`;
      } else if (perPage > 10) {
        url += `?perPage=${perPage}`;
      }
    }

    history.push(url);
    this.props.fetchRequest(url);
  };

  handlePerPageChange = (e) => {
    const { features, minPrice, perPage } = this.state;
    const { location, history, match } = this.props;

    this.setState({
      perPage: e.target.id,
    });
    let url =
      match.url[match.url.length - 1] !== "/" ? match.url + "/" : match.url;
    console.log(url, "url");

    if (features.length > 0) {
      let stringArr = features.map((ele, i) =>
        i == 0 ? `?feature=${ele}` : `&feature=${ele}`
      );
      url += stringArr.join("");
      url += minPrice !== 100 ? `&minPrice=${minPrice}` : "";
      url += e.target.id > 10 ? `&perPage=${e.target.id}` : "";
    } else {
      if (minPrice !== 100 && e.target.id > 10) {
        url += `?minPrice=${minPrice}&perPage=${e.target.id}`;
      } else if (minPrice !== 100) {
        url += `?minPrice=${minPrice}`;
      } else if (e.target.id > 10) {
        url += `?perPage=${e.target.id}`;
      }
    }

    history.push(url);
    this.props.fetchRequest(url);
  };

  render() {
    console.log(this.props, "props");
    // console.log(this.state, "state");
    const { history, location, match } = this.props;
    // console.log(location);
    const { fetchRequest, fetchHotelDataSuccess } = this.props;
    return (
      <div className="row">
        <div className="col-3">
          <div className="card mb-3" style={{ height: "8rem", width: "16rem" }}>
            <div className="card-body">
              <div class="form-group">
                <label for="formControlRange">Price per night</label>
                <input
                  type="range"
                  class="form-control-range"
                  id="formControlRange"
                  min="100"
                  max="5000"
                  step="200"
                  value={`${this.state.minPrice}`}
                  onChange={(e) => this.handlePriceChange(e)}
                />
              </div>
            </div>
          </div>
          <div class="card" style={{ width: "16rem" }}>
            <div className="card-header">Features</div>
            <div class="card">
              <div className="card-body">
                <div className="bold">Accessibility</div>
                <br />
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pets_welcome"
                    onChange={(e) => this.handleOnChange(e)}
                  />
                  <label className="custom-control-label" for="pets_welcome">
                    Pets welcome
                  </label>
                </div>
              </div>
            </div>
            <div class="card">
              <div className="card-body">
                {/* <div> */}
                <div className="bold">Bedroom amenities</div>
                <br />
                <div className="custom-control custom-checkbox">
                  <input
                    onChange={(e) => this.handleOnChange(e)}
                    type="checkbox"
                    className="custom-control-input"
                    id="double_bed"
                  />
                  <label className="custom-control-label" for="double_bed">
                    Double bed
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    onChange={(e) => this.handleOnChange(e)}
                    type="checkbox"
                    className="custom-control-input"
                    id="king_size_bed"
                  />
                  <label className="custom-control-label" for="king_size_bed">
                    King size bed
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    onChange={(e) => this.handleOnChange(e)}
                    type="checkbox"
                    className="custom-control-input"
                    id="single_bed"
                  />
                  <label className="custom-control-label" for="single_bed">
                    Single bed
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    onChange={(e) => this.handleOnChange(e)}
                    type="checkbox"
                    className="custom-control-input"
                    id="super_king_size_bed"
                  />
                  <label
                    className="custom-control-label"
                    for="super_king_size_bed"
                  >
                    Super king size bed
                  </label>
                </div>
                <div className="custom-control custom-checkbox"></div>
                {/* </div> */}
              </div>
            </div>
            <div class="card">
              <div className="card-body">
                <div>
                  <div className="bold">Entertainment amenities</div>
                  <br />
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="children's_toys"
                    />
                    <label
                      className="custom-control-label"
                      for="children's_toys"
                    >
                      Children's toys
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="satellite_or_cable"
                    />
                    <label
                      className="custom-control-label"
                      for="satellite_or_cable"
                    >
                      Satellite or cable
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox"></div>
                </div>
              </div>
            </div>
            <div class="card">
              <div className="card-body">
                <div>
                  <div className="bold">Equipment</div>
                  <br />
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="washing_machine"
                    />
                    <label
                      className="custom-control-label"
                      for="washing_machine"
                    >
                      Washing machine
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="tumble_dryer"
                    />
                    <label className="custom-control-label" for="tumble_dryer">
                      Tumble dryer
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="washer_dryer"
                    />
                    <label className="custom-control-label" for="washer_dryer">
                      Washer dryer
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox"></div>
                </div>
              </div>
            </div>
            <div class="card">
              <div className="card-body">
                <div>
                  <div className="bold">Family</div>
                  <br />
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="babies_welcome"
                    />
                    <label
                      className="custom-control-label"
                      for="babies_welcome"
                    >
                      Babies welcome
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="toddlers_welcome"
                    />
                    <label
                      className="custom-control-label"
                      for="toddlers_welcome"
                    >
                      Toddlers welcome
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="children_welcome"
                    />
                    <label
                      className="custom-control-label"
                      for="children_welcome"
                    >
                      Children welcome
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox"></div>
                </div>
              </div>
            </div>
            <div class="card">
              <div className="card-body">
                <div>
                  <div className="bold">Kitchen amenities</div>
                  <br />
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="dishwasher"
                    />
                    <label className="custom-control-label" for="dishwasher">
                      Dishwasher
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="hob_electric"
                    />
                    <label className="custom-control-label" for="hob_electric">
                      Hob electric
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="hob_gas"
                    />
                    <label className="custom-control-label" for="hob_gas">
                      Hob gas
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="hob_induction"
                    />
                    <label className="custom-control-label" for="hob_induction">
                      Hob induction
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="oven"
                    />
                    <label className="custom-control-label" for="oven">
                      Oven
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="microwave"
                    />
                    <label className="custom-control-label" for="microwave">
                      Microwave
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox"></div>
                </div>
              </div>
            </div>
            <div class="card">
              <div className="card-body">
                <div className="bold">Pool amenities</div>
                <br />

                <div className="custom-control custom-checkbox">
                  <input
                    onChange={(e) => this.handleOnChange(e)}
                    type="checkbox"
                    className="custom-control-input"
                    id="swimming_pool"
                  />
                  <label className="custom-control-label" for="swimming_pool">
                    Swimming pool
                  </label>
                </div>
                <div className="custom-control custom-checkbox"></div>
              </div>
            </div>
            <div class="card">
              <div className="card-body">
                <div>
                  <div className="bold">Property features</div>
                  <br />
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="air_conditioning"
                    />
                    <label
                      className="custom-control-label"
                      for="air_conditioning"
                    >
                      Air-conditioning
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="balcony_terrace"
                    />
                    <label
                      className="custom-control-label"
                      for="balcony_terrace"
                    >
                      Balcony terrace
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="elevator"
                    />
                    <label className="custom-control-label" for="elevator">
                      Elevator
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="garden"
                    />
                    <label className="custom-control-label" for="garden">
                      Garden
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="off_road_parking"
                    />
                    <label
                      className="custom-control-label"
                      for="off_road_parking"
                    >
                      Off Road Parking
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="roof_terrace_garden"
                    />
                    <label
                      className="custom-control-label"
                      for="roof_terrace_garden"
                    >
                      Roof terrace garden
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="secure_parking"
                    />
                    <label
                      className="custom-control-label"
                      for="secure_parking"
                    >
                      Secure parking
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox"></div>
                </div>
              </div>
            </div>
            <div class="card">
              <div className="card-body">
                <div>
                  <div className="bold">Room features</div>
                  <br />
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="gym"
                    />
                    <label className="custom-control-label" for="gym">
                      Gym
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      type="checkbox"
                      className="custom-control-input"
                      id="ensuite"
                    />
                    <label className="custom-control-label" for="ensuite">
                      Ensuite
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-2">hotel count</div>
            <div className="col-3 offset-3">
              <button
                id="10"
                onClick={(e) => this.handlePerPageChange(e)}
                className={`px-2 ${style.perPage}`}
                // to={`/search${location.pathname}${location.search}&perPage=${this.state.perPage}`}
              >
                10
              </button>
              <button
                id="30"
                onClick={(e) => this.handlePerPageChange(e)}
                className={`px-2 ${style.perPage}`}
                // to={`/search${location.pathname}${location.search}&perPage=${this.state.perPage}`}
              >
                30
              </button>
              <button
                id="50"
                onClick={(e) => this.handlePerPageChange(e)}
                className={`px-2 ${style.perPage}`}
                // to={`/search${location.pathname}${location.search}&perPage=${this.state.perPage}`}
              >
                50
              </button>
              <span>per page</span>
            </div>
            <div className="col-3">
              <div class="form-group">
                <select
                  onChange={(e) => {
                    this.setState({
                      sort: e.target.value,
                    });
                    if (location.search == "")
                      this.props.history.push(
                        `${match.url}/?sort=${e.target.value}`
                      );
                    else
                      this.props.history.push(
                        `${match.url}&sort=${e.target.value}`
                      );
                  }}
                  class="form-control"
                  id="sort"
                >
                  <option selected>Sort</option>
                  <option value="recommended">Recommended</option>
                  <option value="recently_added">Recently added</option>
                  <option value="sleeps_most">Sleeps (most)</option>
                  <option value="sleeps_fewest">Sleeps (fewest)</option>
                  <option value="price_highest">Price (highest)</option>
                  <option value="price_lowest">Price (lowest)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchRequest: (payload) => dispatch(fetchRequest(payload)),
  fetchHotelDataSuccess: (payload) => dispatch(fetchHotelDataSuccess(payload)),
});
export default connect(null, mapDispatchToProps)(Filter);

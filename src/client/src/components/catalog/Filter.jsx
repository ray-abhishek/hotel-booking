import React, { Component } from "react";
import style from "./Filter.module.css";
import {
  fetchCatalogRequest,
  fetchCatalogListSuccess,
} from "../../redux/action";
import { connect } from "react-redux";
import queryString from "query-string";
import Gallery from "./Gallery";
import SearchBar from "../../components/common/SearchBar";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
      minPrice: 100,
      page: 1,
      perPage: 10,
      sort: "Recommended",
    };
  }

  componentDidMount() {
    const { fetchCatalogRequest, history, location, match } = this.props;
    const values = queryString.parse(this.props.location.search);
    this.setState({
      features: values.features || [],
      minPrice: values.minPrice || 100,
      sort: values.sort || "Recommended",
      perPage: values.perPage > 10 ? values.perPage : 10,
    });
    fetchCatalogRequest(`${location.pathname}${location.search}`);
  }

  handleOnChange = (e) => {
    const { id } = e.target;
    const { features, minPrice, perPage, page, sort } = this.state;
    const { location, history, match, fetchCatalogRequest } = this.props;
    let index = features.indexOf(id);
    index == -1 ? features.push(id) : features.splice(index, 1);
    this.setState({
      features,
    });

    //url construction
    let url = match.url[match.url.length - 1] !== "/" ? match.url : match.url;
    let query = "";
    if (features.length > 0) {
      let stringArr = features.map((ele, i) =>
        i == 0 ? `?features=${ele}` : `&features=${ele}`
      );
      url += stringArr.join("");
      url += minPrice != 100 ? `&minPrice=${minPrice}` : "";
      url += perPage > 10 ? `&perPage=${perPage}` : "";
      url += page > 1 ? `&page=${page}` : "";
      url +=
        sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
    } else {
      query += minPrice != 100 ? `&minPrice=${minPrice}` : "";
      query += perPage > 10 ? `&perPage=${perPage}` : "";
      query += page > 1 ? `&page=${page}` : "";
      query +=
        sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
    }
    url += query.length > 0 ? "?" + query.slice(1) : "";
    history.push(url);
    fetchCatalogRequest(url);
  };

  handlePriceChange = (e) => {
    const { features, minPrice, perPage, page, sort } = this.state;
    const { location, history, match, fetchCatalogRequest } = this.props;

    this.setState({
      minPrice: e.target.valueAsNumber,
    });

    let url = match.url[match.url.length - 1] !== "/" ? match.url : match.url;
    let query = "";
    if (features.length > 0) {
      let stringArr = features.map((ele, i) =>
        i == 0 ? `?features=${ele}` : `&features=${ele}`
      );
      url += stringArr.join("");
      url +=
        e.target.valueAsNumber != 100
          ? `&minPrice=${e.target.valueAsNumber}`
          : "";
      url += perPage > 10 ? `&perPage=${perPage}` : "";
      url += page > 1 ? `&page=${page}` : "";
      url +=
        sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
    } else {
      query +=
        e.target.valueAsNumber != 100
          ? `&minPrice=${e.target.valueAsNumber}`
          : "";
      query += perPage > 10 ? `&perPage=${perPage}` : "";
      query += page > 1 ? `&page=${page}` : "";
      query +=
        sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
    }
    url += query.length > 0 ? "?" + query.slice(1) : "";
    history.push(url);
    fetchCatalogRequest(url);
  };

  handlePerPageChange = (e) => {
    const { features, minPrice, perPage, page, sort } = this.state;
    const { location, history, match, fetchCatalogRequest } = this.props;

    this.setState({
      perPage: e.target.id,
    });
    let url = match.url[match.url.length - 1] !== "/" ? match.url : match.url;
    let query = "";
    if (features.length > 0) {
      let stringArr = features.map((ele, i) =>
        i == 0 ? `?features=${ele}` : `&features=${ele}`
      );
      url += stringArr.join("");
      url += minPrice != 100 ? `&minPrice=${minPrice}` : "";
      url += e.target.id > 10 ? `&perPage=${e.target.id}` : "";
      url += page > 1 ? `&page=${page}` : "";
      url +=
        sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
    } else {
      query += minPrice != 100 ? `&minPrice=${minPrice}` : "";
      query += e.target.id > 10 ? `&perPage=${e.target.id}` : "";
      query += page > 1 ? `&page=${page}` : "";
      query +=
        sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
    }
    url += query.length > 0 ? "?" + query.slice(1) : "";
    history.push(url);
    fetchCatalogRequest(url);
  };

  handleSortChange = (e) => {
    const { features, minPrice, perPage, page, sort } = this.state;
    const { location, history, match, fetchCatalogRequest } = this.props;

    this.setState({
      sort: e.target.value,
    });
    let url = match.url[match.url.length - 1] !== "/" ? match.url : match.url;
    let query = "";
    if (features.length > 0) {
      let stringArr = features.map((ele, i) =>
        i == 0 ? `?features=${ele}` : `&features=${ele}`
      );
      url += stringArr.join("");
      url += minPrice != 100 ? `&minPrice=${minPrice}` : "";
      url += perPage > 10 ? `&perPage=${perPage}` : "";
      url += page > 1 ? `&page=${page}` : "";
      url +=
        e.target.value == "Recommended" || e.target.value == "recommended"
          ? ""
          : `&sort=${e.target.value}`;
    } else {
      query += minPrice != 100 ? `&minPrice=${minPrice}` : "";
      query += perPage > 10 ? `&perPage=${perPage}` : "";
      query += page > 1 ? `&page=${page}` : "";
      query +=
        e.target.value == "Recommended" || e.target.value == "recommended"
          ? ""
          : `&sort=${e.target.value}`;
    }
    url += query.length > 0 ? "?" + query.slice(1) : "";
    history.push(url);
    fetchCatalogRequest(url);
  };

  render() {
    const { location, totalResults } = this.props;
    // const { fetchCatalogRequest, fetchCatalogListSuccess } = this.props;
    const values = queryString.parse(this.props.location.search);

    return (
      <>
        <div
          className="d-none d-md-block"
          style={{
            margin: "15px auto",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <SearchBar {...this.props} />
            </div>
            <div
              className="btn btn-dark"
              style={{ margin: "0 10px", padding: "6px 35px" }}
            >
              Map
            </div>
          </div>
        </div>
        <div className="d-block d-md-none text-center">
          <span
            className="btn btn-danger"
            style={{ margin: "10px 6px", padding: "6px 20%" }}
          >
            Search
          </span>
          <span
            className="btn btn-dark "
            style={{ margin: "10px 6px", padding: "6px 10%" }}
          >
            filter
          </span>
        </div>
        <div className={`row ${style.containerBox}`}>
          <div className={`d-none d-md-block ${style.filterBox}`}>
            <div className="card mb-3" style={{ height: "8rem" }}>
              <div className="card-body">
                <div class="form-group">
                  <label for="pt-1 formControlRange">Price per night</label>
                  <input
                    type="range"
                    class="custom-range"
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
            <div class="card" style={{}}>
              <div className="card-header">Features</div>
              <div class="card">
                <div className="card-body">
                  <div className="bold">Accessibility</div>
                  <br />
                  <div className="custom-control custom-checkbox">
                    <input
                      checked={location.search.includes("pets")}
                      type="checkbox"
                      className="custom-control-input"
                      id="pets welcome"
                      onChange={(e) => this.handleOnChange(e)}
                    />
                    <label
                      className="pt-1 custom-control-label"
                      for="pets welcome"
                    >
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
                      checked={location.search.includes("double")}
                      type="checkbox"
                      className="custom-control-input"
                      id="double bed"
                    />
                    <label
                      className="pt-1 custom-control-label"
                      for="double bed"
                    >
                      Double bed
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      // e.target.setAttribute("checked", !e.target.checked);
                      onChange={(e) => {
                        this.handleOnChange(e);
                      }}
                      checked={location.search.includes("beds")}
                      type="checkbox"
                      className="custom-control-input"
                      id="king size beds"
                    />
                    <label
                      className="pt-1 custom-control-label"
                      for="king size beds"
                    >
                      King size beds
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      checked={location.search.includes("single")}
                      type="checkbox"
                      className="custom-control-input"
                      id="single bed"
                    />
                    <label
                      className="pt-1 custom-control-label"
                      for="single bed"
                    >
                      Single bed
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      onChange={(e) => this.handleOnChange(e)}
                      checked={location.search.includes("super")}
                      type="checkbox"
                      className="custom-control-input"
                      id="super king size bed"
                    />
                    <label
                      className="pt-1 custom-control-label"
                      for="super king size bed"
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
                        checked={location.search.includes("childrens toys")}
                        type="checkbox"
                        className="custom-control-input"
                        id="childrens toys"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="childrens toys"
                      >
                        Childrens toys
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("satellite")}
                        type="checkbox"
                        className="custom-control-input"
                        id="satellite or cable"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="satellite or cable"
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
                        checked={location.search.includes("washing")}
                        type="checkbox"
                        className="custom-control-input"
                        id="washing machine"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="washing machine"
                      >
                        Washing machine
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("tumble")}
                        type="checkbox"
                        className="custom-control-input"
                        id="tumble dryer"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="tumble dryer"
                      >
                        Tumble dryer
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("washer")}
                        type="checkbox"
                        className="custom-control-input"
                        id="washer dryer"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="washer dryer"
                      >
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
                        checked={location.search.includes("babies")}
                        type="checkbox"
                        className="custom-control-input"
                        id="babies welcome"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="babies welcome"
                      >
                        Babies welcome
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("toddlers")}
                        type="checkbox"
                        className="custom-control-input"
                        id="toddlers welcome"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="toddlers welcome"
                      >
                        Toddlers welcome
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("children welcome")}
                        type="checkbox"
                        className="custom-control-input"
                        id="children welcome"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="children welcome"
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
                        checked={location.search.includes("Dishwasher")}
                        type="checkbox"
                        className="custom-control-input"
                        id="Dishwasher"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="Dishwasher"
                      >
                        Dishwasher
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("electric")}
                        type="checkbox"
                        className="custom-control-input"
                        id="hob electric"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="hob electric"
                      >
                        Hob electric
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("gas")}
                        type="checkbox"
                        className="custom-control-input"
                        id="hob gas"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="hob gas"
                      >
                        Hob gas
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("induction")}
                        type="checkbox"
                        className="custom-control-input"
                        id="hob induction"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="hob induction"
                      >
                        Hob induction
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("Oven")}
                        type="checkbox"
                        className="custom-control-input"
                        id="Oven"
                      />
                      <label className="pt-1 custom-control-label" for="Oven">
                        Oven
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("Microwave")}
                        type="checkbox"
                        className="custom-control-input"
                        id="Microwave"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="Microwave"
                      >
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
                      checked={location.search.includes("swimming")}
                      type="checkbox"
                      className="custom-control-input"
                      id="swimming pool"
                    />
                    <label
                      className="pt-1 custom-control-label"
                      for="swimming pool"
                    >
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
                        checked={location.search.includes("conditioning")}
                        type="checkbox"
                        className="custom-control-input"
                        id="air conditioning"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="air conditioning"
                      >
                        Air-conditioning
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("balcony")}
                        type="checkbox"
                        className="custom-control-input"
                        id="balcony terrace"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="balcony terrace"
                      >
                        Balcony terrace
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("Elevator")}
                        type="checkbox"
                        className="custom-control-input"
                        id="Elevator"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="Elevator"
                      >
                        Elevator
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("Garden")}
                        type="checkbox"
                        className="custom-control-input"
                        id="Garden"
                      />
                      <label className="pt-1 custom-control-label" for="Garden">
                        Garden
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("road")}
                        type="checkbox"
                        className="custom-control-input"
                        id="off road parking"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="off road parking"
                      >
                        Off Road Parking
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("roof")}
                        type="checkbox"
                        className="custom-control-input"
                        id="roof terrace garden"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="roof terrace garden"
                      >
                        Roof terrace garden
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("secure")}
                        type="checkbox"
                        className="custom-control-input"
                        id="secure parking"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="secure parking"
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
                        checked={location.search.includes("Gym")}
                        type="checkbox"
                        className="custom-control-input"
                        id="Gym"
                      />
                      <label className="pt-1 custom-control-label" for="Gym">
                        Gym
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        onChange={(e) => this.handleOnChange(e)}
                        checked={location.search.includes("ensuite")}
                        type="checkbox"
                        className="custom-control-input"
                        id="ensuite"
                      />
                      <label
                        className="pt-1 custom-control-label"
                        for="ensuite"
                      >
                        Ensuite
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${style.galleryBox}`}>
            <div className="">
              <div className={`${style.sortBox}`}>
                <div className={`${style.totalHotels}`}>
                  <span className={`${style.bgHighlight}`}>
                    <b>{totalResults}</b> luxury homes to rent
                  </span>
                </div>
                <div className={`${style.sortElement}`}>
                  <div className={`${style.perPageComponent}`}>
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
                  <div className={`${style.sortButtonComponent}`}>
                    <div class="form-group">
                      <select
                        onChange={(e) => this.handleSortChange(e)}
                        class="form-control"
                        id="sort"
                      >
                        <option selected>Sort By</option>
                        <option value="Recommended">Recommended</option>
                        <option value="RecentlyAdded">Recently added</option>
                        <option value="SleepsMost">Sleeps (most)</option>
                        <option value="SleepsFewest">Sleeps (fewest)</option>
                        <option value="PriceHighest">Price (highest)</option>
                        <option value="PriceLowest">Price (lowest)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <Gallery {...this.props} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  totalResults: state.dataReducer.totalRes,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogRequest: (payload) => dispatch(fetchCatalogRequest(payload)),
  fetchCatalogListSuccess: (payload) =>
    dispatch(fetchCatalogListSuccess(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

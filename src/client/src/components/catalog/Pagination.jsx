import React, { Component } from "react";
import queryString from "query-string";
import { connect } from "react-redux";
import {
  fetchCatalogListSuccess,
  fetchCatalogRequest,
} from "../../redux/action";

//import style from "./Sort.module.css";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: 100,
      perPage: 10,
      sort: "Recommended",
      features: [],
      page: 1,
    };
  }

  // componentDidMount() {
  //   const { fetchCatalogRequest, history, location, match } = this.props;
  //   const values = queryString.parse(this.props.location.search);
  //   this.setState({
  //     feature:
  //       !values.feature || (values.feature && values.feature.length > 0)
  //         ? values.feature
  //         : [],
  //     minPrice:
  //       !values.minPrice || values.minPrice == 100 ? 100 : values.minPrice,
  //     sort:
  //       !values.sort ||
  //       values.sort == "Recommended" ||
  //       values.sort == "Recommended"
  //         ? "Recommended"
  //         : values.sort,
  //     perPage: !values.perPage || values.perPage == 10 ? 10 : values.perPage,
  //   });
  //   fetchCatalogRequest(`${location.pathname}${location.search}`);
  // }

  handlePageChange = (e) => {
    e.preventDefault();
    const { features, minPrice, perPage, page, sort } = this.state;
    const { location, history, match, fetchCatalogRequest } = this.props;

    this.setState({
      page: e.target.id,
    });
    let url = match.url[match.url.length - 1] !== "/" ? match.url : match.url;
    let query = "";
    if (features.length > 0) {
      let stringArr = features.map((ele, i) =>
        i == 0 ? `?feature=${ele}` : `&feature=${ele}`
      );
      url += stringArr.join("");
      url += minPrice != 100 ? `&minPrice=${minPrice}` : "";
      url += perPage > 10 ? `&perPage=${perPage}` : "";
      url += e.target.id > 1 ? `&page=${e.target.id}` : "";
      url +=
        sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
    } else {
      query += minPrice != 100 ? `&minPrice=${minPrice}` : "";
      query += perPage > 10 ? `&perPage=${perPage}` : "";
      query += e.target.id > 1 ? `&page=${e.target.id}` : "";
      query +=
        sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
    }
    url += query.length > 0 ? "?" + query.slice(1) : "";
    history.push(url);
    fetchCatalogRequest(url);
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { fetchCatalogRequest } = this.props;
    const { location } = nextProps;

    const values = queryString.parse(location.search);
    console.log(
      location.search,
      values,
      "this is next props obj from pagination"
    );
    this.setState({
      feature:
        !values.feature || (values.feature && values.feature.length > 0)
          ? values.feature
          : [],
      minPrice:
        !values.minPrice || values.minPrice == 100 ? 100 : values.minPrice,
      sort:
        !values.sort ||
        values.sort == "Recommended" ||
        values.sort == "Recommended"
          ? "Recommended"
          : values.sort,
      perPage: !values.perPage || values.perPage == 10 ? 10 : values.perPage,
    });

    // console.log(values, "this is a state from pagination");
    // fetchCatalogRequest(`${location.pathname}${location.search}`);

    // if (this.props.page !== nextProps.page) {
    //   return true;
    // }
    // if (this.state.page !== nextState.page) {
    //   return true;
    // }
    return false;
  }

  render() {
    const { page } = this.state;
    return (
      <nav aria-label="Page navigation example" className="col-3 offset-6">
        <ul class="pagination">
          <li class="page-item">
            <a
              onClick={(e) => {
                this.setState({
                  page: page != 1 ? Number(page) - 1 : page,
                });
                this.props.history.push(`/search/${page}`);
              }}
              class="page-link"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a
              onClick={(e) => this.handlePageChange(e)}
              class="page-link"
              id="1"
            >
              1
            </a>
          </li>
          <li class="page-item">
            <a
              onClick={(e) => this.handlePageChange(e)}
              class="page-link"
              id="2"
            >
              2
            </a>
          </li>
          <li class="page-item">
            <a
              onClick={(e) => this.handlePageChange(e)}
              class="page-link"
              id="3"
            >
              3
            </a>
          </li>
          <li class="page-item">
            <a
              onClick={(e) => this.handlePageChange(e)}
              class="page-link"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogRequest: (payload) => dispatch(fetchCatalogRequest(payload)),
  fetchCatalogListSuccess: (payload) =>
    dispatch(fetchCatalogListSuccess(payload)),
});
export default connect(null, mapDispatchToProps)(Pagination);

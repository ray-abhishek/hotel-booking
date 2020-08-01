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
  componentDidMount() {
    const { fetchCatalogRequest, history, location, match } = this.props;
    const values = queryString.parse(location.search);
    let featuresArr;
    if (!values.features || values.features.length == 0) {
      featuresArr = [];
    } else if (values.features && typeof values.features == "string") {
      featuresArr = [values.features];
    } else if (typeof values.features == "object") {
      featuresArr = values.features;
    }

    this.setState({
      features: featuresArr,
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
    // fetchCatalogRequest(`${location.pathname}${location.search}`);
  }

  handlePageChange = (e) => {
    e.preventDefault();
    const { features, minPrice, perPage, page, sort } = this.state;
    const { location, history, match, fetchCatalogRequest } = this.props;
    // console.log(location, "this is location obj from pagination page handler");

    this.setState({
      page: e.target.id,
    });

    let url = match.url[match.url.length - 1] !== "/" ? match.url : match.url;
    let query = "";
    if (features.length > 0) {
      let stringArr = features?.map((ele, i) =>
        i == 0 ? `?features=${ele}` : `&features=${ele}`
      );
      query += stringArr.join("");
      query += minPrice != 100 ? `&minPrice=${minPrice}` : "";
      query += perPage > 10 ? `&perPage=${perPage}` : "";
      query += e.target.id > 1 ? `&page=${e.target.id}` : "";
      query +=
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

  componentWillReceiveProps(nextProps, nextState) {
    const { fetchCatalogRequest } = this.props;
    const { location } = nextProps;
    //console.log(nextProps, "nextprops");
    const values = queryString.parse(location.search);
    //console.log("values", values);
    let featuresArr;
    if (!values.features || values.features.length == 0) {
      featuresArr = [];
    } else if (values.features && typeof values.features == "string") {
      featuresArr = [values.features];
    } else if (typeof values.features == "object") {
      featuresArr = values.features;
    }
    this.setState({
      features: featuresArr,
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
  }

  pages = () => {
    const { totalPages } = this.props;
    let pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(i + 1);
    }
    return pages;
  };
  render() {
    const { page } = this.state;
    const { totalPages } = this.props;
    ////console.log(totalPages, "total pages");
    //console.log(this.state, "state updated in pagination");
    let pages = this.pages();
    // console.log(page);
    return (
      <nav
        aria-label="Page navigation example"
        className="col-3 offset-6"
        style={{ cursor: "pointer" }}
      >
        {totalPages && (
          <ul class="pagination">
            {page != 1 && (
              <li class="page-item">
                <a
                  onClick={(e) => this.handlePageChange(e)}
                  class="page-link"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
            )}

            {pages &&
              pages.length > 0 &&
              pages.map((ele) => (
                <li class="page-item">
                  <a
                    onClick={(e) => this.handlePageChange(e)}
                    class="page-link"
                    id={ele}
                  >
                    {ele}
                  </a>
                </li>
              ))}

            {page != totalPages && (
              <li class="page-item">
                <a
                  onClick={(e) => this.handlePageChange(e)}
                  class="page-link"
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            )}
          </ul>
        )}
      </nav>
    );
  }
}
const mapStateToProps = (state) => ({
  totalPages: state.dataReducer.totalPages,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCatalogRequest: (payload) => dispatch(fetchCatalogRequest(payload)),
  fetchCatalogListSuccess: (payload) =>
    dispatch(fetchCatalogListSuccess(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

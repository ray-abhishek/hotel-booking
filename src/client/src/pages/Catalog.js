import React from "react";
import Filter from "../components/catalog/Filter";
import Sort from "../components/catalog/Sort";
import Pagination from "../components/catalog/Pagination";
import queryString from "query-string";
import { connect } from "react-redux";
import { fetchCatalogListSuccess, fetchCatalogRequest } from "../redux/action";
//import Gallery from "../components/catalog/Gallery";

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // minPrice: 100,
      // perPage: 10,
      // sort: "Recommended",
      // features: [],
      // page: 1,
    };
  }

  // componentDidMount() {
  //   const { fetchCatalogRequest, history, location, match } = this.props;
  //   const values = queryString.parse(this.props.location.search);
  //   this.setState({
  //     feature: values.feature || [],
  //     minPrice: values.minPrice || 100,
  //     sort: values.sort || "Recommended",
  //     perPage: values.perPage > 10 ? values.perPage : 10,
  //   });
  //   fetchCatalogRequest(`${location.pathname}${location.search}`);
  // }

  // handleOnChange = (e) => {
  //   const { id } = e.target;
  //   const { features, minPrice, perPage, page, sort } = this.state;
  //   const { location, history, match, fetchCatalogRequest } = this.props;
  //   let index = features.indexOf(id);
  //   index == -1 ? features.push(id) : features.splice(index, 1);
  //   this.setState({
  //     features,
  //   });

  //   //url construction
  //   let url = match.url[match.url.length - 1] !== "/" ? match.url : match.url;
  //   console.log(url, "url");
  //   let query = "";
  //   if (features.length > 0) {
  //     let stringArr = features.map((ele, i) =>
  //       i == 0 ? `?feature=${ele}` : `&feature=${ele}`
  //     );
  //     url += stringArr.join("");
  //     url += minPrice != 100 ? `&minPrice=${minPrice}` : "";
  //     url += perPage > 10 ? `&perPage=${perPage}` : "";
  //     url += page > 1 ? `&page=${page}` : "";
  //     url +=
  //       sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
  //   } else {
  //     query += minPrice != 100 ? `&minPrice=${minPrice}` : "";
  //     query += perPage > 10 ? `&perPage=${perPage}` : "";
  //     query += page > 1 ? `&page=${page}` : "";
  //     query +=
  //       sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
  //   }
  //   url += query.length > 0 ? "?" + query.slice(1) : "";
  //   history.push(url);
  //   fetchCatalogRequest(url);
  // };

  // handlePriceChange = (e) => {
  //   const { features, minPrice, perPage, page, sort } = this.state;
  //   const { location, history, match, fetchCatalogRequest } = this.props;

  //   this.setState({
  //     minPrice: e.target.valueAsNumber,
  //   });

  //   let url = match.url[match.url.length - 1] !== "/" ? match.url : match.url;
  //   let query = "";
  //   if (features.length > 0) {
  //     let stringArr = features.map((ele, i) =>
  //       i == 0 ? `?feature=${ele}` : `&feature=${ele}`
  //     );
  //     url += stringArr.join("");
  //     url +=
  //       e.target.valueAsNumber != 100
  //         ? `&minPrice=${e.target.valueAsNumber}`
  //         : "";
  //     url += perPage > 10 ? `&perPage=${perPage}` : "";
  //     url += page > 1 ? `&page=${page}` : "";
  //     url +=
  //       sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
  //   } else {
  //     query +=
  //       e.target.valueAsNumber != 100
  //         ? `&minPrice=${e.target.valueAsNumber}`
  //         : "";
  //     query += perPage > 10 ? `&perPage=${perPage}` : "";
  //     query += page > 1 ? `&page=${page}` : "";
  //     query +=
  //       sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
  //   }
  //   url += query.length > 0 ? "?" + query.slice(1) : "";
  //   history.push(url);
  //   fetchCatalogRequest(url);
  // };

  // handlePerPageChange = (e) => {
  //   const { features, minPrice, perPage, page, sort } = this.state;
  //   const { location, history, match, fetchCatalogRequest } = this.props;

  //   this.setState({
  //     perPage: e.target.id,
  //   });
  //   let url = match.url[match.url.length - 1] !== "/" ? match.url : match.url;
  //   let query = "";
  //   if (features.length > 0) {
  //     let stringArr = features.map((ele, i) =>
  //       i == 0 ? `?feature=${ele}` : `&feature=${ele}`
  //     );
  //     url += stringArr.join("");
  //     url += minPrice != 100 ? `&minPrice=${minPrice}` : "";
  //     url += e.target.id > 10 ? `&perPage=${e.target.id}` : "";
  //     url += page > 1 ? `&page=${page}` : "";
  //     url +=
  //       sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
  //   } else {
  //     query += minPrice != 100 ? `&minPrice=${minPrice}` : "";
  //     query += e.target.id > 10 ? `&perPage=${e.target.id}` : "";
  //     query += page > 1 ? `&page=${page}` : "";
  //     query +=
  //       sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
  //   }
  //   url += query.length > 0 ? "?" + query.slice(1) : "";
  //   history.push(url);
  //   fetchCatalogRequest(url);
  // };

  // handleSortChange = (e) => {
  //   const { features, minPrice, perPage, page, sort } = this.state;
  //   const { location, history, match, fetchCatalogRequest } = this.props;

  //   this.setState({
  //     sort: e.target.value,
  //   });
  //   let url = match.url[match.url.length - 1] !== "/" ? match.url : match.url;
  //   let query = "";
  //   if (features.length > 0) {
  //     let stringArr = features.map((ele, i) =>
  //       i == 0 ? `?feature=${ele}` : `&feature=${ele}`
  //     );
  //     url += stringArr.join("");
  //     url += minPrice != 100 ? `&minPrice=${minPrice}` : "";
  //     url += perPage > 10 ? `&perPage=${perPage}` : "";
  //     url += page > 1 ? `&page=${page}` : "";
  //     url +=
  //       e.target.value == "Recommended" || e.target.value == "recommended"
  //         ? ""
  //         : `&sort=${e.target.value}`;
  //   } else {
  //     query += minPrice != 100 ? `&minPrice=${minPrice}` : "";
  //     query += perPage > 10 ? `&perPage=${perPage}` : "";
  //     query += page > 1 ? `&page=${page}` : "";
  //     query +=
  //       e.target.value == "Recommended" || e.target.value == "recommended"
  //         ? ""
  //         : `&sort=${e.target.value}`;
  //   }
  //   url += query.length > 0 ? "?" + query.slice(1) : "";
  //   history.push(url);
  //   fetchCatalogRequest(url);
  // };

  // handlePageChange = (e) => {
  //   e.preventDefault();
  //   const { features, minPrice, perPage, page, sort } = this.state;
  //   const { location, history, match, fetchCatalogRequest } = this.props;

  //   this.setState({
  //     page: e.target.id,
  //   });
  //   let url = match.url[match.url.length - 1] !== "/" ? match.url : match.url;
  //   let query = "";
  //   if (features.length > 0) {
  //     let stringArr = features.map((ele, i) =>
  //       i == 0 ? `?feature=${ele}` : `&feature=${ele}`
  //     );
  //     url += stringArr.join("");
  //     url += minPrice != 100 ? `&minPrice=${minPrice}` : "";
  //     url += perPage > 10 ? `&perPage=${perPage}` : "";
  //     url += e.target.id > 1 ? `&page=${e.target.id}` : "";
  //     url +=
  //       sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
  //   } else {
  //     query += minPrice != 100 ? `&minPrice=${minPrice}` : "";
  //     query += perPage > 10 ? `&perPage=${perPage}` : "";
  //     query += e.target.id > 1 ? `&page=${e.target.id}` : "";
  //     query +=
  //       sort == "Recommended" || sort == "recommended" ? "" : `&sort=${sort}`;
  //   }
  //   url += query.length > 0 ? "?" + query.slice(1) : "";
  //   history.push(url);
  //   fetchCatalogRequest(url);
  // };

  render() {
    // const { fetchCatalogListSuccess, fetchCatalogRequest } = this.props;
    return (
      <div>
        <Filter
          {...this.props}
          // handleOnChange={this.handleOnChange}
          // handlePriceChange={this.handlePriceChange}
          // handlePerPageChange={this.handlePerPageChange}
          // handleSortChange={this.handleSortChange}
        />
        <Pagination
          {...this.props}
          // handlePageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCatalogRequest: (payload) => dispatch(fetchCatalogRequest(payload)),
  fetchCatalogListSuccess: (payload) =>
    dispatch(fetchCatalogListSuccess(payload)),
});
export default connect(null, mapDispatchToProps)(Catalog);

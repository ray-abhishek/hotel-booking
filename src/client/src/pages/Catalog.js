import React from "react";
import Filter from "../components/catalog/Filter";
import Pagination from "../components/catalog/Pagination";
import Location from "../components/hotelDisplay/aboutHotel/Location";
import FilterModal from "../components/catalog/FilterModal";
import SearchModal from "../components/catalog/SearchModal";
import MapModal from "../components/catalog/MapModal";

//import Gallery from "../components/catalog/Gallery";

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MapModal {...this.props} />
        <FilterModal {...this.props} />
        <SearchModal {...this.props} />
        <div className="d-block d-md-none text-center">
          <span
            className="btn btn-danger"
            onClick={this.toggleSearch}
            style={{ margin: "10px 6px", padding: "6px 20%" }}
            data-toggle="modal"
            data-target="#searchModal"
          >
            Search
          </span>
          <span
            className="btn btn-dark "
            style={{ margin: "10px 6px", padding: "6px 10%" }}
            data-toggle="modal"
            data-target="#filterModal"
          >
            filter
          </span>
        </div>

        <div>
          <Filter {...this.props} />
          <Pagination {...this.props} />
        </div>
      </div>
    );
  }
}

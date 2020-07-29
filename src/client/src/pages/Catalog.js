import React from "react";
import Filter from "../components/catalog/Filter";
import Pagination from "../components/catalog/Pagination";
// import SearchBar from "../components/common/SearchBar";
//import Gallery from "../components/catalog/Gallery";

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <SearchBar {...this.props} /> */}
        <Filter {...this.props} />
        <Pagination {...this.props} />
      </div>
    );
  }
}

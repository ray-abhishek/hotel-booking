import React from "react";
import Filter from "../components/catalog/Filter";
import Pagination from "../components/catalog/Pagination";

//import Gallery from "../components/catalog/Gallery";

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Filter {...this.props} />
        <Pagination {...this.props} />
      </div>
    );
  }
}

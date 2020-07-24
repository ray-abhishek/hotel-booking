import React from "react";
import Filter from "../components/catalog/Filter";
import Sort from "../components/catalog/Sort";
import Pagination from "../components/catalog/Pagination";

function Catalog(props) {
  return (
    <div>
      <Filter {...props} />
      <Pagination {...props} />
    </div>
  );
}

export default Catalog;

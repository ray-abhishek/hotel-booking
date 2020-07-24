import React, { Component } from "react";
import style from "./Sort.module.css";

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  handlePageChange = (e) => {
    e.preventDefault();
    const { location, history, match } = this.props;
    this.setState({
      page: e.target.id,
    });

    history.push(`/search/${e.target.id}`);
  };

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
              onClick={(e) => {
                this.setState({
                  page: page != 3 ? Number(page) + 1 : page,
                });
                this.props.history.push(`/search/${page}`);
              }}
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

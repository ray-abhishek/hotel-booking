import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Login from "../admin/Login";
import Signup from "../admin/Signup";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }

  render() {
    const { handleClick } = this;
    return (
      <>
        <nav className="navbar navbar-light bg-white">
            {/* Home Link */}
          <Link to="/">
            {" "}
            <img src="./logo.svg" width="155px" height="30px" />
          </Link>
          <div className="d-flex flex-row bd-highlight">
            <Link
              className="p-2 bd-highlight p-3 text-decoration-none"
              to="destination"
            >
              Destinations <span className={style.line}>|</span>
            </Link>
            <Link
              className="p-2 bd-highlight p-3 text-decoration-none"
              to="wishlist"
            >
              Wishlist <span className={style.line}>|</span>
            </Link>
            <Link
              className="p-2 bd-highlight p-3 text-decoration-none"
              to="get-in-touch"
            >
              Get in Touch <span className={style.line}>|</span>
            </Link>
            <Link
              className="p-2 bd-highlight p-3 text-decoration-none"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Log in <span className={style.line}></span>
            </Link>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Account Login
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <nav>
                      <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          class="nav-item nav-link active"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="#nav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          Login
                        </a>
                        <a
                          class="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="#nav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Signup
                        </a>
                      </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        {" "}
                        <Login />{" "}
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        {" "}
                        <Signup />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link className="p-2 bd-highlight p-2">
              <button className="btn btn-outline-secondary">
                List your Home
              </button>
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

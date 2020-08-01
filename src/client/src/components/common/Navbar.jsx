import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Login from "../admin/Login";
import Signup from "../admin/Signup";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/auth/action";
import Destination from "../landingPage/Destination";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
    };
  }

  toggleForm = () => {
    this.setState({
      isToggle: !this.state.isToggle,
    });
  };

  handleClick = () => {
    console.log("loagout");
    alert("logout");
  };

  // componentDidMount(){
  //  let userData = JSON.parse(localStorage.getItem('userData'))
  //  console.log('userdata', userData)
  // }

  render() {
    const { handleClick, toggleForm } = this;
    const { loginSuccess, isSignup, isLogin, logoutUser } = this.props;
    const { isToggle } = this.state;

    console.log(loginSuccess);
    return (
      <>
        <Destination />
        <nav className="navbar navbar-light bg-white">
          {/* Home Link */}
          <Link to="/">
            {" "}
            <img
              src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/2e7c492ee08ad1d2fc5320b0f01e2e25.svg"
              width="155px"
              height="30px"
            />
          </Link>
          <div className="d-flex flex-row bd-highlight">
            <Link
              className="p-2 bd-highlight p-3 text-decoration-none text-dark"
              // to="destination"
              data-toggle="modal"
              data-target="#destination"
            >
              Destinations <span className={style.line}>|</span>
            </Link>
            <Link
              className="p-2 bd-highlight p-3 text-decoration-none text-dark"
              to="/wishlist"
            >
              Wishlist <span className={style.line}>|</span>
            </Link>
            <Link
              className="p-2 bd-highlight p-3 text-decoration-none text-dark"
              to="/get-in-touch"
            >
              Get in Touch <span className={style.line}>|</span>
            </Link>
            {/* Login and Logout toggling */}

            {/* // loginSuccess.data && loginSuccess.data.status === "success"  */}
            {isLogin &&
            loginSuccess.data &&
            loginSuccess.data.status === "success" ? (
              <nav class="navbar navbar-expand-lg">
                {/* <div class="collapse navbar-collapse" id="navbarNavDropdown"> */}
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a
                      class=" bd-highlight text-decoration-none text-dark nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Welcome {loginSuccess.data && loginSuccess.data.name}
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a class="dropdown-item" href="https://www.google.com/">
                        Booking History
                      </a>
                      <a class="dropdown-item" href="https://www.google.com/">
                        Change Password
                      </a>
                      <a
                        class="dropdown-item"
                        onClick={() =>
                          logoutUser(
                            loginSuccess.data && loginSuccess.data.Authorization
                          )
                        }
                      >
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
                {/* </div> */}
              </nav>
            ) : (
              <Link
                className="p-2 bd-highlight p-3 text-decoration-none text-dark"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Log in <span className={style.line}></span>
              </Link>
            )}

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
                  <div className="mt-3 text-center mr-4">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <img
                        src="https://d344sq77q05r9.cloudfront.net/prod-20-07-27-13:03/assets/2c409d2237e810d3a092cbba7a341934.svg"
                        alt=""
                      />
                    </button>

                    {isLogin &&
                    loginSuccess.data &&
                    loginSuccess.data.status === "success" ? (
                      <h3 className="mt-4">Login Successfully</h3>
                    ) : (
                      <div>
                        {" "}
                        {!isToggle ? (
                          <h3
                            class="modal-title text-center mb-3"
                            style={{
                              fontFamily: "Tiempos Text serif",
                              fontSize: 26,
                            }}
                            id="exampleModalLabel"
                          >
                            Login
                          </h3>
                        ) : (
                          <h3
                            class="modal-title text-center mb-3"
                            style={{
                              fontFamily: "Tiempos Text serif",
                              fontSize: 26,
                            }}
                            id="exampleModalLabel"
                          >
                            Signup
                          </h3>
                        )}
                      </div>
                    )}
                  </div>
                  <div class="modal-body">
                    {isLogin &&
                    loginSuccess.data &&
                    loginSuccess.data.status === "success" ? (
                      <div className="p-2 pl-5 pr-5">
                        <p className="text-center">
                          Welcome to onefinestay. Stay in dinstinctive private
                          homes and villas - with an unprecedented level of
                          service.
                        </p>
                        <div className="text-center pb-3 mt-4">
                          <button
                            className="btn btn-danger btn-block"
                            data-dismiss="modal"
                          >
                            OK
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        {!isToggle ? (
                          <>
                            <p className="text-center">
                              New to onefinestay?{" "}
                              <Link
                                onClick={toggleForm}
                                className="text-decoration-none"
                              >
                                Signup
                              </Link>
                            </p>
                            {isSignup == true ? <Signup /> : <Login />}
                          </>
                        ) : (
                          <>
                            <p className="text-center">
                              If you already have an account,{" "}
                              <Link
                                onClick={toggleForm}
                                className="text-decoration-none"
                              >
                                Login
                              </Link>
                              {isSignup == true ? <Login /> : <Signup />}
                            </p>
                          </>
                        )}{" "}
                      </div>
                    )}
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

const mapStateToProps = (state) => ({
  loginSuccess: state.authReducer.loginData,
  isSignup: state.authReducer.isSignup,
  isLogin: state.authReducer.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: (authStr) => dispatch(logoutUser(authStr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

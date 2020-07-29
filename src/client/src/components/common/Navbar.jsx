import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Login from "../admin/Login";
import Signup from "../admin/Signup";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/auth/action";

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
    ////console.log("loagout");
    alert("logout");
  };

  render() {
    const { handleClick, toggleForm } = this;
    const { loginSuccess, isSignup, isLogin, logoutUser } = this.props;
    const { isToggle } = this.state;

    ////console.log(loginSuccess);
    return (
      <>
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
              to="destination"
            >
              Destinations <span className={style.line}>|</span>
            </Link>
            <Link
              className="p-2 bd-highlight p-3 text-decoration-none text-dark"
              to="wishlist"
            >
              Wishlist <span className={style.line}>|</span>
            </Link>
            <Link
              className="p-2 bd-highlight p-3 text-decoration-none text-dark"
              to="get-in-touch"
            >
              Get in Touch <span className={style.line}>|</span>
            </Link>
            {/* Login and Logout toggling */}
            {
              // loginSuccess.data && loginSuccess.data.status === "success"
              isLogin === true ? (
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
                        Welcome {loginSuccess.data.name}
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
                              loginSuccess.data &&
                                loginSuccess.data.Authorization
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
              )
            }

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
                    {isToggle === false ? (
                      <>
                        <p className="text-center">
                          New to onefinestay?{" "}
                          <Link onClick={toggleForm}>Signup</Link>
                        </p>
                        {isSignup == true ? <Signup /> : <Login />}
                      </>
                    ) : (
                      <>
                        <p className="text-center">
                          If you already have an account,{" "}
                          <Link onClick={toggleForm}>Login</Link>
                          {isSignup == true ? <Login /> : <Signup />}
                        </p>
                      </>
                    )}
                    {/* {isSignup===true?
                    <>
                     <p className="text-center">New to onefinestay? <Link onClick={toggleForm}>Signup</Link></p><Login/></>
                    :
                    <>                  
                    <p  className="text-center">If you already have an account, <Link onClick={toggleForm}>Login</Link> 
                    <Signup />
                    </p></>
                    } */}
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

import React from "react";
import { connect } from "react-redux";
import { userLogin, googleLogin } from "../../redux/auth/action";
import GoogleLogin from "react-google-login";
import style from "./Login.module.css";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      googleResponse: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Google Response

  responseGoogle = (response) => {
    this.setState({
      googleResponse: response.profileObj,
    });
    // console.log(response.profileObj);
    this.props.googleLoginData(response.profileObj);
  };
  render() {
    const { handleChange } = this;
    const { password, email } = this.state;
    const { userLogin, loginData, googleLoginData, isLogin } = this.props;
    console.log(loginData);
  
    return (
      <div className={style.card}>
        <div className="form-row mt-1">
          <div className="form-group col-12">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fas fa-user-circle"></i>
              </span>

              <input
                className="form-control"
                type="text"
                value={email}
                name="email"
                onChange={handleChange}
                placeholder="enter email" required
              />
            </div>{" "}
          </div>

          <div className="form-group col-12">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fas fa-unlock-alt"></i>
              </span>

              <input
                className="form-control"
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
                placeholder=" enter your password" required
              />
            </div>
          </div>
          <br />
        </div>

        {/* Login Button and message display of success and failure */}
        <div className="text-center pb-3">
          <button
            className="btn btn-primary"
            data-dismiss={isLogin === true ? "modal" : undefined}
            onClick={() => userLogin(this.state)}
          >
            {isLogin ? "Ok" : "Login"}
          </button>
        </div>
        {/* {loginData.data && loginData.data.status === "failure"
          ? loginData.data && loginData.data.message
          : loginData.data && loginData.data.message} */}
        <hr />

        {/* Google login Logic */}
        <button className="btn btn-outline-light" data-dismiss="modal">
          <GoogleLogin
            clientId="659753718488-eo6dlvve5j2c5euta6ji0iovpapfj6bu.apps.googleusercontent.com"
            buttonText="Google"
            data-dismiss="modal"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginData: state.authReducer.loginData,
  isLogin: state.authReducer.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (query) => dispatch(userLogin(query)),
  googleLoginData: (res) => dispatch(googleLogin(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React from "react";
import { connect } from "react-redux";
import { userRegistration, googleLogin } from "../../redux/auth/action";
import GoogleLogin from "react-google-login";
import style from "./Login.module.css";
import { Redirect } from "react-router-dom";
import Login from "./Login";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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

  // Google Auth response 
  responseGoogle = (response) => {
    this.setState({
      googleResponse: response.profileObj,
    });
    console.log("sign up google res", response.profileObj);
    this.props.googleLoginData(response.profileObj);
  };

  render() {
    const { handleChange } = this;
    const { name, email, password } = this.state;
    const { userRegistration, handleData, isSignup } = this.props;
    const { data } = this.props.data;
    console.log(data);

    return (
      <div className={style.card}>
        <br />
        <div className="form-row mt-1">
          <div className="form-group col-12">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fas fa-user-circle"></i>
              </span>
              <input
                className="form-control"
                style={{ marginBottom: 5 }}
                type="text"
                value={name}
                name="name"
                onChange={handleChange}
                placeholder="enter your name" required
              />
            </div>
          </div>
          <div className="form-group col-12">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fas fa-envelope"></i>
              </span>
              <input
                className="form-control"
                style={{ marginBottom: 5 }}
                type="email"
                value={email}
                name="email"
                onChange={handleChange}
                placeholder="enter your email" required
              />
            </div>
          </div>
          <div className="form-group col-12">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fas fa-unlock-alt"></i>
              </span>
              <input
                className="form-control"
                style={{ marginBottom: 5 }}
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
                placeholder="enter your password" required
              />
            </div>
          </div>
        </div>
      {/* // signup button */}
        <div className="text-center pb-3">
          <button
            className="btn btn-primary"
            onClick={() => userRegistration(this.state)}
          >
            Sign UP
          </button>
          {/* {data && data.status==="failure"? data && data.message:
         data && data.message} */}
        </div>
        <hr />
        <div>

          {/* Google Login  */}

          <GoogleLogin
            clientId="659753718488-eo6dlvve5j2c5euta6ji0iovpapfj6bu.apps.googleusercontent.com"
            buttonText="Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.authReducer.signupData,
  isSignup: state.authReducer.isSignup,
});

const mapDispatchToProps = (dispatch) => ({
  userRegistration: (query) => dispatch(userRegistration(query)),
  googleLoginData: (res) => dispatch(googleLogin(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

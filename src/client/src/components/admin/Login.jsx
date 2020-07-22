import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../../redux/auth/action";
import GoogleLogin from "react-google-login";
import style from "./Login.module.css";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };
  render() {
    const { handleChange } = this;
    const { password, username } = this.state;
    const { userLogin, state } = this.props;

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
                value={username}
                name="username"
                onChange={handleChange}
                placeholder="enter username"
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
                placeholder=" enter your password"
              />
            </div>
          </div>
          <br />
        </div>
        <div className="text-center pb-3">
          <button
            className="btn btn-primary"
            onClick={() => userLogin(this.state)}
          >
            Login
          </button>
        </div>

        <hr />
        <div>
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
  state: state.loginData,
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (query) => dispatch(userLogin(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

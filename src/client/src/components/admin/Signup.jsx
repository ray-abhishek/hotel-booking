import React from "react";
import { connect } from "react-redux";
import { userRegistration } from "../../redux/auth/action";
import GoogleLogin from "react-google-login";
import style from "./Login.module.css";
import { Redirect } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      username: "",
      mobile: "",
      description: "",
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
    const { name, email, password, username, mobile, description } = this.state;
    const { userRegistration, handleData } = this.props;
    const { data } = this.props.data;
    // if(data && data.error === false){
    //         handleData()
    //       return  <Redirect to="/login"/>
    //     }
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
                placeholder="enter your name"
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
                placeholder="enter your email"
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
                placeholder="enter your password"
              />
            </div>
          </div>

          <div className="form-group col-12">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fas fa-user-circle"></i>
              </span>
              <input
                className="form-control"
                style={{ marginBottom: 5 }}
                type="text"
                value={username}
                name="username"
                onChange={handleChange}
                placeholder="enter your username"
              />
            </div>
          </div>
          <div className="form-group col-12">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fas fa-mobile-alt"></i>
              </span>
              <input
                className="form-control"
                style={{ marginBottom: 5 }}
                type="number"
                value={mobile}
                name="mobile"
                onChange={handleChange}
                placeholder="enter your mobile no"
              />
            </div>
          </div>
          <div className="form-group col-12">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="far fa-file-alt"></i>
              </span>
              <input
                className="form-control"
                style={{ marginBottom: 5 }}
                type="text"
                value={description}
                name="description"
                onChange={handleChange}
                placeholder="enter your description"
              />
            </div>
          </div>
        </div>

        <div className="text-center pb-3">
          <button
            className="btn btn-primary"
            onClick={() => userRegistration(this.state)}
          >
            Sign UP
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
  data: state.authReducer.signupData,
});

const mapDispatchToProps = (dispatch) => ({
  userRegistration: (query) => dispatch(userRegistration(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

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
      hidden: true 
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggleShow=()=> {
    this.setState({ hidden: !this.state.hidden });
  }

  // Google Auth response 

  responseGoogle = (response) => {
    this.setState({
      googleResponse: response.profileObj,
    });
    ////console.log("sign up google res", response.profileObj);
    this.props.googleLoginData(response.profileObj);
  };

  render() {
    const { handleChange, toggleShow } = this;
    const { name, email, password, hidden } = this.state;
    const { userRegistration, handleData, isSignup } = this.props;

    // const { data } = this.props.data;
    // console.log(data);


    return (
      <div className={style.card}>
        <br />
        <div className="form-row mt-1">
          <div className="form-group col-12">
            <div class="input-group-prepend">
             
              <input
                className="form-control"
                style={{ marginBottom: 5 }}
                type="text"
                value={name}
                name="name"
                onChange={handleChange}
                placeholder="enter your name"
                required
              />
            </div>
          </div>
          <div className="form-group col-12">
            <div class="input-group-prepend">
              
              <input
                className="form-control"
                style={{ marginBottom: 5 }}
                type="email"
                value={email}
                name="email"
                onChange={handleChange}
                placeholder="enter your email"
                required
              />
            </div>
          </div>
          <div className="form-group col-12">
            <div class="input-group-prepend">
              
              <input
                className="form-control"
                style={{ marginBottom: 5 }}
                type={this.state.hidden ? "password" : "text"}
                value={password}
                name="password"
                onChange={handleChange}
                placeholder="enter your password"
                required
              />
              {hidden===false?  
                <i class="far fa-eye"  onClick={toggleShow} style={eye}></i>
                : 
                <i class="far fa-eye-slash" onClick={toggleShow} style={eye}></i> }
            </div>
          </div>
        </div>
        {/* // signup button */}
        <div className="text-center pb-3">
          <button disabled={(email.length  && password.length) <1}
            className={(email.length && password.length) < 1 ? " btn btn-light btn-block" : "btn btn-danger btn-block"} 
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

const eye={
  marginLeft: -30,
   cursor: "pointer",
   paddingTop: 10
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

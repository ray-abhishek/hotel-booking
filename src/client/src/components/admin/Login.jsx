import React from "react";
import { connect } from "react-redux";
import { userLogin, googleLogin } from "../../redux/auth/action";
import GoogleLogin from "react-google-login";
import style from "./Login.module.css";
import { Redirect, Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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


  // Google Response

  responseGoogle = (response) => {
    this.setState({
      googleResponse: response.profileObj,
    });
    // ////console.log(response.profileObj);
    this.props.googleLoginData(response.profileObj);
  };
  render() {
    const { handleChange,toggleShow } = this;
    const { password, email, hidden  } = this.state;
    const { userLogin, loginData, googleLoginData, isLogin } = this.props;

    console.log(hidden);

    return (
      <div className={style.card}>
        <div className="form-row mt-1">
          <div className="form-group col-12">
            <div class="input-group-prepend">

              <input
                className="form-control"
                type="text"
                value={email}
                name="email"
                onChange={handleChange}
                placeholder="enter email"
                required
              />
            </div>{" "}
          </div>

          <div className="form-group col-12" >
            <div class="input-group-prepend no-border">

              <input
                className="form-control"
                type={this.state.hidden ? "password" : "text"}
                value={password}
                name="password"
                onChange={handleChange}

                placeholder=" enter your password" required
              /> 
              {hidden===false?  
                <i class="far fa-eye"  onClick={toggleShow} style={eye}></i>
                : 
                <i class="far fa-eye-slash" onClick={toggleShow} style={eye}></i> }
       

            </div>
          </div>
          <br />
        </div>

        {/* Login Button and message display of success and failure */}
        
        <div className="text-center pb-3">
          <button disabled={(email.length  && password.length) <1}
            className=  {(email.length && password.length) < 1 ? " btn btn-light btn-block" : "btn btn-danger btn-block"} 
            data-dismiss={isLogin === true ? "modal" : undefined}
            onClick={() => userLogin(this.state)}
          >
            {isLogin ?   "Ok" : "Login"}
          </button>
        </div>

        {/* Google login Logic */}
        <button className="btn btn-outline-light mb-3" data-dismiss="modal">
          <GoogleLogin
            clientId="659753718488-eo6dlvve5j2c5euta6ji0iovpapfj6bu.apps.googleusercontent.com"
            buttonText="Google"
            data-dismiss="modal"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </button><br/>
        <Link>Forgot Password?</Link>
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
  loginData: state.authReducer.loginData,
  isLogin: state.authReducer.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (query) => dispatch(userLogin(query)),
  googleLoginData: (res) => dispatch(googleLogin(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

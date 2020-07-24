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
      googleResponse:''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // modelClose=()=>{
  //   if(this.props.loginData.data )
  // data-dismiss="modal"
  // }
 
  responseGoogle = (response) => {
    // console.log(response);
    this.setState({
       googleResponse: response.profileObj
    })
    console.log(response.profileObj);
    this.props.googleLoginData(response.profileObj)
  };
  render() {
    const { handleChange } = this;
    const { password, email } = this.state;
    const { userLogin, loginData, googleLoginData } = this.props;
    console.log(loginData)
    // if(loginData.data && loginData.data.error===false){
    //   return <Redirect to ="/"/>
    // }
    console.log(this.state.googleResponse)
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
                placeholder="enter email"
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
            className="btn btn-primary" data-dismiss="modal"
            onClick={() => userLogin(this.state)}
          >
            Login
          </button>
         
        </div>

        <hr />
        <button className="btn btn-outline-light" data-dismiss="modal">
          <GoogleLogin
            clientId="659753718488-eo6dlvve5j2c5euta6ji0iovpapfj6bu.apps.googleusercontent.com"
            buttonText="Google" data-dismiss="modal"
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
  loginData: state.authReducer.loginData
  
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (query) => dispatch(userLogin(query)),
  googleLoginData: (res)=>dispatch(googleLogin(res))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

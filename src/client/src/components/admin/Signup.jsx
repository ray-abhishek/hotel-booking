import React from "react";
import { connect } from "react-redux";
import { userRegistration, googleLogin } from "../../redux/auth/action";
import GoogleLogin from "react-google-login";
import style from "./Login.module.css";
import { Redirect } from "react-router-dom";
import Login from "./Login";


function ValidationMessage(props) {
  if (!props.valid) {
    return(
      <div className='error-msg text-danger'>{props.message}</div>
    )
  }
  return null;
}



class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "", usernameValid: false,
      email: "", emailValid: false,
      password: "",  passwordValid: false,
      googleResponse: "",
      errorMsg: {},
      hidden: true ,
      formValid: false,
    };
  }

  updateName = (name) => {
    this.setState({name}, this.validateUsername)
  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   }, this.validateUsername, this.validateEmail, this.validatePassword);
  // };

  toggleShow=()=> {
    this.setState({ hidden: !this.state.hidden });
  }

  validateForm = () => {
    const {usernameValid, emailValid, passwordValid} = this.state;
    this.setState({
      formValid: usernameValid && emailValid && passwordValid
    })
  }

  validateUsername = () => {
    const {name} = this.state;
    let usernameValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (name.length < 3) {
      usernameValid = false;
      errorMsg.name = 'Must be at least 3 characters long'
    }

    this.setState({usernameValid, errorMsg}, this.validateForm)
  }

  updateEmail = (email) => {
    this.setState({email}, this.validateEmail)
  }

  validateEmail = () => {
    const {email} = this.state;
    let emailValid = true;
    let errorMsg = {...this.state.errorMsg}

    // checks for format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      emailValid = false;
      errorMsg.email = 'Invalid email format'
    }

    this.setState({emailValid, errorMsg}, this.validateForm)
  }

  updatePassword = (password) => {
    this.setState({password}, this.validatePassword);
  }

  validatePassword = () => {
    const {password} = this.state;
    let passwordValid = true;
    let errorMsg = {...this.state.errorMsg}

    // must be 6 chars
    // must contain a number
    // must contain a special character

    if (password.length < 6) {
      passwordValid = false;
      errorMsg.password = 'Password must be at least 6 characters long';
    } else if (!/\d/.test(password)){
      passwordValid = false;
      errorMsg.password = 'Password must contain a digit';
    } else if (!/[!@#$%^&*]/.test(password)){
      passwordValid = false;
      errorMsg.password = 'Password must contain special character: !@#$%^&*';
    }

    this.setState({passwordValid, errorMsg}, this.validateForm);
  }


  // Google Auth response 
  responseGoogle = (response) => {
    this.setState({
      googleResponse: response.profileObj,
    });
    console.log("sign up google res", response.profileObj);
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
          < ValidationMessage valid={this.state.usernameValid} message={this.state.errorMsg.name} />
            <div class="input-group-prepend">
              <input
                className="form-control"
                style={{ marginBottom: 5 }}
                type="text"
                value={name}
                name="name"
                onChange={(e)=>this.updateName(e.target.value)}
                placeholder="enter your name" required
              />
            </div>
          </div>
          <div className="form-group col-12">
            < ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
            <div class="input-group-prepend">
              
              <input
                className="form-control"
                style={{ marginBottom: 5 }}
                type="email"
                value={email}
                name="email"
                onChange={(e)=>this.updateEmail(e.target.value)}
                placeholder="enter your email" required
              />
            </div>
          </div>
          <div className="form-group col-12">
            < ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password} />
            <div class="input-group-prepend">
              
              <input
                className="form-control"
                style={{ marginBottom: 5 }}
                type={this.state.hidden ? "password" : "text"}
                value={password}
                name="password"
                onChange={(e) => this.updatePassword(e.target.value)}
                placeholder="enter your password" required
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
          <button disabled={!this.state.formValid}
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

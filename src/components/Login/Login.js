import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from 'firebase';
import { firebaseApp } from '../../services/base';
import './Login.scss';


class LoginTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginActive: true,
      name: "",
      email: "",
      password: "",
      nameValid: true,
      emailValid: true,
      passwordValid: true
    };
  }

  signInfo = () => {
    return  <div className="sign-info-container">
                <h3>Meat is life</h3>
                <button className="change-button" onClick={this.toggleActiveState}>{this.state.loginActive ? 'Sign Up' : 'Sign In'}</button>
                <p>{this.state.loginActive ? 'Do you want to sign up?' : 'Already have an account?'}</p>
            </div>
  }

  signForm = () => {
      return <div className="sign-form-container"> 
                 <div className="social-icons-container">
                     <i className="fa fa-google" onClick={() => this.authSocial("Google")}></i>
                     <i className="fa fa-facebook-f" onClick={() => this.authSocial("Facebook")}></i>
                     <i className="fa fa-twitter" onClick={() => this.authSocial("Twitter")}></i>
                 </div>
                 <form onSubmit={this.authEmail}>
                      {this.state.loginActive ? null :
                      <div className="form-group">
                         <p className="control-label">Please enter your name:</p>
                         <input className="login-input" autoFocus placeholder="Type the name here" type="text" onChange={this.handleNameChange} />
                         <i className="fa fa-check-circle" style={{display: this.state.nameValid ? 'inline-block' : 'none'}}></i>
                         <i className="fa fa-times-circle" style={{display: this.state.nameValid ? 'none' : 'inline-block'}}></i>
                     </div>}
                     <div className="form-group">
                         <p className="control-label">Please enter your email:</p>
                         <input className="login-input" autoFocus={this.state.loginActive} placeholder="Type the e-mail here" type="email" value={this.state.email} onChange={this.handleEmailChange} />
                         <i className="fa fa-check-circle" style={{display: this.state.emailValid ? 'inline-block' : 'none'}}></i>
                         <i className="fa fa-times-circle" style={{display: this.state.emailValid ? 'none' : 'inline-block'}}></i>
                     </div>
                     <div className="form-group">
                         <p className="control-label">Please enter your password:</p>
                         <input className="login-input" placeholder="Type the password here" value={this.state.password} onChange={this.handlePasswordChange} type="password" />
                         <i className="fa fa-check-circle" style={{display: this.state.passwordValid ? 'inline-block' : 'none'}}></i>
                         <i className="fa fa-times-circle" style={{display: this.state.passwordValid ? 'none' : 'inline-block'}}></i>
                     </div>
                     <button className="left-button" type="submit">{this.state.loginActive ? 'Sign In' : 'Sign Up'}</button>
                 </form>
             </div>
  }

  toggleActiveState = () => {
      this.state.loginActive ? this.props.history.push('/signup') : this.props.history.push('/login');
  }

  validateForm = () => {
    return this.checkEmailValidity() && this.checkPasswordValidity();
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
      emailValid: this.checkEmailValidity(event.target.value)
    });
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
      nameValid: this.checkNameValidity(event.target.value)
    });
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
      passwordValid: this.checkPasswordValidity(event.target.value)
    });
  }

  authHandler = (authData) => {
    
    if(this.state.loginActive) {
      this.props.history.push('/account');
    }
    else { //if we register user we set displayName and default picture
      authData.updateProfile({
        displayName: this.state.name,
        photoURL: "https://firebasestorage.googleapis.com/v0/b/meatislifeepam.appspot.com/o/default%2Fprofile.jpg?alt=media&token=d26705f2-7d77-4c1e-b628-9cc1bd1a69e2"
      }).then(function() {
          this.props.history.push('/account');
      }.bind(this)).catch(function(error) {
          console.log(error);
      });
    }
  }

  authSocial = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
        console.log(error);
        })
      .then(this.authHandler)
  }

  authEmail = event => {
    event.preventDefault();
    new firebase
      .auth()[`${this.state.loginActive ? "signIn" : "createUser"}WithEmailAndPassword`](this.state.email, this.state.password)
      .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      })
      .then(this.authHandler);
  }

  checkPasswordValidity(password) {
      return password.length > 5
  }

  checkEmailValidity(email) {
      let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
      return pattern.test(email.toLowerCase()); 
  }

  checkNameValidity(name) {
    let pattern = /[A-Z][a-zA-Z][^#&@<>\"~;$^%{}?]{1,20}$/g;
    return pattern.test(name);
}

  renderCurrentState() {
      if(this.state.loginActive) {
          return (
            <div className="sign-container">
               {this.signInfo()}
               {this.signForm()}
               <div className="or-container">or</div>
            </div>
        );
      } else {
        return (
            <div className="sign-container">
               {this.signForm()}
               {this.signInfo()}
               <div className="or-container">or</div>
            </div>
        );
      }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
        loginActive: nextProps.location.pathname === "/login" ? true : false
    };
  }

  render() {
    return (
        <div className="login-page-body">{this.renderCurrentState()}</div>
    );
  }
}

export default withRouter(LoginTab);
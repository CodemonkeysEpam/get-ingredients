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
      forgetActive: false,
      name: "",
      email: "",
      password: "",
      nameValid: false,
      emailValid: false,
      passwordValid: false
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
                 {this.state.loginActive ?
                  this.state.forgetActive ? 
                    
                    <form onSubmit={this.resetPassword}>
                      <h1>Reset password: </h1>
                      <br/>
                      <div className="form-group">
                          <p className="control-label">Please enter your email:</p>
                          <input className="login-input" autoFocus={this.state.loginActive} placeholder="Type the e-mail here" type="email" value={this.state.email} onChange={this.handleEmailChange} required/>
                          <i className="fa fa-check-circle" style={{display: this.state.emailValid ? 'inline-block' : 'none'}}></i>
                          <i className="fa fa-times-circle" style={{display: this.state.emailValid ? 'none' : 'inline-block'}}></i>
                      </div>
                      <button className="left-button" type="submit">Submit</button>
                      <a href="#" onClick={this.handleForget}>Back</a>
                    </form> 
                    :
                    <form onSubmit={this.authEmail}>
                      <div className="form-group">
                          <p className="control-label">Please enter your email:</p>
                          <input className="login-input" autoFocus={this.state.loginActive} placeholder="Type the e-mail here" type="email" value={this.state.email} onChange={this.handleEmailChange} required/>
                          <i className="fa fa-check-circle" style={{display: this.state.emailValid ? 'inline-block' : 'none'}}></i>
                          <i className="fa fa-times-circle" style={{display: this.state.emailValid ? 'none' : 'inline-block'}}></i>
                      </div>
                      <div className="form-group">
                          <p className="control-label">Please enter your password:</p>
                          <input className="login-input" placeholder="Type the password here" value={this.state.password} onChange={this.handlePasswordChange} type="password" required/>
                          <i className="fa fa-check-circle" style={{display: this.state.passwordValid ? 'inline-block' : 'none'}}></i>
                          <i className="fa fa-times-circle" style={{display: this.state.passwordValid ? 'none' : 'inline-block'}}></i>
                      </div>
                      <button className="left-button" type="submit">Sign In</button>
                      <a href="#" onClick={this.handleForget}>Forgot your password?</a>
                    </form> 
                  : 
                  <form onSubmit={this.authEmail}>
                      <div className="form-group">
                         <p className="control-label">Please enter your name:</p>
                         <input className="login-input" autoFocus placeholder="Type the name here" type="text" onChange={this.handleNameChange} required/>
                         <i className="fa fa-check-circle" style={{display: this.state.nameValid ? 'inline-block' : 'none'}}></i>
                         <i className="fa fa-times-circle" style={{display: this.state.nameValid ? 'none' : 'inline-block'}}></i>
                     </div>
                     <div className="form-group">
                         <p className="control-label">Please enter your email:</p>
                         <input className="login-input" autoFocus={this.state.loginActive} placeholder="Type the e-mail here" type="email" value={this.state.email} onChange={this.handleEmailChange} required/>
                         <i className="fa fa-check-circle" style={{display: this.state.emailValid ? 'inline-block' : 'none'}}></i>
                         <i className="fa fa-times-circle" style={{display: this.state.emailValid ? 'none' : 'inline-block'}}></i>
                     </div>
                     <div className="form-group">
                         <p className="control-label">Please enter your password:</p>
                         <input className="login-input" placeholder="Type the password here" value={this.state.password} onChange={this.handlePasswordChange} type="password" required/>
                         <i className="fa fa-check-circle" style={{display: this.state.passwordValid ? 'inline-block' : 'none'}}></i>
                         <i className="fa fa-times-circle" style={{display: this.state.passwordValid ? 'none' : 'inline-block'}}></i>
                     </div>
                     <button className="left-button" type="submit">Sign Up</button>
                 </form>}
             </div>
  }

  toggleActiveState = () => {
      this.state.loginActive ? this.props.history.push('/signup') : this.props.history.push('/login');
  }


  resetPassword = (event) => {
    event.preventDefault();
    if(this.state.emailValid) {
      firebase.auth().sendPasswordResetEmail(this.state.email).then(function() {
        console.log("email sent");
      }).catch(function(error) {
        console.log(error);
      });
    }
    else {
      console.log("not valid");
    }
    
  }

  handleForget = () => {
    this.setState({
      forgetActive: !this.state.forgetActive
    })
  }

  validateForm = () => {
    return this.state.loginActive ? 
      this.state.emailValid && this.state.passwordValid:
      this.state.emailValid && this.state.passwordValid && this.state.name;
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

  authHandler = (authData, provider) => {
     //if we register user we set displayName and default picture
    if(provider === "email" && !this.state.loginActive) {
      authData.updateProfile({
        displayName: this.state.name,
        photoURL: "https://firebasestorage.googleapis.com/v0/b/meatislifeepam.appspot.com/o/default%2Fprofile.jpg?alt=media&token=031b3b81-bbf8-4d3a-a696-7f418d2ab892"
      }).then(function() {
          this.props.history.push('/account');
      }.bind(this)).catch(function(error) {
          console.log(error);
      });
    } else {
      this.props.history.push('/account');
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
      .then((data) => this.authHandler(data, "social"))
  }

  authEmail = event => {
    event.preventDefault();
    if(this.validateForm()) {
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
      .then((data) => this.authHandler(data, "email"));
    }
    else {
      alert("not valid");
    }
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
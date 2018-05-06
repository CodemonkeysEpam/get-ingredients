import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './styles/Login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginActive: true,
      email: "",
      password: "",
      emailValid: true,
      passwordValid: true
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleEmailChange = () => {
    this.setState({
      email: this.emailInput.value,
      emailValid: this.checkEmailValidity()
    });
  }

  handlePasswordChange = () => {
    this.setState({
      password: this.passwordInput.value,
      passwordValid: this.checkPasswordValidity()
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  checkPasswordValidity() {
      return this.state.password.length > 5
  }

  checkEmailValidity() {
      let pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return pattern.test(this.state.email.toLowerCase()); 
  }

  renderCurrentState() {
      if(this.state.loginActive) {
          return (
            <div className="sign-container">
            
               <div className="sign-info-container">
                   <h3>Meat is life</h3>
                   <button className="change-button" onClick={()=>this.setState({loginActive: false})}>Sign Up</button>
                   <p>Do you want to sign up?</p>
               </div>
               <div className="sign-form-container"> 
                    <div className="social-icons-container">
                        <i className="fa fa-facebook-f"></i>
                        <i className="fa fa-envelope"></i>
                        <i className="fa fa-twitter"></i>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <p className="control-label">Please enter your email:</p>
                            <input className="login-input" autoFocus placeholder="Type the e-mail here" type="email" ref={input => this.emailInput = input} onChange={this.handleEmailChange} />
                            <i className="fa fa-check-circle" style={{display: this.state.emailValid ? 'inline-block' : 'none'}}></i>
                            <i className="fa fa-times-circle" style={{display: this.state.emailValid ? 'none' : 'inline-block'}}></i>
                        </div>
                        <div className="form-group">
                            <p className="control-label">Please enter your password:</p>
                            <input className="login-input" placeholder="Type the password here" ref={input => this.passwordInput = input} onChange={this.handlePasswordChange} type="password" />
                            <i className="fa fa-check-circle" style={{display: this.state.passwordValid ? 'inline-block' : 'none'}}></i>
                            <i className="fa fa-times-circle" style={{display: this.state.passwordValid ? 'none' : 'inline-block'}}></i>
                        </div>
                        <button className="left-button" disabled={!this.validateForm()} type="submit">Sign In</button>
                    </form>
               </div>
               <div className="or-container">or</div>
            </div>
        );
      } else {
        return (
            <div className="sign-container">
            <div className="or-container">or</div>
                <div className="sign-form-container"> 
                    <div className="social-icons-container">
                        <i className="fa fa-facebook-f"></i>
                        <i className="fa fa-envelope"></i>
                        <i className="fa fa-twitter"></i>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <p className="control-label">Please enter your email:</p>
                            <input className="login-input" autoFocus placeholder="Type the e-mail here" type="email" ref={input => this.emailInput = input} onChange={this.handleEmailChange} />
                            <i className="fa fa-check-circle" style={{display: this.state.emailValid ? 'inline-block' : 'none'}}></i>
                            <i className="fa fa-times-circle" style={{display: this.state.emailValid ? 'none' : 'inline-block'}}></i>
                        </div>
                        <div className="form-group">
                            <p className="control-label">Please enter your password:</p>
                            <input className="login-input" placeholder="Type the password here" ref={input => this.passwordInput = input} onChange={this.handlePasswordChange} type="password" />
                            <i className="fa fa-check-circle" style={{display: this.state.passwordValid ? 'inline-block' : 'none'}}></i>
                            <i className="fa fa-times-circle" style={{display: this.state.passwordValid ? 'none' : 'inline-block'}}></i>
                        </div>
                        <button className="left-button" disabled={!this.validateForm()} type="submit">Sign Up</button>
                    </form>
               </div>
               <div className="sign-info-container">
                   <h3>Meat is life</h3>
                   <button className="change-button" onClick={()=>this.setState({loginActive: true})}>Sign In</button>
                   <p>Already have an account?</p>
               </div>
               <div className="or-container">or</div>
            </div>
        );
      }
  }

  render() {
    return (
        <div className="login-page-body">{this.renderCurrentState()}</div>
    );
  }
}
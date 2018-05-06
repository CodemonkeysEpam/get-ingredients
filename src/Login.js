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
                     <i className="fa fa-facebook-f"></i>
                     <i className="fa fa-google"></i>
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
                     <button className="left-button" disabled={!this.validateForm()} type="submit">{this.state.loginActive ? 'Sign In' : 'Sign Up'}</button>
                 </form>
             </div>
  }

  toggleActiveState = () => {
      this.setState({
          loginActive: !this.state.loginActive
      });
  }

  validateForm = () => {
    return this.checkEmailValidity() && this.checkPasswordValidity();
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

  render() {
    return (
        <div className="login-page-body">{this.renderCurrentState()}</div>
    );
  }
}

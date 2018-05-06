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
    return this.checkEmailValidity() > 0 && this.checkPasswordValidity();
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

  toggleState() {
      this.setState({
          loginActive: !this.state.loginActive
      });
  }

  render() {
    return (
        <div className="sign-container">
            <div className="sign-left-container"> 
                <div className="social-icons-container">
                    <i class="fa fa-facebook-f"></i>
                    <i class="fa fa-envelope"></i>
                    <i class="fa fa-twitter"></i>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group" controlId="email" bsSize="large">
                        <p className="control-label">Please enter your email:</p>
                        <input className="login-input" autoFocus type="email" ref={input => this.emailInput = input} onChange={this.handleEmailChange} />
                        <i class="fa fa-check-circle" style={{display: this.state.emailValid ? 'inline-block' : 'none'}}></i>
                        <i class="fa fa-times-circle" style={{display: this.state.emailValid ? 'none' : 'inline-block'}}></i>
                    </div>
                    <div className="form-group" controlId="password" bsSize="large">
                        <p className="control-label">Please enter your password:</p>
                        <input className="login-input" ref={input => this.passwordInput = input} onChange={this.handlePasswordChange} type="password" />
                        <i class="fa fa-check-circle" style={{display: this.state.passwordValid ? 'inline-block' : 'none'}}></i>
                        <i class="fa fa-times-circle" style={{display: this.state.passwordValid ? 'none' : 'inline-block'}}></i>
                    </div>
                    <button className="left-button" block bsSize="large" disabled={!this.validateForm()} type="submit">
                        {(this.state.loginActive) ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>
            </div>
            <div className="sign-right-container">
                <h3>Meat is life</h3>
                <button className="right-button" onClick={()=>this.toggleState()}>
                    {(this.state.loginActive) ? 'Sign Up' : 'Sign In'}
                </button>
                <p>{(this.state.loginActive) ? 'Do you want to sign up?' : 'Already have an account?'}</p>
            </div>
        </div>
    );
  }
}




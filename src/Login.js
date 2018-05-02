import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './styles/Login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginActive: true,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  renderCurrentState() {
      if(this.state.loginActive) {
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
                            <input className="login-input" autoFocus type="email" ref={input => this.emailInput = input} onChange={this.handleChange} />
                        </div>
                        <div className="form-group" controlId="password" bsSize="large">
                            <p className="control-label">Please enter your password:</p>
                            <input className="login-input" ref={input => this.passwordInput = input} onChange={this.handleChange} type="password" />
                        </div>
                        <button className="left-button" block bsSize="large" disabled={!this.validateForm()} type="submit">Sign In</button>
                    </form>
               </div>
               <div className="sign-right-container">
                   <h3>Meat is life</h3>
                   <button className="right-button" onClick={()=>this.setState({loginActive: false})}>Sign Up</button>
                   <p>Do you want to sign up?</p>
               </div>
            </div>
        );
      } else {
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
                            <input className="login-input" autoFocus type="email" ref={input => this.emailInput = input} onChange={this.handleChange} />
                        </div>
                        <div className="form-group" controlId="password" bsSize="large">
                            <p className="control-label">Please enter your password:</p>
                            <input className="login-input" ref={input => this.passwordInput = input} onChange={this.handleChange} type="password" />
                        </div>
                        <button className="left-button" block bsSize="large" disabled={!this.validateForm()} type="submit">Sign Up</button>
                    </form>
               </div>
               <div className="sign-right-container">
                   <h3>Meat is life</h3>
                   <button className="right-button" onClick={()=>this.setState({loginActive: true})}>Sign In</button>
                   <p>Already have an account?</p>
               </div>
            </div>
        );
      }
  }

  render() {
    return (
        <div>{this.renderCurrentState()}</div>
    );
  }
}
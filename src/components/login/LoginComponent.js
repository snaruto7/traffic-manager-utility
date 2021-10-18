import React, { PureComponent } from 'react';
import ClassNames from 'classnames';
import { Input, Button, Checkbox, Badge } from 'appkit-react';
import './login.css';

const MODE_LOGIN = "mode_login";
const MODE_RESET_PASSWORD = "mode_reset_password";
const ERROR_BOTH_EMPTY = "Please provide a GUID and password.";
const ERROR_USERNAME_EMPTY = "Please enter your guid.";
const ERROR_PS_EMPTY = "Please enter a password.";
const ERROR_EMAIL_EMPTY = "Please enter a valid email.";

class Login extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      mode: MODE_LOGIN,
      errorMessage: null,
      passwordInput: "",
      usernameInput: "",
      emailInput: "",
      rememerChecked: false
    }
  }

  static defaultProps = {
    title: "Appication Name",
    info: "Hello. Great to see you again!",
    resetPasswordInfo: "Enter the email address for your account and we'll send you instructions to reset your password.",
    showResetPassword: true
  }


  onLoginClick(){
    const noUseName = !this.state.usernameInput || this.state.usernameInput.length === 0;
    const noPassword = !this.state.passwordInput || this.state.passwordInput.length === 0;
    if(noUseName && noPassword){
      this.setState({
        errorMessage: ERROR_BOTH_EMPTY
      })
    } else if(noUseName){
      this.setState({
        errorMessage: ERROR_USERNAME_EMPTY
      })
    } else if(noPassword){
      this.setState({
        errorMessage: ERROR_PS_EMPTY
      })
    } else {
      //!! let user decide what to do
      const info = {
        remember: this.state.rememerChecked,
        username: this.state.usernameInput,
        password: this.state.passwordInput
      }
    }
  }

  getUpperInfo(){
    return (
      <div className="a-login-upper-info center-align">
        <div className="a-login-logo a-pwc-theme-adapt-logon" />
        <div className="a-login-title a-apply-theme-font-default-white">{this.state.mode === MODE_LOGIN? this.props.title: "Password recovery"} </div>
        {
          this.state.mode === MODE_LOGIN?
          <div className="a-login-info a-apply-theme-font-default-white">{this.props.info} </div> : 
          <div className="a-login-reset-password-info">{this.props.resetPasswordInfo} </div>
        }
        <Badge className="a-login-badge" type="warning">CLIENT LOGIN</Badge>
      </div>
    );
  }

  onRememberClick(e){
    this.setState({
      rememerChecked: e.target.checked
    })
  }

  renderLogin(){
    const errorMessage = this.state.errorMessage;
    const showResetPassword = this.props.showResetPassword;

    const lowButton =  (
    <div className={ClassNames("center-align", {showResetPassword})}>
      <Checkbox
        className="a-login-radio"
        checked={this.state.rememerChecked}
        onChange={this.onRememberClick.bind(this)}>
        Remember me 
      </Checkbox>
      {showResetPassword && 
      <Button isNoStyleButton className="a-login-go-reset a-apply-theme-font-brand-orange" onClick={()=>this.setState({mode: MODE_RESET_PASSWORD, errorMessage: null})}> Forgot password? </Button>}
    </div>);

    return (
      <React.Fragment>
        {this.getUpperInfo()}
        <div className="a-login-middle-part">
          <Input inputBoxSize="lg" key="username" label="PWC GUID" style={{marginBottom: "20px"}}  
                                  onChange={e => this.setState({usernameInput: e, errorMessage: ""})} 
                                  hasError={errorMessage === ERROR_BOTH_EMPTY || errorMessage === ERROR_USERNAME_EMPTY } />
          <Input inputBoxSize="lg" type="password" label="PASSWORD" 
                  onChange={e => this.setState({passwordInput: e, errorMessage: ""})} 
                  hasError={errorMessage === ERROR_BOTH_EMPTY || errorMessage === ERROR_PS_EMPTY } />
          <div className="a-login-error-info"> {errorMessage} </div>
        </div>
        <div className="a-login-same-row padding-top-40">

          {lowButton}
          <Button size="xl" onClick={this.onLoginClick.bind(this)}>LOGIN </Button>
        </div>
      </React.Fragment>
    );
  }

  onResetPasswordClick(){
    const pattern = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(!this.state.emailInput || this.state.emailInput.length === 0){
      this.setState({
        errorMessage: ERROR_EMAIL_EMPTY
      })
    } else if ( !pattern.test(this.state.emailInput) ) {
      this.setState({
        errorMessage: ERROR_EMAIL_EMPTY
      })
    }else{
      //!! let user decide what to do
      const info = {
        email: this.state.emailInput
      }
    }
  }

  renderResetPassowrd(){
    const errorMessage = this.state.errorMessage;

    return (
      <React.Fragment>
        {this.getUpperInfo()}
        <div className="a-login-middle-part padding-top-40" style={{marginBottom: "40px"}} >
          <Input inputBoxSize="lg" key="email" label="YOUR EMAIL" 
                 hasError={errorMessage === ERROR_EMAIL_EMPTY} 
                 onChange={e => this.setState({emailInput: e, errorMessage: ""})} />
          <div className="a-login-error-info" style={{"paddingTop": "0px"}}> {errorMessage} </div>
        </div>
        <div className="center-align">
          <Button size="xl" onClick={this.onResetPasswordClick.bind(this)} style={{width: "100%", "marginBottom": "10px"}}>Reset Passowrd </Button>
          <Button isNoStyleButton className="a-login-reset-cancel a-apply-theme-font-brand-orange" onClick={()=>this.setState({mode: MODE_LOGIN, errorMessage: ""})}> Cancel </Button>
        </div>
      </React.Fragment>
    );
  }

  render(){
    let content;
    const {className, style} = this.props;

    if(this.state.mode === MODE_LOGIN){
      content = this.renderLogin();
    }else{
      content = this.renderResetPassowrd();
    }

    return (<div className={ClassNames("a-login-wrapper a-increase-child-color-level-by-1", className)} style={style}> {content} </div>)
  }
}

export default Login;
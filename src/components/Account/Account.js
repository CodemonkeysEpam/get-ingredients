import React from 'react';
import { withRouter } from "react-router";
import MyOrders from "./MyOrders/MyOrders";
import Partners from "./Partners/Partners";
import Admin from "./Admin/Admin"
import base from '../../services/base';
import firebase from "firebase";
import "./Account.scss";
import { NavLink } from 'react-router-dom';

class Account extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          currentTab: 'Orders',
          user: firebase.auth().currentUser,
          isEditName: false,
          isAdmin: {},
          isLoading: true
      }
  }

  componentDidMount() {
    this.refAdmin = base.bindToState(`users/admins/${this.state.user.uid}`, {
        context: this,
        state: 'isAdmin',
        then() {
            this.setState({isLoading: false})
        }
      });
  }
  componentWillUnmount() {
    base.removeBinding(this.refAdmin);
}

displayTab () {
    if(this.state.currentTab === "MyOrders") {
        return <MyOrders uid={this.state.user.uid}/>
    } else if (this.state.currentTab === "Partners") { 
        return <Partners uid={this.state.user.uid}/>
    }
}

getPhotoURL(defaultURL) {
    if(defaultURL !== null) {
        if(defaultURL.includes("facebook")){
            return `${defaultURL}?height=400`
        } else if (defaultURL.includes("twimg")) {
            return defaultURL.replace("normal", "400x400");
        }
        else {
            return defaultURL
        }
    }
}

getFormattedTime = () =>{
    var today = new Date();
    var Y = today.getFullYear();
    var M = today.getMonth() + 1;
    var D = today.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    return Y + "-" + M + "-" + D + "-" + h + "-" + m + "-" + s;
}


changeImage = (event) => {
    const file = event.target.files[0];
    var type = file.name.split('.').pop();
    var filename = `logo-${this.getFormattedTime()}.${type}`;

    firebase.storage().ref('/users').child(this.state.user.uid)
    .child(filename)
    .put(file, {contentType: file.type})
    .then(snapshot => {
        this.state.user.updateProfile({
            photoURL: snapshot.downloadURL
          }).then(function() {
              this.forceUpdate();
          }.bind(this)).catch(function(error) {
              console.log(error);
          });
    })
}

changeDispayName = () => {
    this.state.user.updateProfile({
        displayName: this.displayNameInput.value
      }).then(function() {
        //   this.forceUpdate();
          this.setState({
            isEditName: false
        })

      }.bind(this)).catch(function(error) {
          console.log(error);
      });
}

showEditName = () => {
    this.setState({
        isEditName: true
    })
}

static getDerivedStateFromProps(nextProps, prevState) {
    var currentTab;
    if(nextProps.location.pathname.includes("/account/orders")) {
        currentTab = "MyOrders"
    }
    else if(nextProps.location.pathname.includes("/account/partners")) {
        currentTab = "Partners"
    }
    else {
        currentTab = "Orders"
    }
    return {
        currentTab
    };
}

render () {
    return (
        <div className="main-section">
        {this.state.isLoading ? <div>Loading</div> :
            this.state.isAdmin === true ? 
            <Admin />
            : 
            <React.Fragment>
                <div className="page-heading">Account</div>
                <div className="container">
                    <div className="account-body">
                        <div className="left-sidebar">
                        <div className="account-info">
                            <div className="logo">
                                <img src={this.getPhotoURL(this.state.user.photoURL)} alt="Profile" />
                                <label htmlFor="file-input">
                                    <div className="change-button"><span>Change photo</span></div>
                                </label>
                                <input id="file-input" type="file" onChange={this.changeImage} accept="image/*"/>
                            </div>
                            <div className="displayName">
                                {this.state.isEditName ?
                                    <input type="text" autoFocus ref={input => this.displayNameInput = input} defaultValue={this.state.user.displayName} onBlur={this.changeDispayName}/>
                                    :
                                    <React.Fragment>
                                        <span className="text">{this.state.user.displayName}</span>
                                        <i className="fa fa-pencil" onClick={this.showEditName}></i>
                                    </React.Fragment>
                                }
                            </div>
                        </div>
                        <div className="menu-profile">
                            <NavLink to="/account/orders" className="item">My orders</NavLink>
                            <NavLink to="/account/partners" className="item">Partners</NavLink>
                        </div>
                        
                        </div>
                        <div className="main-section">
                            {this.displayTab()}
                        </div>
                    </div> 
                </div>
            </React.Fragment>
        }
        </div>

    );
  }
}

export default withRouter(Account);
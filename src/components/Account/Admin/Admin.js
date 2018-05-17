import React from 'react';
import { withRouter } from "react-router";
import Restaurants from "./Restaurants/Restaurants";
import Shops from "./Shops/Shops";
import Orders from "./Orders/Orders";
import OurShop from "./OurShop/OurShop";
import base from '../../../services/base';
import firebase from "firebase";
import { NavLink } from 'react-router-dom';

class Account extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          currentTab: "Restaurants",
          user: firebase.auth().currentUser,
          isEditName: false,
      }
  }

  componentDidMount() {

  }
  componentWillUnmount() {
    
}

displayTab () {
     if(this.state.currentTab === "Orders") {
        return <Orders/>
    } else if (this.state.currentTab === "Restaurants") { 
        return <Restaurants/>
    } else if (this.state.currentTab === "Shops") { 
        return <Shops/>
    } else if (this.state.currentTab === "OurShop") { 
        return <OurShop/>
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
        currentTab = "Orders"
    }
    else if(nextProps.location.pathname.includes("/account/restaurants")) {
        currentTab = "Restaurants"
    }
    else if(nextProps.location.pathname.includes("/account/shops")) {
        currentTab = "Shops"
    }
    else if(nextProps.location.pathname.includes("/account/ourshop")) {
        currentTab = "OurShop"
    }
    else {
        currentTab = "Restaurants"
    }
    return {
        currentTab
    };
}

render () {
    return (
        <div className="main-section">
            <div className="page-heading">Admin Panel</div>
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
                        <NavLink exact to="/account/restaurants" className="item">Restaurants</NavLink>
                        <NavLink to="/account/shops" className="item">Shops</NavLink>
                        <NavLink to="/account/orders" className="item">Orders</NavLink>
                        <NavLink to="/account/ourshop" className="item">Our shop</NavLink>
                    </div>
                    
                    </div>
                    <div className="main-section">
                        {this.displayTab()}
                    </div>
                </div> 
            </div>
        </div>

    );
  }
}

export default withRouter(Account);
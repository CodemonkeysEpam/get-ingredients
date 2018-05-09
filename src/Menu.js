import React from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import MealsSection from './MealsSection';
import MeatSection from './MeatSection';
import Recepies from './Recepies';
import Shop from './Shop';
import Login from './Login';
import Logout from './Logout';
import Account from './Account';
import ContactUs from './ContactUs';
import ShoppingCart from './ShoppingCart';
import PageNotFound from './PageNotFound';
import './styles/Menu.scss';
import firebase from 'firebase';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin : false,
            loading : true,
            user: null
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(
            function(user) {
              if (user) {
            //   var displayName = user.displayName;
            //   var email = user.email;
            //   var emailVerified = user.emailVerified;
            //   var photoURL = user.photoURL;
            //   var isAnonymous = user.isAnonymous;
            //   var uid = user.uid;
            //   var providerData = user.providerData;
            //   console.log({
            //     displayName : user.displayName,
            //     email : user.email,
            //     emailVerified : user.emailVerified,
            //     photoURL : user.photoURL,
            //     isAnonymous : user.isAnonymous,
            //     uid : user.uid,
            //     providerData : user.providerData
            //   })
                this.setState({
                    isLogin: true,
                    loading: false,
                    user: user
                })
              } else {
                this.setState({
                    isLogin: false,
                    loading: false,
                    user: null
                })
              }
            }.bind(this));
      }
  render () {
    return this.state.loading === true ? <h1>Loading</h1> : (
        <React.Fragment>
            <div className="menu">
                <Link to="/" className="title">Meat is life</Link>
                <NavLink exact to="/" className="item item-maroon">Home</NavLink>
                <NavLink to="/meals" className="item item-red">Meals</NavLink>
                <NavLink to="/meat" className="item item-yellow" >Meat</NavLink>
                <NavLink to="/recepies" className="item item-light-green">Recepies</NavLink>
                <NavLink to="/shop" className="item item-dark-green">Shop</NavLink>
                
                {this.state.isLogin ? 
                <div className="sign">
                    <Link to="/account">Account</Link> | <Link to="/logout">Log out</Link><Link to="/cart"><i className="fa fa-shopping-cart"></i></Link>
                </div>
                :
                <div className="sign">
                    <Link to="/login">Sign In</Link> | <Link to="/signup">Sign Up</Link><Link to="/cart"><i className="fa fa-shopping-cart"></i></Link>
                </div>
                }
            </div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/meals" component={MealsSection}/>
                <Route path="/meat"  component={MeatSection}/>
                <Route path="/recepies"  component={Recepies}/>
                <Route path="/shop"  component={Shop}/>
                <PublicRoute path="/login"  component={Login} isLogin={this.state.isLogin}/>
                <PublicRoute path="/signup"  component={Login} isLogin={this.state.isLogin}/>
                <PrivateRoute path="/logout"  component={Logout} isLogin={this.state.isLogin}/>
                <Route path="/contactus"  component={ContactUs}/>
                <PrivateRoute path="/account"  component={Account} isLogin={this.state.isLogin} user={this.state.user}/>
                <Route path="/cart"  component={ShoppingCart}/>
                <Route component={PageNotFound}/>
            </Switch>
        </React.Fragment>
    );
  }
}
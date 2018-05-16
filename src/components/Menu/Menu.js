import React from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import firebase from 'firebase';
import './Menu.scss';
import Home from '../Home/Home';
import MealsSection from '../MealsSection/MealsSection';
import MeatSection from '../MeatSection/MeatSection';
import Recipes from '../Recipes/Recipes';
import Shop from '../Shop/Shop';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Account from '../Account/Account';
import ContactUs from '../ContactUs/ContactUs';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import DoOrder from '../DoOrder/DoOrder';
import Restaurant from '../Restaurant/Restaurant';
import PageNotFound from '../PageNotFound/PageNotFound';
import PrivateRoute from '../../services/PrivateRoute';
import PublicRoute from '../../services/PublicRoute';
import RouteWithProps from '../../services/RouteWithProps';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin : false,
            loading : true,
            shoppingCart: {}
        }
    }

    addToShoppingCart = (type, itemInfo, count, itemProductInfo, providerInfo) => {
        const shoppingCart = {...this.state.shoppingCart};
        if(type === "shop") {
            if(itemInfo.id in shoppingCart) {
                shoppingCart[itemInfo.id].count = shoppingCart[itemInfo.id].count + count;
            }
            else {
                shoppingCart[itemInfo.id] = {
                    id: itemInfo.id,
                    name: itemInfo.name,
                    type: type,
                    src: itemInfo.src,
                    price: itemInfo.price,
                    count: count
                }
            }
        }
        else {
            if(itemProductInfo.id in shoppingCart) {
                shoppingCart[itemProductInfo.id].count = shoppingCart[itemProductInfo.id].count + count;
            }
            else {
                shoppingCart[itemProductInfo.id] = {
                    id: itemProductInfo.id,
                    name: itemInfo.name,
                    type: type,
                    src: itemInfo.src,
                    price: itemProductInfo.price,
                    count: count,
                    placeId: providerInfo.id,
                    placeName: providerInfo.name
                }
                console.log(shoppingCart[itemProductInfo.id])
            }
        }

        this.setState({shoppingCart})
    }

    clearCart = () => {
        this.setState({shoppingCart: {}})
    }

    increaseCountCart = (item) => {
        const shoppingCart = {...this.state.shoppingCart};
		if( item.count < 1000 ) {
            shoppingCart[item.id].count = item.count + 1;
			this.setState({shoppingCart})
        };
    }

	decreaseCountCart = (item) => {
        const shoppingCart = {...this.state.shoppingCart};
		if( item.count > 1 ){
            shoppingCart[item.id].count = item.count - 1;
            this.setState({shoppingCart})
		}
    }

    deleteFromCart = (item) => {
        const shoppingCart = {...this.state.shoppingCart};
        delete shoppingCart[item.id];
        this.setState({shoppingCart})
    }

    changeCountCart = (value, item) => {
        const shoppingCart = {...this.state.shoppingCart};
		if(value > 0 && value < 1000 ){
            let newValue = parseInt(value, 10);
            shoppingCart[item.id].count = parseInt(value, 10);
			this.setState({shoppingCart})
		}
	}

    componentDidUpdate() {
        localStorage.setItem("shoppingCart", JSON.stringify(this.state.shoppingCart));
    }

    componentDidMount() {
        const localStorageRef = localStorage.getItem("shoppingCart");
        if(localStorageRef) {
            this.setState({
                shoppingCart: JSON.parse(localStorageRef)
            })
        }
        firebase.auth().onAuthStateChanged(
            function(user) {
              if (user) {
                this.setState({
                    isLogin: true,
                    loading: false
                })
              } else {
                this.setState({
                    isLogin: false,
                    loading: false
                })
              }
            }.bind(this));
      }
  render () {
    return this.state.loading === true ? <h1>Loading</h1> : (
        <div className="wrapper-container">
            <div className="menu">
                <div className="container">
                    <Link to="/" className="title" >Meat is Life</Link>
                    <NavLink exact to="/" className="item item-maroon">Home</NavLink>
                    <NavLink to="/meals" className="item item-red">Meals</NavLink>
                    <NavLink to="/meat" className="item item-yellow" >Meat</NavLink>
                    <NavLink to="/recepies" className="item item-light-green">Recipes</NavLink>
                    <NavLink to="/shop" className="item item-dark-green">Shop</NavLink>
                    <Link to="/cart" className="shopping-cart">
                        <i className="fa fa-shopping-cart">
                            <span className="count">{this.props.orders.length}</span>
                        </i>
                    </Link>
                    {this.state.isLogin ?
                        <div className="sign">
                            <NavLink to="/account">Account</NavLink> | <NavLink to="/logout">Log out</NavLink>
                        </div>
                        :
                        <div className="sign">
                            <NavLink to="/login">Sign In</NavLink> | <NavLink to="/signup">Sign Up</NavLink>
                        </div>
                    }
                </div>
            </div>
            <Switch>
                <RouteWithProps path="/" exact component={Home} addToShoppingCart={this.addToShoppingCart}/>
                <RouteWithProps path="/meals" component={MealsSection} addToShoppingCart={this.addToShoppingCart}/>
                <RouteWithProps path="/meat"  component={MeatSection} addToShoppingCart={this.addToShoppingCart}/>
                <Route path="/recepies"  component={Recipes}/>
                <RouteWithProps path="/shop" component={Shop} addToShoppingCart={this.addToShoppingCart}/>
                <PublicRoute path="/login" component={Login} isLogin={this.state.isLogin}/>
                <PublicRoute path="/signup" component={Login} isLogin={this.state.isLogin}/>
                <PrivateRoute path="/logout" component={Logout} isLogin={this.state.isLogin}/>
                <Route path="/contact-us" component={ContactUs}/>
                <PrivateRoute path="/account"  component={Account} isLogin={this.state.isLogin}/>
                <RouteWithProps path="/cart" component={ShoppingCart}
                shoppingCart={Object.values(this.state.shoppingCart)}
                increaseCountCart={this.increaseCountCart}
                decreaseCountCart={this.decreaseCountCart}
                deleteFromCart={this.deleteFromCart}
                changeCountCart={this.changeCountCart}
                />
                <RouteWithProps path="/order" component={DoOrder}
                shoppingCart={Object.values(this.state.shoppingCart)}
                clearCart={this.clearCart}
                />
                <Route path="/restaurant/:id" component={Restaurant}/>
                <Route path="/meat-shop/:id" component={Restaurant}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    );
  }
}

export default withRouter(
    connect(
        state => ({
            orders: state.orders.orders
        }),
        dispatch => ({})
    )(Menu)
);

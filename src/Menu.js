import React from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import MealsSection from './MealsSection';
import MeatSection from './MeatSection';
import Ashot from './Ashot';
import Shop from './Shop';
import Login from './Login';
import PageNotFound from './PageNotFound';
import './styles/Menu.scss';

export default class Menu extends React.Component {
  render () {
    return (
        <header>
            <div className="menu">
                <div className="title">Meat is life</div>
                <NavLink exact to="/" className="item item-maroon">Home</NavLink>
                <NavLink to="/meals" className="item item-red">Meals</NavLink>
                <NavLink to="/meat" className="item item-yellow" >Meat</NavLink>
                <NavLink to="/ashot" className="item item-light-green">Ashot`s</NavLink>
                <NavLink to="/shop" className="item item-dark-green">Shop</NavLink>
                <div className="sign"><Link to="/login">Sign In</Link> | <Link to="/login">Sign Up</Link></div>
            </div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/meals" component={MealsSection}/>
                <Route path="/meat"  component={MeatSection}/>
                <Route path="/ashot"  component={Ashot}/>
                <Route path="/shop"  component={Shop}/>
                <Route path="/login"  component={Login}/>
                <Route component={PageNotFound}/>
            </Switch>
        </header>
    );
  }
}

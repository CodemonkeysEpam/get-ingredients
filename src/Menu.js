import React from 'react';
import { Route, Link, NavLink} from 'react-router-dom';
import Home from './Home';
import MainSection from './MainSection';
import Meat from './Meat';
import Ashot from './Ashot';
import Shop from './Shop';

export default class Menu extends React.Component {
  render () {
    return (
        <header>
            <div className="menu">
                <div className="menu-title">Meat is life</div>

                <div className="menu-item menu-item-maroon menu-item-maroon-active">
                    <Link to="/">Home</Link>
                </div>
                <div className="menu-item menu-item-red">
                    <Link to="/meals">Meals</Link>
                </div>
                <div className="menu-item menu-item-yellow">
                    <Link to="/meat">Meat</Link>
                </div>
                <div className="menu-item menu-item-light-green">
                    <Link to="/ashot">Ashot`s</Link>
                </div>
                <div className="menu-item menu-item-dark-green">
                    <Link to="/shop">Shop</Link>
                </div>
                <div className="menu-sign"><a href="#">Sign In</a> | <a href="#">Sign Up</a></div>  
            </div>

            <Route path="/" exact component={Home}/>
            <Route path="/meals" component={MainSection}/>
            <Route path="/meat"  component={Meat}/>
            <Route path="/ashot"  component={Ashot}/>
            <Route path="/shop"  component={Shop}/>
        </header>
    );
  }
}
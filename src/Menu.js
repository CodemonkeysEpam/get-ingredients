import React from 'react';
import { Route, Link, NavLink} from 'react-router-dom';
import Home from './Home';
import MealsSection from './MealsSection';
import MeatSection from './MeatSection';
import Ashot from './Ashot';
import Shop from './Shop';
import './styles/Menu.scss';

export default class Menu extends React.Component {
  render () {
    return (
        <header>
            <div className="menu">
                <div className="title">Meat is life</div>

                <div className="item item-maroon active">
                    <Link to="/">Home</Link>
                </div>
                <div className="item item-red">
                    <Link to="/meals">Meals</Link>
                </div>
                <div className="item item-yellow">
                    <Link to="/meat">Meat</Link>
                </div>
                <div className="item item-light-green">
                    <Link to="/ashot">Ashot`s</Link>
                </div>
                <div className="item item-dark-green">
                    <Link to="/shop">Shop</Link>
                </div>
                <div className="sign"><a href="#">Sign In</a> | <a href="#">Sign Up</a></div>
            </div>

            <Route path="/" exact component={Home}/>
            <Route path="/meals" component={MealsSection}/>
            <Route path="/meat"  component={MeatSection}/>
            <Route path="/ashot"  component={Ashot}/>
            <Route path="/shop"  component={Shop}/>
        </header>
    );
  }
}

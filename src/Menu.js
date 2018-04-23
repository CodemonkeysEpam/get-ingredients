import React from 'react';

export default class Menu extends React.Component {
  render () {
    return (
        <header>
            <div className="menu">
                <div className="menu-title">Meat is life</div>
                <div className="menu-item menu-item-maroon">Home</div>
                <div className="menu-item menu-item-red menu-item-red-active">Meals</div>
                <div className="menu-item menu-item-yellow">Meat</div>
                <div className="menu-item menu-item-light-green">Ashot's</div>
                <div className="menu-item menu-item-dark-green">Shop</div>
                <div className="menu-sign"><a href="#">Sign In</a> | <a href="#">Sign Up</a></div>
            </div>
        </header>
    );
  }
}
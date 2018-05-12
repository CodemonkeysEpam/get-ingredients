import React from 'react';
import MyOrders from "../Account/MyOrders/MyOrders";
import OrdersList from './orderList';

export default class ShoppingCart extends React.Component {

  render () {
    return (
        <div className="main-section">
            <div className="page-heading">Shopping Cart</div>
            <MyOrders ordersList={this.props.shoppingCart} />
        </div>
    );
  }
}
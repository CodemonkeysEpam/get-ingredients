import React from 'react';
import MyOrders from "./MyOrders";
import OrdersHistory from "./ordersHistory";

export default class Account extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          currentTab: 'currentOrders'
      }
  }

  handleClick (tab) {
    this.setState({
        currentTab: tab
    });
}

displayTab () {
    if(this.state.currentTab === "currentOrders") {
        return <MyOrders />
    } else if (this.state.currentTab === "history") {
        return <OrdersHistory />
    }
}

  render () {
    return (
        <div className="main-section">
            <div className="container">
                <div className="page-heading">Shopping Cart</div>
                <div className="shopping-cart-tab" onClick={() => this.handleClick("currentOrders")}>Current Orders</div>
                <div className="shopping-cart-tab" onClick={() => this.handleClick("history")}>History</div>
                {this.displayTab()}
            </div>
        </div>
    );
  }
}
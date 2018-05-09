import React from 'react';
import MyOrders from "./MyOrders";
import ShippingAddress from "./ShippingAddress";
import Partners from "./Partners";
import { withRouter } from "react-router";

class Account extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          currentTab: 'MyOrders'
      }
  }

  handleClick (tab) {
    this.setState({
        currentTab: tab
    });
}

displayTab () {
    if(this.state.currentTab === "MyOrders") {
        return <MyOrders />
    } else if (this.state.currentTab === "ShippingAddress") {
        return <ShippingAddress />
    } else if (this.state.currentTab === "Partners") { 
        return <Partners />
    }
}

  render () {
    return (
        <div className="main-section">
        <div className="container">
        <div className="page-heading">Account</div>
        {console.log(this.props.user)}
            <h2>Hello {this.props.user.displayName}</h2>
            <a href="#" onClick={() => this.handleClick('MyOrders')}>My orders</a> |
            <a href="#" onClick={() => this.handleClick('ShippingAddress')}>Shipping address</a> | 
            <a href="#" onClick={() => this.handleClick('Partners')}>Partners</a>
            <br />
            {this.displayTab()}
            </div>
        </div>

    );
  }
}

export default withRouter(Account);
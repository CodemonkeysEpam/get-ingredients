import React from 'react';
import { withRouter } from "react-router";
import base from '../../services/base';
import MyOrders from "./MyOrders/MyOrders";
import MyInfo from "./MyInfo/MyInfo";
import Partners from "./Partners/Partners";

class Account extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          currentTab: 'MyInfo'
      }
  }

  handleClick (tab) {
    this.setState({
        currentTab: tab
    });
}

displayTab () {
    if(this.state.currentTab === "MyInfo") {
        return <MyInfo user={this.props.user}/>
    } else if(this.state.currentTab === "MyOrders") {
        return <MyOrders uid={this.props.user.uid}/>
    } else if (this.state.currentTab === "Partners") { 
        return <Partners uid={this.props.user.uid}/>
    }
}

  render () {
    return (
        <div className="main-section">
        <div className="container">
        <div className="page-heading">Account</div>
            <a href="#" onClick={() => this.handleClick('MyInfo')}>My Info</a> | 
            <a href="#" onClick={() => this.handleClick('MyOrders')}>My orders</a> |
            <a href="#" onClick={() => this.handleClick('Partners')}>Partners</a>
            <br />
            <br />
            {this.displayTab()}
            </div>
        </div>

    );
  }
}

export default withRouter(Account);
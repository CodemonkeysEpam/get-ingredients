import React from 'react';
import AddShippingAddress from "./AddShippingAddress"


export default class ShippingAddress extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            currentTab: 'Address'
        }
    }
  
    handleClick (tab) {
      this.setState({
          currentTab: tab
      });
    }
    
    displayTab () {
        if(this.state.currentTab === "Address") {
            return (
                <React.Fragment>
                    <a href="#" onClick={() => this.handleClick('AddShippingAddress')}>Add new address</a>
                    <div>No adress</div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <a href="#" onClick={() => this.handleClick('Address')}>Back to Shipping address</a>
                    <AddShippingAddress />
                </React.Fragment>
            )     
        }

    }
    render() {
        return (
            <React.Fragment>
            {this.displayTab()}
            </React.Fragment>
        )
    }
}
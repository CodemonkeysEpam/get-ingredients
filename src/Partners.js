import React from 'react';
import AddPartners from "./AddPartners"


export default class Partners extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            currentTab: 'Partners'
        }
    }
  
    handleClick (tab) {
      this.setState({
          currentTab: tab
      });
    }
    
    displayTab () {
        if(this.state.currentTab === "Partners") {
            return (
                <React.Fragment>
                    <a href="#" onClick={() => this.handleClick('AddPartners')}>Add new item</a>
                    <div>No adress</div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <a href="#" onClick={() => this.handleClick('Partners')}>Back to Partners</a>
                    <AddPartners />
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
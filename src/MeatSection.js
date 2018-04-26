import React from 'react';
import FindYourMeatShop from './FindYourMeatShop';
import FindYourMeal from './FindYourMeal';

export default class MeatSection extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          currentTab: 'FindYourMeat'
      }
  }

  handleClick (tab) {
    if (tab === 'FindYourPlace') {
      this.setState({
          currentTab: 'FindYourPlace'
      });  
    } else {
      this.setState({
          currentTab: 'FindYourMeat'
      });   
    }
}

displayTab () {
    if (this.state.currentTab === 'FindYourPlace') {
        return <FindYourMeatShop />
    } else {
        return <FindYourMeal />
    }
}

  render () {
    return (
        <div className="main-section">
        <div className="page-heading">Meat delivery</div>
            <div className="find-tabs">
                <div className="container">
                    <div className="flex-tabs">
                        <div id="find-your-place" className="find-tab tab-red" onClick={() => this.handleClick('FindYourPlace')}>Find meat shop</div>
                        <div id="find-your-meal" className="find-tab tab-yellow-active" onClick={() => this.handleClick('FindYourMeat')}>Find your meat</div>
                    </div>
                </div>
            </div>
            <div className="container">
            {this.displayTab()}
            </div>
        </div>
    );
  }
}
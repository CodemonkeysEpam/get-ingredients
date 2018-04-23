import React from 'react';
import FindYourPlace from './FindYourPlace';
import FindYourMeal from './FindYourMeal';

export default class MainSection extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          currentTab: 'FindYourMeal'
      }
  }

  handleClick (tab) {
    if (tab === 'FindYourPlace') {
      this.setState({
          currentTab: 'FindYourPlace'
      });  
    } else {
      this.setState({
          currentTab: 'FindYourMeal'
      });   
    }
}

displayTab () {
    if (this.state.currentTab === 'FindYourPlace') {
        return <FindYourPlace />
    } else {
        return <FindYourMeal />
    }
}

  render () {
    return (
        <div className="main-section">
            <div className="find-tabs">
                <div className="container">
                    <div className="flex-tabs">
                        <div id="find-your-place" className="find-tab tab-red" onClick={() => this.handleClick('FindYourPlace')}>Find your place</div>
                        <div id="find-your-meal" className="find-tab tab-yellow-active" onClick={() => this.handleClick('FindYourMeal')}>Find your meal</div>
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
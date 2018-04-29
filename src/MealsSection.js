import React from 'react';
import FindFoodTab from './FindFoodTab';
import FindLocationTab from './FindLocationTab';
import Meals from './Meals';
import Places from './Places';
import Menus from './Menus';
import './styles/MealsSection.scss';

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
        return (<div id="find-your-place-body"><FindLocationTab list={Places.PlacesList} /></div>)
    } else {
        return <FindFoodTab itemsList={Meals.MealsList} placesList={Places.PlacesList} menusList={Menus.MenusList} />
    }
}

  render () {
    return (
        <div className="main-section">
        <div className="page-heading">Meal delivery</div>
            <div className="find-tabs">
                <div className="container">
                    <div className="flex-tabs">
                        <div id="find-your-place" className={this.state.currentTab === 'FindYourPlace' ? "find-tab tab-red-active": "find-tab tab-red"} onClick={() => this.handleClick('FindYourPlace')}>Find your place</div>
                        <div id="find-your-meal" className={this.state.currentTab === 'FindYourMeal' ? "find-tab tab-yellow-active": "find-tab tab-yellow"} onClick={() => this.handleClick('FindYourMeal')}>Find your meal</div>
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

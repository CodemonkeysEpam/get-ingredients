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
      this.setState({
          currentTab: tab
      });
}

displayTab () {
    if (this.state.currentTab === 'FindYourPlace') {
        return (<FindLocationTab list={Places.PlacesList} />)
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
                        <a href="#" id="find-your-place" className={this.state.currentTab === 'FindYourPlace' ? "find-tab tab-red active": "find-tab tab-red"} onClick={() => this.handleClick('FindYourPlace')}>Find your place</a>
                        <a href="#" id="find-your-meal" className={this.state.currentTab === 'FindYourMeal' ? "find-tab tab-yellow active": "find-tab tab-yellow"} onClick={() => this.handleClick('FindYourMeal')}>Find your meal</a>
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

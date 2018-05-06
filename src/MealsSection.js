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
          currentTab: 'findyourmeal'
      }
  }

handleClick (tab) {
      this.props.history.push(`/meals?${tab}`);
}

displayTab () {
    if (this.state.currentTab === 'findyourplace') {
        return (<FindLocationTab list={Places.PlacesList} />)
    } else {
        return <FindFoodTab itemsList={Meals.MealsList} placesList={Places.PlacesList} menusList={Menus.MenusList} />
    }
}

static getDerivedStateFromProps(nextProps, prevState) {
    return {
        currentTab: nextProps.location.search === "?findyourplace" ? "findyourplace" : "findyourmeal"
    };
  }

  render () {
    return (
        <div className="main-section">
        <div className="page-heading">Meal delivery</div>
            <div className="find-tabs">
                <div className="container">
                    <div className="flex-tabs">
                        <a href="#" id="find-your-place" className={this.state.currentTab === 'findyourplace' ? "find-tab tab-red active": "find-tab tab-red"} onClick={() => this.handleClick('findyourplace')}>Find your place</a>
                        <a href="#" id="find-your-meal" className={this.state.currentTab === 'findyourmeal' ? "find-tab tab-yellow active": "find-tab tab-yellow"} onClick={() => this.handleClick('findyourmeal')}>Find your meal</a>
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

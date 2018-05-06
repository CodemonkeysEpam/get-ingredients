import React from 'react';
import FindFoodTab from './FindFoodTab';
import FindLocationTab from './FindLocationTab';
import Meals from './Meals';
import Places from './Places';
import Menus from './Menus';
import './styles/MealsSection.scss';
import { Link } from 'react-router-dom';

export default class MainSection extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          currentTab: 'findyourmeal'
      }
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
                    <Link to="/meals?findyourplace" className={this.state.currentTab === 'findyourplace' ? "find-tab tab-red active": "find-tab tab-red"}>Find your place</Link>
                    <Link to="/meals?findyourmeal" className={this.state.currentTab === 'findyourmeal' ? "find-tab tab-yellow active": "find-tab tab-yellow"}>Find your meal</Link>
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

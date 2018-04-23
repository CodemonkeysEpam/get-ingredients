import React from 'react';
import Meals from './Meals';
import Places from './Places';

export default class FindYourMeal extends React.Component {
  
  constructor(props) {
      super(props);

      this.state = {
          currentMealsList: Meals.MealsList,
          currentPlacesList: Places.PlacesList,
          currentMeal: Meals.MealsList[0],
          searchMealQuery: "",
          searchPlaceQuery: ""
      }
  }

  onMealClick = (meal) => {
      this.setState({
          currentMeal: meal
      });
  }

  handleMealInputChange = () => {
    let pattern = new RegExp(this.searchMealInput.value, 'i');
    let filtered = Meals.MealsList.filter((meal) => {
        return pattern.test(meal.name)
    });
    this.setState({
        searchMealQuery: this.searchMealInput.value,
        currentMealsList: filtered,
        currentMeal: filtered[0] || {}
    });
  }

  handlePlaceInputChange = () => {
    let pattern = new RegExp(this.searchPlaceInput.value, 'i');
    let filtered = Places.PlacesList.filter((place) => {
        return pattern.test(place.name)
    });
    this.setState({
        searchplaceQuery: this.searchPlaceInput.value,
        currentPlacesList: filtered,
        currentPlace: filtered[0] || {}
    });
  }

  renderMealsList = () => {
    return this.state.currentMealsList.map(meal => {
        return <div class="category-body-item" onClick={() => this.onMealClick(meal)}>{meal.name}<hr /></div>
    })
  }

  renderPlacesList = () => {
    return this.state.currentPlacesList.map(place => {
        return (
            <div className="place-item">
                <div className="flex-item-info">
                <a href="#"><i className="fa fa-map-marker fa-3x" aria-hidden="true"></i></a>
                    <div className="place-info">
                        <div className="place-name">{place.name}</div>
                        <div className="place-address">{place.address}</div>
                    </div>
                </div>
                <div className="place-description">{place.description}</div>
                <button class="place-button">ADD TO CARD</button>
                <button class="place-button">PHONE</button>
            </div>
        )
    })
  }

  render () {
    return (
        <div id="find-your-meal-body">
            <div className="find-tab-body">
                {/* Left sidebar start */} 
                <div className="sidebar sidebar-left">
                    <div className="search-container">
                        <input type="text" className="searchInput" placeholder="Type the name here" ref={input => this.searchMealInput = input} onChange={this.handleMealInputChange} />
                        <i className="fa fa-search"></i>
                    </div>
                    <div class="search-result-container">
                        <div class="search-response">
                            {this.renderMealsList()}
                        </div>
                    </div>
                </div>   
                {/* Left sidebar end */} 
                <div className="center-container">
                    <img alt={this.state.currentMeal.name} src={window.location.origin + this.state.currentMeal.src} />
                </div> 
                {/* Right sidebar start */}
                <div class="sidebar sidebar-right">
                    <div className="search-container">
                        <input type="text" className="searchInput" placeholder="Type the name here" ref={input => this.searchPlaceInput = input} onChange={this.handlePlaceInputChange} />
                        <i className="fa fa-search"></i>
                    </div>
                    <div className="search-result-container">
                        <div className="search-response">
                            {this.renderPlacesList()}
                        </div>
                    </div>
                </div>
                {/* Right sidebar end */}
            </div>
        </div>
    );
  }
}
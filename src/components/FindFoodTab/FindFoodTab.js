import React from 'react';
import './FindFoodTab.scss';
import Slider from "react-slick";

export default class FindFoodTab extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          currentMealsList: this.mealsList(),
          specialOffersList: this.specialOffers(),
          currentMeal: this.mealsList()[0],
          searchItemQuery: ""
      }
  }

  mealsList = () => {
    let uniqueMealsIDs = [];
    this.props.menusList.forEach(elem => {
        if(uniqueMealsIDs.indexOf(elem.mealId) === -1) {
            uniqueMealsIDs.push(elem.mealId)
        };
    });
    let currentMeals = [];
    Object.keys(uniqueMealsIDs).forEach(key => this.props.itemsList.forEach(meal => {
        if(meal.id === uniqueMealsIDs[key]){
            currentMeals.push(meal)
        }}
    ));
    return currentMeals;
  }

  specialOffers = () => {
      let specialArray = [];
      console.log(this.props.specialList);
      this.props.specialList.forEach(item => {
          let newItem = {
            meal: this.props.itemsList[item.mealId],
            place: this.props.placesList[item.placeId],
            price: item.price
          };
          specialArray.push(newItem);
      });
      console.log(specialArray);
      return specialArray;
  }

  handleMealsInputChange = () => {
    let pattern = new RegExp(this.searchMealsInput.value, 'i');
    let filtered = this.mealsList().filter((item) => {
        return pattern.test(item.name)
    });
    this.setState({
        searchItemQuery: this.searchMealsInput.value,
        currentMealsList: filtered,
        currentMeal: filtered[0] || {}
    });
  }

  renderSlider = () => {
    return this.state.specialOffersList.map((item, i) => {
        return (
            <React.Fragment key={i}>
                <div className="meal-item">
                    <p>{item.meal.name}</p>
                    <p>{item.place.name}</p>
                    <p>{item.price}</p>    
                </div>
            </React.Fragment>
        )
    })
  }

  renderMealsList = () => {
    return this.state.currentMealsList.map((item, i) => {
        return (
                <div className="meal-item" key={i}>
                    <img className="meal-logo" src={item.img} alt={item.name} />
                    <div className="meal-name">{item.name}</div>
                </div>
        )
    })
  }

  render () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <React.Fragment>
            <div className="mySlider-container">
                <Slider {...settings}>
                    {this.renderSlider()}
                </Slider>
            </div>
            <div className="meal-heading">
                <h3>All Meals</h3>
            </div>
            <div className="search-input-container">
                <input type="text" placeholder="Search by name" className="search-input" ref={input => this.searchMealsInput = input} onChange={this.handleMealsInputChange} />
                <i className="fa fa-search"></i>
            </div>
            <div className="meal-container">
                {this.renderMealsList()}
            </div>
        </React.Fragment>
    );
  }
}

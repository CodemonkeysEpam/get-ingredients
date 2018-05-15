import React from 'react';
import './FindFoodTab.scss';
import Slider from "react-slick";
<<<<<<< HEAD
import { MealItem } from '../MealItem/MealItem';
import Modal from 'react-modal';
=======
import MealItem from '../MealItem/MealItem';
>>>>>>> f8b5b5b99dd820f476c62b7a383ae73979e55e5e

export default class FindFoodTab extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          currentMealsList: this.mealsList(),
          specialOffersList: this.specialOffers(),
          currentMeal: this.mealsList()[0],
          searchItemQuery: "",
          specialOffers: this.props.specialOffers,
          detailsOpen: false
      };

      this.handleDetailsClick = this.handleDetailsClick.bind(this);
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
      this.props.specialList.forEach(item => {
          let newItem = {
            meal: this.props.itemsList[item.mealId],
            place: this.props.placesList[item.placeId],
            price: item.price
          };
          specialArray.push(newItem);
      });
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

  handleDetailsClick = (meal) => {
      this.setState({
          currentMeal: meal,
          detailsOpen: true
      })
  }

  closeModal = () => {
    this.setState({
        detailsOpen: false
    })
  }

  renderSlider = () => {
    return this.state.specialOffersList.map((item, i) => {
        return (
            <React.Fragment key={i}>
                <MealItem 
                    id={item.id}
                    meal={item.meal} 
                    place={item.place} 
                    price={item.price}
                    addToShoppingCart={this.props.addToShoppingCart}
                />
            </React.Fragment>
        )
    })
  }

  renderMealsList = () => {
    return this.state.currentMealsList.map((item, i) => {
        return (
            <React.Fragment key={i}>
                <MealItem 
                    meal={item}
                    detailsButtonClick={() => this.handleDetailsClick(item)} 
                />
            </React.Fragment>
        )
    })
  }

  render () {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            }
          ]
    };
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
    return (
        <React.Fragment>
            {this.state.specialOffers && <div className="mySlider-container">
                <Slider {...settings}>
                    {this.renderSlider()}
                </Slider>
            </div>}
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
            <Modal
                isOpen={this.state.detailsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
            >
                <div className="meal-details">
                    <button className="meal-details-close-button" onClick={this.closeModal}>close</button>
                    <h2 className="meal-details-heading">{this.state.currentMeal.name}</h2>
                    <div className="meal-details-img"><img src={this.state.currentMeal.src} /></div>
                    <button className="meal-details-add-button">add to cart</button>
                </div>
            </Modal>
        </React.Fragment>
    );
  }
}

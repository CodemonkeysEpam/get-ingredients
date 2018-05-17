import React from 'react';
import './FindFoodTab.scss';
import Slider from "react-slick";
import MealItem from '../MealItem/MealItem';
import Modal from 'react-modal';
import Autocomplete from 'react-autocomplete';
import ProductItemAddToCart from "../ProductItemAddToCart/ProductsItemAddToCart";

export default class FindFoodTab extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          currentMealsList: this.mealsList(),
          specialOffersList: this.specialOffers(),
          currentMeal: this.mealsList()[0],
          searchItemQuery: "",
          specialOffers: this.props.specialOffers,
          detailsOpen: false,
          currentOffers: [],
          selectedIngredient: "Select ingredient",
          selectedPlace: "Select place",
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
        currentMeal: filtered[0] || {},
        selectedIngredient: "Select ingredient",
        selectedPlace: "Select place",
        value: ""
    });
  }

  handleDetailsClick = (meal) => {
      this.setState({
          currentMeal: meal,
          detailsOpen: true
      });
  }

  findPlacesWithMeal = (meal) => {
      let arr = [];
      this.props.menusList.forEach(item => {
          if (item.mealId === meal.id) {
              arr.push({place:this.props.placesList[item.placeId], menusItem:item});
          }
      });
      return arr;
  }

  renderPlacesWithMeal = (meal) => {
    let mealsPage;
    if( typeof this.props.mealsPage === 'undefined' ){
      mealsPage = false;
      console.log(mealsPage);
    } else {
      mealsPage = this.props.mealsPage;
    }
      return this.findPlacesWithMeal(meal).map((item, i) => (
          <ProductItemAddToCart key={i} item={item} meal={meal} addToShoppingCart={this.props.addToShoppingCart} closeModal={this.closeModal} mealsPage={mealsPage}/>
      )
    );
  } 

  closeModal = () => {
    this.setState({
        detailsOpen: false
    })
  }

  formIngredientsList = () => {
      let ingredientsArr = [];
      this.props.itemsList.forEach(item => {
          item.ingredients.forEach(ingItem => {
              if(ingredientsArr.indexOf(ingItem) === -1) {
                  ingredientsArr.push(ingItem);
              }
          })
      });
      return ingredientsArr;
  }
  
  onPlaceSelect = (val) => {
      let index = 0, arr = [];
      this.props.placesList.forEach((item, i) => {
          if (item.name === val) {
              index = i;
          };
      });
      this.props.menusList.forEach(item => {
          if(item.placeId === this.props.placesList[index].id) {
              arr.push(item.mealId);
          };
      })
      let mealsArr = this.props.itemsList.filter(item => {
          return arr.indexOf(item.id) !== -1;
      });
      this.setState({
          currentMealsList: mealsArr,
          selectedPlace: val,
          selectedIngredient: "Select ingredient"
      })
  }

  onIngredientSelect = (val) => {
      let arr = this.props.itemsList.filter(item => {
         return item.ingredients.indexOf(val) !== -1
      });
      this.setState({
          currentMealsList: arr,
          selectedIngredient: val,
          selectedPlace: "Select place"
      })
  }

  renderSlider = () => {
    return this.state.specialOffersList.map((item, i) => {
        return (
            <React.Fragment key={i}>
                <MealItem 
                    meal={item.meal} 
                    place={item.place} 
                    price={item.price}
                    addToCartButton={true}
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
        overlay: {zIndex: 3},
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
            <div className="selects-container">
            <div className="search-input-container">
                <input type="text" placeholder="Search by name" className="search-input" ref={input => this.searchMealsInput = input} onChange={this.handleMealsInputChange} />
                <i className="fa fa-search"></i>
            </div>
            {this.props.mealsPage && <div className="ingredients-select">
            <Autocomplete
                wrapperStyle={{ position: 'relative' }}
                menuStyle={{ position: 'absolute', top: '40px', left: 0 }}
                getItemValue={(item) => item}
                items={this.formIngredientsList()}
                renderItem={(item, isHighlighted) =>
                <div className={ isHighlighted ? 'highlighted' : 'not-highlighted' }>
                    {item}
                </div>
                }
                value={this.state.selectedIngredient}
                onSelect={(val) => this.onIngredientSelect(val)}
            />
            </div>}
            <div className="place-select">
            <Autocomplete
                wrapperStyle={{ position: 'relative' }}
                menuStyle={{ position: 'absolute', top: '40px', left: 0 }}
                getItemValue={(item) => item.name}
                items={this.props.placesList}
                renderItem={(item, isHighlighted) =>
                <div className={ isHighlighted ? 'highlighted' : 'not-highlighted' }>
                    {item.name}
                </div>
                }
                value={this.state.selectedPlace}
                onSelect={(val) => this.onPlaceSelect(val)}
            />
            </div>
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
                    <button className="meal-details-close-button" onClick={this.closeModal}>X</button>
                    <h2 className="meal-details-heading">{this.state.currentMeal.name}</h2>
                    <div className="meal-details-img"><img src={this.state.currentMeal.src} /></div>
                    <div className="meal-details-offers">{this.renderPlacesWithMeal(this.state.currentMeal)}</div>
                </div>
            </Modal>
        </React.Fragment>
    );
  }
}

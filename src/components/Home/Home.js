import React from 'react';
import base from '../../services/base';
import ImageGallery from 'react-image-gallery';

import { RestaurantItem } from '../RestaurantItem/RestaurantItem';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import MealItem from '../MealItem/MealItem';
import Product from '../Shop/Product';
import TopSlider from './TopSlider';

import './Home.scss';

export default class Home extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      advertising: [],
      placesList: [],
      mealsList: [],
      meatList: [],
      specialMeatList: [],
      specialList: [],
      shopsList: [],
      productsList: [],
      orders: []
    }
  }

  componentDidMount() {
    this.refAdvertising = base.bindToState('advertising', {
      context: this,
      state: 'advertising',
      asArray: true
    });
    this.refPlaces = base.bindToState(`meals/places`, {
      context: this,
      state: 'placesList',
      asArray: true
    });
    this.refMeals = base.bindToState(`meals/meals`, {
      context: this,
      state: 'mealsList',
      asArray: true
    });
    this.refSpecial = base.bindToState(`meals/special`, {
      context: this,
      state: 'specialList',
      asArray: true
    });
    this.refShops = base.syncState(`meat/shops`, {
      context: this,
      state: 'shopsList',
      asArray: true
    });
    this.refMeat = base.syncState(`meat/meat`, {
      context: this,
      state: 'meatList',
      asArray: true
    });
    this.refMeat = base.syncState(`meat/special`, {
      context: this,
      state: 'specialMeatList',
      asArray: true
    });
    this.refProducts = base.bindToState('shop/products', {
      context: this,
      state: 'productsList',
      asArray: true
    });
    this.refOrders = base.bindToState(`orders`, {
      context: this,
      state: 'orders',
      asArray: true,
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.refAdvertising);
  }

  renderSpecialOffer = () => {
    let specialArray = [];
    this.state.specialList.forEach(item => {
      let newItem = {
        meal: this.state.mealsList[item.mealId],
        place: this.state.placesList[item.placeId],
        price: item.price
      };
      specialArray.push(newItem);
    });

    if(specialArray.length > 7){
      let shuffleArray = this.shuffle(specialArray);
      specialArray = specialArray.slice(0, 7);
    }

    return specialArray.map((item, i) => {
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

  renderSpecialMeat = () => {
    let meatArray = [];
    this.state.specialMeatList.forEach(item => {
      let newItem = {
        meal: this.state.meatList[item.mealId],
        place: this.state.shopsList[item.placeId],
        price: item.price
      };
      meatArray.push(newItem);
    });

    if(meatArray.length > 7){
      let shuffleArray = this.shuffle(meatArray);
      meatArray = meatArray.slice(0, 7);
    }
    return meatArray.map((item, i) => {
        return (
            <React.Fragment key={i}>
                <MealItem 
                    meal={item.meal} 
                    place={item.place} 
                    price={item.price}
                    addToCartButton={true}
                />
            </React.Fragment>
        );
    })
  }

  renderShopList = () => {
    let shopArray = [];
    if( this.state.productsList.length > 7 ){
      let shuffleArray = this.shuffle(this.state.productsList);
      shopArray = shopArray.slice(0, 7);
    } else {
      shopArray = this.state.productsList;
    }
    return(
      shopArray.map( el => 
        <Product key={el.id} el={el} addToShoppingCart={this.props.addToShoppingCart}/>
      )
    );
  }

  shuffle(array) {
    let newArray = array;
    var currentIndex = newArray.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }
  return newArray;
}

  render () {

    let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1300,
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
    let settingsForShop = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1280,
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

    return (
      <React.Fragment>
        <div className='banner'>
          <ImageGallery 
            items={this.state.advertising}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            showBullets={true}
            autoPlay={false}
            slideDuration={3000} />
        </div>

        <div className='slider-places'>
          <div className='slider-places-header'>
            <p>Popular Places</p>
            <NavLink to="/meals?findyourplace">
              <input type='button' className='button button-places' value='SEE ALL'></input>
            </NavLink>
          </div>
          <TopSlider list={this.state.placesList} orders={this.state.orders} />
        </div>

        <div className='slider-places'>
          <div className='slider-places-header'>
            <p>Special Offers</p>
            <NavLink to="/meals">
              <input type='button' className='button button-meal-offers' value='SEE ALL'></input>
            </NavLink>
          </div>
          <div className="mySlider-container">
            <Slider {...settings}>
              {this.renderSpecialOffer()}
            </Slider>
          </div>
        </div>

        <div className='slider-places'>
          <div className='slider-places-header'>
            <p>Best Stores</p>
            <NavLink to="/meat?findmeatshop">
              <input type='button' className='button button-stores' value='SEE ALL'></input>
            </NavLink>         
          </div>
          <TopSlider list={this.state.shopsList} orders={this.state.orders} type={'meat'}/>
        </div>

        <div className='slider-places'>
          <div className='slider-places-header'>
            <p>Special Meat</p>
            <NavLink to="/meat">
              <input type='button' className='button button-meat-offers' value='SEE ALL'></input>
            </NavLink>
          </div>
          <div className="mySlider-container">
            <Slider {...settings}>
              {this.renderSpecialMeat()}
            </Slider>
          </div>
        </div>

        <div className='slider-places'>
          <div className='slider-places-header'>
            <p>Our Shop</p>
            <NavLink to="/shop">
              <input type='button' className='button button-shop' value='SEE ALL'></input>
            </NavLink>
          </div>
          <div className="mySlider-container">
            <Slider {...settingsForShop}>
              {this.renderShopList()}
            </Slider>
          </div>
        </div>

        
      </React.Fragment>
    );
  }
}
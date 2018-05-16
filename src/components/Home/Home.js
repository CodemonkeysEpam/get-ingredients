import React from 'react';
import base from '../../services/base';
import ImageGallery from 'react-image-gallery';

import { RestaurantItem } from '../RestaurantItem/RestaurantItem';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { MealItem } from '../MealItem/MealItem';

import './Home.scss';

export default class Home extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      advertising: [],
      placesList: [],
      mealsList: [],
      menusList: [],
      specialList: []
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
    this.refMenus = base.bindToState(`meals/menus`, {
      context: this,
      state: 'menusList',
      asArray: true,
    });
    this.refSpecial = base.bindToState(`meals/special`, {
      context: this,
      state: 'specialList',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.refAdvertising);
  }

  renderSliderPopularRestourants = () => {
    let arr = this.state.placesList.map((place, i) => {
      return (
      <React.Fragment key={i}>
        <div className="myitem">
          <RestaurantItem
            id={place.id}
            logo={place.logo}
            name={place.name}
            address={place.address}
            showOnMapClick={() => this.showOnMapClick(place)}
            type={this.props.type}
          />
        </div>
      </React.Fragment>
      )
    })
    return arr.slice(Math.max(arr.length - 7, 1));
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

  

  render () {

    let settings = {
            dots: true,
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
          </div>
          <div className="mySlider-container">
            <Slider {...settings}>
              {this.renderSliderPopularRestourants()}
            </Slider>
          </div>
        </div>

        <div className='slider-places'>
          <div className='slider-places-header'>
            <p>Spesial Offers</p>
          </div>
          <div className="mySlider-container">
            <Slider {...settings}>
              {this.renderSpecialOffer()}
            </Slider>
          </div>
        </div>

        
      </React.Fragment>
    );
  }
}
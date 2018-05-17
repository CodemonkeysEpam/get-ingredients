import React from 'react';
import { RestaurantItem } from '../RestaurantItem/RestaurantItem';
import Slider from "react-slick";

export default class TopSlider extends React.Component{

  orderByCountOrder = (a,b) => {
    if (a.countOrder > b.countOrder)
      return -1;
    if (a.countOrder < b.countOrder)
      return 1;
    return 0;
  }

	formTop7Places(){
    let list = this.props.list;
    const orders = this.props.orders;
    let topPlaces = [];
    for(let key in list) {
      let placeItem = {};
      placeItem.id = list[key].id;
      placeItem.name = list[key].name;
      placeItem.location = list[key].location;
      placeItem.address = list[key].address;
      placeItem.description = list[key].description;
      placeItem.status = list[key].status;
      placeItem.countOrder = 0;
      
      for(let key2 in orders) {
        if(orders[key2].placeId === placeItem.id) {
          placeItem.countOrder++;
        }
      }
      topPlaces.push(placeItem);
    }
    topPlaces.sort(this.orderByCountOrder);
    let top7Places = [];
    
    for(let i=0; i< 7;i++) {
      if(i === topPlaces.length) break;
      top7Places.push(topPlaces[i])
    }
    return top7Places;
  }

  renderSliderPopularPlaces = (arr) => {
    arr = arr.map((place, i) => {
      return (
      <React.Fragment key={i}>
        <div className="myitem">
          <RestaurantItem
            id={place.id}
            logo={place.logo}
            name={place.name}
            address={place.address}
            showOnMapClick={() => this.showOnMapClick(place)}
          />
        </div>
      </React.Fragment>
      )
    });
    return arr;
  }

  render(){
  	let topPlaces = this.formTop7Places();

  	let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            
            responsive: [
                {
                    breakpoint: 5000,
                    settings: {
                        slidesToShow: 4
                    }
                },
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

  	return (
      <div className="mySlider-container">
    		<Slider {...settings}>
  			  {this.renderSliderPopularPlaces(topPlaces)}
  			</Slider>
      </div>
  	);
  }
}
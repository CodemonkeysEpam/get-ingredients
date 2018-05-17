import React from 'react';
import './MealItem.scss';
import { Button } from '../Shared/Button/Button';

import { connect } from 'react-redux';

class MealItem extends React.Component {

  dispatchOrder(){
    let order = {
      id: this.props.meal.id,
      name: this.props.meal.name,
      price: this.props.price,
      src: this.props.meal.src,
      placeName: this.props.place.name,
      placeId: this.props.place.id,
      type: 'meal',
      count: 1
    }
    this.props.onAddToCart(order)
  }

    render(){
        return(
            <div className="mealItem">
                <div className="meal-name">{this.props.meal.name}</div>
                <div className='meal-img'><img src={this.props.meal.src} /></div>
                {this.props.place && <div className='meal-place'>{this.props.place.name}</div>}
                {this.props.price && <div className='meal-price'>{`${this.props.price}$`}</div>}
                {this.props.addToCartButton && <Button handleClick={() => this.dispatchOrder()} label="ADD TO CARD"/>}
                {this.props.detailsButtonClick && <Button handleClick={this.props.detailsButtonClick} label="DETAILS"/>}
            </div>
        );
    }
}

/* {this.props.addToCartButton && <Button label="ADD TO CARD"/>} */

export default connect(
    state => ({
        orders: state.orders
    }),
    dispatch => ({
        onAddToCart: (order) => {
            dispatch({type: "ADD_ORDER", payload: order});
        }
    })
)(MealItem);
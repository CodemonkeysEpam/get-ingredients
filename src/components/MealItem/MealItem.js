import React from 'react';
import './MealItem.scss';
import { Button } from '../Shared/Button/Button';

import { connect } from 'react-redux';

class MealItem extends React.Component {

    dispatchOrder(props){
        let order = {
            id: this.props.id,
            name: this.props.meal.name,
            type: 'meal',
            src: this.props.meal.src,
            price: this.props.price,
            count: 1
        }
        this.props.onAddToCart(order);
    }

    render(){
        return(
            <div className="mealItem">
                <div className="meal-name">{this.props.meal.name}</div>
                <div className='meal-img'><img src={this.props.meal.src} /></div>
                {this.props.place && <div className='meal-place'>{this.props.place.name}</div>}
                {this.props.price && <div className='meal-price'>{`${this.props.price}$`}</div>}
                {<button onClick={this.dispatchOrder.bind(this)}>ADD TO CART</button>}
                {this.props.detailsButton && <button>DETAILS</button>}
            </div>
        );
    }
}

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

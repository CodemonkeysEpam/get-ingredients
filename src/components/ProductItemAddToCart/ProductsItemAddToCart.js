import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Product extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			value: 1
		}

		this.changeValue = this.changeValue.bind(this);
	}

	increaseValue = () => {
		if( this.state.value < 1000 ) {
			let newValue = this.state.value + 1;
			this.setState({
				value: newValue
			});
		};
	}

	decreaseValue = () => {
		if( this.state.value > 1 ){
			let newValue = this.state.value - 1;
			this.setState({
				value: newValue
			});
		} else { 
			this.setState({
				value: 1
			});
		}
	}

	changeValue = (evt) => {
		if( evt.target.value > 0 && evt.target.value < 1000 ){
			let newValue = parseInt(evt.target.value, 10);
			this.setState({
				value: newValue
			});
		}
	}

	dispatchOrder(){
    let order = {
      id: this.props.item.menusItem.id,
      name: this.props.meal.name,
      price: this.props.item.menusItem.price,
      src: this.props.meal.src,
      placeName: this.props.item.place.name,
      placeId: this.props.item.place.id,
      type: this.props.mealsPage ? "restaurant" :  "meat-shop",
      count: this.state.value
    }
    this.props.onAddToCart(order)
  }

	render(){
        const item = this.props.item;
        const meal = this.props.meal;
        const type = this.props.mealsPage ? "restaurant" :  "meat-shop";
		return(
			<div className="meal-details-offer">
                    <Link to={`/${type}/${item.place.id}`} className="meal-details-offer-place">{item.place.name}</Link>
                    <div className="meal-details-offer-price">{item.menusItem.price}$</div>
                    <div className='product-calc'>
                    <span onClick={this.decreaseValue}> - </span> 
                    <input type='number' className='product-amount' value={this.state.value} onChange={this.changeValue}></input>
                    <span onClick={this.increaseValue}> + </span>
                </div>
                    <button onClick={() => {
                        this.dispatchOrder();
                        this.props.closeModal();
                    }} className="meal-details-add-button">add to cart</button>
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
)(Product);
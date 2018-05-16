import React from 'react';
import { Link } from 'react-router-dom';

export default class Product extends React.Component{

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
                        this.props.addToShoppingCart(type, meal, this.state.value, item.menusItem, item.place);
                        this.props.closeModal();
                    }} className="meal-details-add-button">add to cart</button>
                </div>
		);
	}
}
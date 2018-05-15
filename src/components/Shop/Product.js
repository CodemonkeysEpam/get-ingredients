import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../Shared/Button/Button';


class Product extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			value: 1
		}

		this.changeValue = this.changeValue.bind(this);
	}

	increaseValue(){
		if( this.state.value < 1000 ) {
			let newValue = this.state.value + 1;
			this.setState({
				value: newValue
			});
	};
}

	decreaseValue(){
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

	changeValue(evt){
		if( evt.target.value > 0 && evt.target.value < 1000 ){
			let newValue = parseInt(evt.target.value, 10);
			this.setState({
				value: newValue
			});
		}
	}

	dispatchOrder(){
		let order = {
			id: this.props.el.id,
			name: this.props.el.name,
			type: 'shop',
			src: this.props.el.src,
			price: this.props.el.price,
			count: this.state.value
		}
		this.props.onAddToCart(order);
	}

	render(){
		return(
			<div className='product'>
				<div className='product-img'>
					<img src={this.props.el.src} />
				</div>
				<p className='product-title'>{this.props.el.name}</p>
				<p className='product-price'>Price: {this.props.el.price}</p>
				<div className='product-calc'>
					<span onClick={() => this.decreaseValue()}> - </span>
					<input type='number' className='product-amount' value={this.state.value} onChange={this.changeValue}></input>
					<span onClick={() => this.increaseValue()}> + </span>
				</div>
				<div className='product-button'>
					<input type='button' onClick={this.dispatchOrder.bind(this)} value='ADD TO CARD'></input>
				</div>
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

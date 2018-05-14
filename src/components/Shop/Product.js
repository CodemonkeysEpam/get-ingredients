import React from 'react';
import { Button } from '../Shared/Button/Button';

export default class Product extends React.Component{

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
					<Button handleClick={() => this.props.addToShoppingCart("shop", this.props.el, this.state.value)} label="ADD TO CARD"/>
				</div>
			</div>
		);
	}
}
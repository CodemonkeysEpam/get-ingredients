import React from 'react';
import base from '../../services/base';

import './Shop.scss';

export default class Shop extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			currentProduct: [],
			productsList: [],
			tshirtSizes: []
		}
	}

	componentDidMount() {
    this.refProducts = base.bindToState('shop/products', {
      context: this,
      state: 'productsList',
      asArray: true
    });
    this.refSizes = base.bindToState('shop/sizes', {
      context: this,
      state: 'tshirtSizes',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.refProducts);
    base.removeBinding(this.refSizes);
  }

  render () {
    return (
    	<React.Fragment>
    		<div className='page-header'>Become one of us</div>
    	</React.Fragment>
    );
  }
}

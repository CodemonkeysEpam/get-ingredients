import React from 'react';
import base from '../../services/base';

import Product from './Product';
import Tag from './Tag';

import { connect } from 'react-redux';

import './Shop.scss';

class Shop extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			displayedProducts: [],
			productsList: [],
			tshirtSizes: [],
      tags: [],
      activeTag: 'All'
		}

    this.sortingProducts = this.sortingProducts.bind(this);
	}

	componentDidMount() {
    this.refProducts = base.bindToState('shop/products', {
      context: this,
      state: 'productsList',
      asArray: true
    });
    this.refDisplayedProducts = base.bindToState('shop/products', {
      context: this,
      state: 'displayedProducts',
      asArray: true
    });
    this.refSizes = base.bindToState('shop/sizes', {
      context: this,
      state: 'tshirtSizes',
      asArray: true
    });
    this.refTags = base.bindToState('shop/tags', {
      context: this,
      state: 'tags',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.refProducts);
    base.removeBinding(this.refSizes);
  }

  sortingProducts(tag){
    if( tag === 'All' ){
      this.setState({
        displayedProducts: this.state.productsList,
        activeTag: 'All'
      });
    } else {
      let newList = this.state.productsList.filter( el =>
        el.tag.indexOf(tag) !== -1
      );

      this.setState({
        displayedProducts: newList,
        activeTag: tag
      });

    }
  }

  render () {
    return (
    	<React.Fragment>
    		<div className='page-header'>Become one of us</div>
        <div className='container'>
          <div className='sorting'>
            <p>
              <span>Sort by: </span>
                {
                  this.state.tags.map( (el, index) =>
                    <Tag key={index} tag={el} activeTag={this.state.activeTag} key={el} callback={this.sortingProducts} />
                  )

                }
            </p>
          </div>
          <div className='products-container'>
            {
              this.state.displayedProducts.map( el =>
                <Product key={el.id} el={el} addToShoppingCart={this.props.addToShoppingCart}/>
              )
            }
          </div>
        </div>
    	</React.Fragment>
    );
  }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(Shop);

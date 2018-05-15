import React from 'react';
import base from '../../services/base';
import Product from './Product';

import './Shop.scss';

export default class Shop extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			displayedProducts: [],
			productsList: [],
			tshirtSizes: [],
      activeTag: 'All'
		}

    this.sortingProducts = this.sortingProducts.bind(this);
	}

	componentDidMount() {
    this.refProducts = base.bindToState('shop/products', {
      context: this,
      state: 'productsList',
      asArray: true,
      then() {
        this.setState({displayedProducts: this.state.productsList})
      }
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

  changeActiveTag = (tag) => {
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

  formTagsList = () => {
    let tagsArr = [];
    this.state.productsList.forEach(item => {
        if(tagsArr.indexOf(item.tag) === -1) {
            tagsArr.push(item.tag);
        }
    });
    return tagsArr;
  }

  render () {
    return (
    	<React.Fragment>
    		<div className='page-header'>Become one of us</div>
        <div className='container'>
          <div className='sorting'>
            <p>
              <span>Sort by: </span>
              <span 
                className={this.state.activeTag === "All" ? "sorting-tags-active" : "sorting-tags"}
                onClick={()=>this.changeActiveTag("All")}
                >All</span>
                {this.formTagsList().map((tag, index) => (
                    <span key={index}
                    className={this.state.activeTag === tag ? "sorting-tags-active" : "sorting-tags"}
                    onClick={()=>this.changeActiveTag(tag)}
                    >{tag}</span>
                ))}
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

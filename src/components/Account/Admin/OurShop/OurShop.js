import React from 'react';
import base from '../../../../services/base';
import { Link } from 'react-router-dom';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            products: [],
            displayedProducts: [],
            activeTag: "All"
        }
    }

    componentDidMount() {
        this.refProducts = base.bindToState(`shop/products`, {
            context: this,
            state: 'products',
            asArray: true,
            then() {
                this.setState({displayedProducts: this.state.products})
            }
          });
      }

      changeActiveTag = (tag) => {
        if( tag === 'All' ){
            this.setState({
              displayedProducts: this.state.products,
              activeTag: 'All'
            });
          } else {
            let newList = this.state.products.filter( el => 
              el.status.indexOf(tag) !== -1
            );
            this.setState({
              displayedProducts: newList,
              activeTag: tag
            });
      
          }
      }

      
    
      componentWillUnmount() {
          base.removeBinding(this.refProducts);
      }

    formTagsList = () => {
        let tagsArr = [];
        this.state.products.forEach(item => {
            if(tagsArr.indexOf(item.tag) === -1) {
                tagsArr.push(item.tag);
            }
        });
        return tagsArr;
    }

    render() {
        return (
            <div className="orders-container">
                <div className="title">Products</div>
                {this.state.products.length > 0 ?
                <React.Fragment>
                    <div className="sorting">
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
                    </div>
                    <div className="titles">
                        <div className="date">Date</div>
                        <div className="product">Product</div>
                        <div className="status">Status</div>
                        <div className="total">Total</div>
                    </div>
                    
                    {this.state.displayedProducts.map(order => (
                        <div className="item" key={order.id}>
                            <div className="date">{order.name}</div>
                            <div className="product">
                            <div className="name">{order.tag}</div>
                            <div className="seller">User:&#160;John Boyko</div>
                            <div className="mult"><span>${order.productPrice}</span>x{order.productCount}</div>
                            </div>
                            <div className="status">{order.status}</div>
                            <div className="total">${order.productPrice * order.productCount}</div>
                        </div>
                    ))}
                </React.Fragment>
                :
                <div>No products</div>
                }
            </div>
        )
    }
}
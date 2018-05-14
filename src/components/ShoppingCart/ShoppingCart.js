import React from 'react';
import MyOrders from "../Account/MyOrders/MyOrders";
import "./ShoppingCart.scss";
import { Link } from 'react-router-dom';

export default class ShoppingCart extends React.Component {
  getTotalPrice = (items) => {
    var total = 0;
    items.forEach(item => {
      total += item.price * item.count;
    });
    return total;
  }
  
  render () {
    return (
        <div className="main-section">
            <div className="page-heading">Shopping Cart</div>
            <div className="container">
            {this.props.shoppingCart.length > 0 ?
              <div className="shopping-cart-list">
                <div className="titles">
                  <div className="product">Product</div>
                  <div className="quantity">Quantity</div>
                  <div className="price">Price</div>
                  <div className="subtotal">Subtotal</div>
                </div>
                {this.props.shoppingCart.map(item => (
                  <div className="item" key={item.id}>
                    <div className="product">
                      <img src={item.src} alt={item.name} />
                      <div className="body">
                        <div className="name">{item.name}</div>
                        <div className="seller">Seller:&#160;
                        <Link to={item.type==="shop" ? "/": `/${item.type}/${item.place.id}`}>
                          {item.type==="shop" ? "Meat is Life": item.place.name}
                        </Link>
                        </div>
                      </div>
                    </div>
                    <div className="quantity">
                      <div className='product-calc'>
                        <span onClick={() => this.props.decreaseCountCart(item)}> - </span> 
                        <input type='number' className='product-amount' value={item.count} onChange={(event)=>this.props.changeCountCart(event.target.value, item)}></input>
                        <span onClick={() => this.props.increaseCountCart(item)}> + </span>
                      </div>
                    </div>
                    <div className="price">${item.price}</div>
                    <div className="subtotal">${item.price * item.count}</div>
                    <div className="delete"><i className="fa fa-times" onClick={()=>this.props.deleteFromCart(item)}></i></div>
                  </div>
                ))
                }
                
                <div className="total">
                  Total: ${this.getTotalPrice(this.props.shoppingCart)}
                </div>
                <div className="continue">
                  <Link to="/order">Continue</Link>
                </div>
              </div>
              :
              <div>Shopping cart is empty</div>
            }
            </div>
            
        </div>
    );
  }
}
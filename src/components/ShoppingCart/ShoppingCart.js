import React from 'react';
import "./ShoppingCart.scss";
import { Link } from 'react-router-dom';
import { Button } from '../Shared/Button/Button';
import { connect } from 'react-redux';

class ShoppingCart extends React.Component {
  getTotalPrice = (items) => {
    var total = 0;
    items.forEach(item => {
      total += item.price * item.count;
    });
    return Math.round(total * 100) / 100;
  }

  deleteOrder(item) {
    console.log(item);
      this.props.onDeleteFromCart(item);
  }

  decreaseCountValue(item) {
      if(item.count > 1){
          item.count--;
          this.props.onUpdateOrder(item);
      }
  }
  increaseCountValue(item) {
      if(item.count < 1000){
          item.count++;
          this.props.onUpdateOrder(item);
      }
  }
  changeCountValue(value, item) {
      if(value){
          item.count = value;
          this.props.onUpdateOrder(item);
      } else {
          value = item.value
      }
  }

  render () {
    return (
        <div className="main-section">
            <div className="page-heading">Shopping Cart</div>
            <div className="container">
            {this.props.orders.length > 0 ?
              <div className="shopping-cart-list">
                <div className="titles">
                  <div className="product">Product</div>
                  <div className="quantity">Quantity</div>
                  <div className="price">Price</div>
                  <div className="subtotal">Subtotal</div>
                </div>
                {this.props.orders.map(item => (
                  <div className="item" key={item.id + item.placeId} >
                    <div className="product">
                      <div className='product-img-container'>
                        <img src={item.src} alt={item.name} />
                      </div>
                      <div className="body">
                        <div className="name">{item.name}</div>
                        <div className="seller">Seller:&#160;
                        <Link to={item.type==="shop" ? "/": `/${item.type}/${item.placeId}`}>
                          {item.type==="shop" ? "Meat is Life": item.placeName}
                        </Link>
                        </div>
                      </div>
                    </div>
                    <div className="quantity">
                      <div className='product-calc'>
                        <span onClick={() => this.decreaseCountValue(item)}> - </span>
                        <input type='number' className='product-amount' value={item.count} onFocus={(event)=>event.target.value=''} onChange={(event)=>this.changeCountValue(event.target.value, item)} onBlur={(event)=>{event.target.value=item.count}}></input>
                        <span onClick={() => this.increaseCountValue(item)}> + </span>
                      </div>
                    </div>
                    <div className="price">${item.price}</div>
                    <div className="subtotal">${Math.round(item.price * item.count * 100) / 100}</div>
                    <div className="delete"><i className="fa fa-times" onClick={()=>this.deleteOrder(item)}></i></div>
                  </div>
                ))
                }

                <div className="total">
                  Total: ${this.getTotalPrice(this.props.orders)}
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

export default connect(
    state => ({
        orders: state.orders.orders
    }),
    dispatch => ({
        onDeleteFromCart: (order) => {
            dispatch({type: "DELETE_ORDER", payload: order});
        },
        onUpdateOrder: (order) => {
            dispatch({type: "UPDATE_ORDER", payload: order})
        }
    })
)(ShoppingCart)

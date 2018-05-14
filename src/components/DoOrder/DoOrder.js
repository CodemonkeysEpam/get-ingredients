import React from 'react';
import MyOrders from "../Account/MyOrders/MyOrders";
import "./DoOrder.scss";
import { Link } from 'react-router-dom';
import firebase from "firebase";
import base from "../../services/base";
import { withRouter } from "react-router";

class DoOrder extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            name: firebase.auth().currentUser.displayName,
            address: "",
            city: "",
            phone: "",
            postal: "",
            user: firebase.auth().currentUser,
            isError: ""
        }
    }


    changeAddress = (event) => {
        this.setState({
            address: event.target.value
        });
    }

    changeCity = (event) => {
        this.setState({
            city: event.target.value
        });
    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    changePhone = (event) => {
        this.setState({
            phone: event.target.value
        });
    }

    changePostal = (event) => {
        this.setState({
            postal: event.target.value
        });
    }

  getTotalPrice = (items) => {
    var total = 0;
    items.forEach(item => {
      total += item.price * item.count;
    });
    return total;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    if(!this.state.user) {
        return this.setState({isError: "Please sign in to make order"});
    }

    this.props.shoppingCart.map((item, index) => { 
        var generatedKey = firebase.database().ref().child('orders').push().key;
        base.update(`orders/${generatedKey}`, {
            data: {
                id: generatedKey,
                productId: item.id,
                productName: item.name,
                productCount: item.count,
                productPrice: item.price,
                totalPrice: item.count * item.price,
                placeId: item.type ==="shop" ? "shop" : item.place.id,
                placeName: item.type ==="shop" ? "Meat is Life" : item.place.name,
                type: item.type,
                date: Date.now(),
                deliveryinfo: {
                    contactName: this.state.name,
                    address: this.state.address,
                    city: this.state.city,
                    phone: this.state.phone,
                    postal: this.state.postal,
                },
                userId: this.state.user.uid,
                status: 0,
            }}).
            then((err) => {
                if(this.props.shoppingCart.length === index + 1) {
                    this.props.history.push('/account/orders');
                    this.props.clearCart();
                }
            }
        );
    });
}
  
  render () {
    return (
        <div className="main-section">
            <div className="page-heading">Confirm your order</div>
            <div className="container">
            {this.props.shoppingCart.length > 0 ?
              <div className="shopping-cart-list">
                 <form onSubmit={this.handleSubmit}>
                    <div className="do-order-container">
                    <div className="form">
                        <h2>Shipping information</h2>
                
                        <div className="label">
                            <div className="title">Contact name:</div>
                            <input type="text" onChange={this.changeName} placeholder="Enter contact name" value={this.state.name} required/>
                        </div>
                        <div className="label">
                            <div className="title">Phone number:</div>
                            <input type="text" onChange={this.changePhone} placeholder="Enter phone number" value={this.state.phone} required/>
                        </div>
                        <div className="label">
                            <div className="title">City:</div>
                            <input type="text" onChange={this.changeCity} placeholder="Enter city" value={this.state.city} required/>
                        </div>
                        <div className="label">
                            <div className="title">Address:</div>
                            <input type="text" onChange={this.changeAddress} placeholder="Enter address" value={this.state.address} required/>
                        </div>
                        <div className="label">
                            <div className="title">Postal code:</div>
                            <input type="text" onChange={this.changePostal} placeholder="Enter postal code" value={this.state.postal} required/>
                        </div>
                    </div>


                    <div className="shopping-cart">
                    <h2>Your order</h2>
                    {this.props.shoppingCart.map(item => (
                    <div className="items" key={item.id}>
                        <div className="product">{item.name}</div>
                        <div className="quantity">{item.count}</div>
                    </div>
                    ))}
                    <div className="total">
                        Total: ${this.getTotalPrice(this.props.shoppingCart)}
                    </div>
                    </div>
                </div>
                    
                

                    <div className="do-order">
                        <button>Place order</button>
                    </div>
                    {this.state.isError && <p className="error-message">{this.state.isError}</p>}
                    
                </form>
                
              </div>
              :
              <div>Shopping cart is empty</div>
            }
            </div>
            
        </div>
    );
  }
}

export default withRouter(DoOrder);
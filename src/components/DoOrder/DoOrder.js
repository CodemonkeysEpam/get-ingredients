import React from 'react';
import MyOrders from "../Account/MyOrders/MyOrders";
import "./DoOrder.scss";
import { Link } from 'react-router-dom';
import firebase from "firebase";
import base from "../../services/base";
import { withRouter } from "react-router";
import { connect } from 'react-redux';

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
    return Math.round(total * 100) / 100;
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
                placeId: item.type ==="shop" ? "shop" : item.placeId,
                placeName: item.type ==="shop" ? "Meat is Life" : item.placeName,
                type: item.type,
                date: this.getFormattedTime(),
                deliveryInfo: {
                    contactName: this.state.name,
                    address: this.state.address,
                    city: this.state.city,
                    phone: this.state.phone,
                    postal: this.state.postal,
                },
                userId: this.state.user.uid,
                status: "Open",
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

getFormattedTime = () =>{
    var today = new Date();
    var Y = today.getFullYear();
    var M = today.getMonth() + 1;
    var D = today.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    return `${D < 10 ? "0" : ""}${D}/${M < 10 ? "0" : ""}${M}/${Y} ${h}:${m < 10 ? "0" : ""}${m}`;
}

  render () {
    return (
        <div className="main-section">
            <div className="page-heading">Confirm your order</div>
            <div className="container">
            {this.props.orders.length > 0 ?
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
                    {this.props.orders.map(item => (
                    <div className="items" key={item.id}>
                        <div className="product">{item.name}</div>
                        <div className="quantity">{item.count}</div>
                    </div>
                    ))}
                    <div className="total">
                        Total: ${this.getTotalPrice(this.props.orders)}
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

export default withRouter(
    connect(
        state => ({
            orders: state.orders.orders
        }),
        dispatch => ({
            onClearCart: () => {
                dispatch({type:"CLEAR"})
            }
        })
    )(DoOrder)
);

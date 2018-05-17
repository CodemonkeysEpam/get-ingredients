import React from 'react';
import base from '../../../../../services/base';
import { Link } from 'react-router-dom';

export default class MyOrders extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            orders: [],
            displayedOrders: [],
            activeTag: "All"
        }
    }

    componentDidMount() {
        this.refOrders = base.bindToState(`orders`, {
            context: this,
            state: 'orders',
            asArray: true,
            queries: {
                orderByChild: 'placeId',
                equalTo: this.props.placeId
            },
            then() {
                this.setState({displayedOrders: this.state.orders})
            }
          });
      }

      changeActiveTag = (tag) => {
        if( tag === 'All' ){
            this.setState({
              displayedOrders: this.state.orders,
              activeTag: 'All'
            });
          } else {
            let newList = this.state.orders.filter( el => 
              el.status.indexOf(tag) !== -1
            );
            this.setState({
              displayedOrders: newList,
              activeTag: tag
            });
      
          }
      }
    
      componentWillUnmount() {
          base.removeBinding(this.refOrders);
      }

      checkOrder = (order) => {
        base.update(`/orders/${order.id}`, {
            data: {
                id: order.id,
                placeId: order.placeId,
                placeName: order.placeName,
                productCount: order.productCount,
                productId: order.productId,
                productName: order.productName,
                productPrice: order.productPrice,
                status: "Completed",
                type: order.type,
                userId: order.userId
            }}).then(()=>{
                this.changeActiveTag(this.state.activeTag);
            })
      }

    render() {
        return (
            <div className="orders-container">
                <div className="title">Orders</div>
                {this.state.orders.length > 0 ?
                <React.Fragment>
                    <div className="sorting">
                        <span>Sort by: </span>
                        <span 
                        className={this.state.activeTag === "All" ? "sorting-tags-active" : "sorting-tags"}
                        onClick={()=>this.changeActiveTag("All")}
                        >All</span>
                        <span 
                        className={this.state.activeTag === "Open" ? "sorting-tags-active" : "sorting-tags"}
                        onClick={()=>this.changeActiveTag("Open")}
                        >Open</span>
                        <span 
                        className={this.state.activeTag === "Completed" ? "sorting-tags-active" : "sorting-tags"}
                        onClick={()=>this.changeActiveTag("Completed")}
                        >Completed</span>
                    </div>
                    <div className="titles">
                        <div className="date">Date</div>
                        <div className="product">Product</div>
                        <div className="status">Status</div>
                        <div className="total">Total</div>
                    </div>
                    
                    {this.state.displayedOrders.slice(0).reverse().map(order => (
                        <div className="item" key={order.id}>
                            <div className="date">{order.date}</div>
                            <div className="product">
                            <div className="name">{order.productName}</div>
                            <div className="seller">User:&#160;{order.deliveryInfo.contactName}</div>
                            <div className="seller">Phone:&#160;{order.deliveryInfo.phone}</div>
                            <div className="seller">Postal:&#160;{order.deliveryInfo.postal}</div>
                            <div className="seller">City:&#160;{order.deliveryInfo.city}</div>
                            <div className="seller">Address:&#160;{order.deliveryInfo.address} </div>
                            <div className="mult"><span>${order.productPrice}</span>x{order.productCount}</div>
                            </div>
                            <div className="status">{order.status} {order.status === "Open" ?
                            <React.Fragment>
                            (<i className="fa fa-check" style={{cursor: "pointer"}} onClick={()=>this.checkOrder(order)}></i>)
                            </React.Fragment> : null}
                            </div>
                            <div className="total">${Math.round(order.productPrice * order.productCount * 100) / 100}</div>
                        </div>
                    ))}
                </React.Fragment>
                :
                <div>No orders</div>
                }
            </div>
        )
    }
}
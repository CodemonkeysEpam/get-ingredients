import React from 'react';
import base from '../../../../services/base';
import { Link } from 'react-router-dom';

export default class Orders extends React.Component {
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
                            <div className="seller">Seller:&#160;
                                <Link to={order.type==="shop" ? "/": `/${order.type}/${order.placeId}`}>
                                {order.type==="shop" ? "Meat is Life": order.placeName}
                                </Link>
                            </div>
                            <div className="seller">User:&#160;
                            {order.deliveryInfo.contactName}
                            </div>
                            <div className="mult"><span>${order.productPrice}</span>x{order.productCount}</div>
                            </div>
                            <div className="status">{order.status}</div>
                            <div className="total">${order.productPrice * order.productCount}</div>
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
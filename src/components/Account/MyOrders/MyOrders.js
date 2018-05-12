import React from 'react';
import './MyOrders.scss';

export default class MyOrders extends React.Component {

    renderOrderItem(orderItem) {
        return <div className="orders-item">
                   <div>{orderItem.name}</div>
                   <div>{orderItem.price}</div>
                   <div>{orderItem.count}</div>
                   <div>{orderItem.price * orderItem.count}</div>
               </div>
    }

    renderOrders() {
        if(!this.props.ordersList) {
            return <div className="empty-order">No orders</div>
        }  else {
            return this.props.ordersList.map(orderItem => {
                return this.renderOrderItem(orderItem)
            })
        }
    }

    render() {
        return (
            <div className="orders-container">
                <div className="orders-heading">
                    <div>Product</div>
                    <div>Price</div>
                    <div>Count</div>
                    <div>Total</div>
                </div>
                {this.renderOrders()}
            </div>
        )
    }
}
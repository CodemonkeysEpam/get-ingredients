import React from 'react';
import './Restaurant.scss'

export default class Restaurant {

    render() {
        return (
            <div className="restaurant">
                <img className="restaurant-logo" src={this.props.logoUrl} alt={this.props.name} >
                <div className="place-name">{this.props.name}</div>
                {this.props.address && <div className="place-address">{this.props.address}</div>}
                {this.props.showOnMapClick && <button className="restaurant-show-on-map" onClick={() => {this.props.showOnMapClick(this)}}></button>}
                <button className="restaurant-details" onClick={() => {this.props.detailsClick(this)}}></button>
            </div>
        )
    }
}
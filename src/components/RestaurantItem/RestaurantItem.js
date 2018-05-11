import React from 'react';
import './RestaurantItem.scss'
import { Link } from 'react-router-dom'

const RestaurantItem = (props) => {
    console.log("restauant item", props);
        return (
            <div className="restaurant">
                <img className="restaurant-logo" src={props.logoUrl} alt={props.name} />
                <div className="place-name">{props.name}</div>
                {props.address && <div className="place-address">{props.address}</div>}
                {props.showOnMapClick && <button className="restaurant-item-button" onClick={props.showOnMapClick}>Show on map</button>}
                <Link to={`/restaurant/${props.id}`}><button className="restaurant-item-button" onClick={props.detailsClick}>Details</button></Link>
            </div>
        )
}

export {
    RestaurantItem
}

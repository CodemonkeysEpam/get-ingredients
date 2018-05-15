import React from 'react';
import './RestaurantItem.scss';
import { Link } from 'react-router-dom';
import { Button } from '../Shared/Button/Button';

const RestaurantItem = (props) => {
        return (
            <div className="restaurant">
                <img className="restaurant-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" alt={props.name} />
                <div className="restaurant-name">{props.name}</div>
                {props.address && <div className="restaurant-address">{props.address}</div>}
                {props.showOnMapClick && <Button styles="restaurant-item-button" handleClick={props.showOnMapClick} label="Show on map"/>}
                <Link to={`/restaurant/${props.id}/${props.type}`}><Button styles="restaurant-item-button" handleClick={props.detailsClick} label="Details"/></Link>
            </div>
        )
}

const RestaurantItemMap = (props) => {
    return (
        <React.Fragment>
            <img className="restaurant-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" alt={props.name} />
            <div className="restaurant-body">
                <div className="restaurant-name">{props.name}</div>
                <div className="restaurant-address">{props.address}</div>
            </div>
        </React.Fragment>
    )
}

export {
    RestaurantItem,
    RestaurantItemMap
}

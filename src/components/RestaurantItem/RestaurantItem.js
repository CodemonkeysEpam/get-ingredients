import React from 'react';
import './RestaurantItem.scss';
import { Link } from 'react-router-dom';
import { Button } from '../Shared/Button/Button';

const RestaurantItem = (props) => {
    let url = 'restaurant';
    if(props.type === "meal"){
        url = "restaurant"
    } else if (props.type === "meat"){
        url = "meat-shop"
    }
        return (
            <div className="restaurant">{console.log(props)}
                <img className="restaurant-logo" src="https://cdn.shopify.com/s/files/1/2047/5173/products/Anime-Miss-Kobayashi-s-Dragon-Maid-Tohru-Cosplay-Props-Dragon-Tail-Sleep-Pillow-Multifunction-Plush-Doll_0f8fbfd0-a545-46ef-b565-dda7319b0112_800x.jpg?v=1498479728" alt={props.name} />
                <div className="restaurant-name">{props.name}</div>
                {props.address && <div className="restaurant-address">{props.address}</div>}
                {props.showOnMapClick && <Button styles="restaurant-item-button" handleClick={props.showOnMapClick} label="Show on map"/>}
                <Link to={`/${url}/${props.id}`}><Button styles="restaurant-item-button" handleClick={props.detailsClick} label="Details"/></Link>
            </div>
        )
}

const RestaurantItemMap = (props) => {
    return (
        <React.Fragment>
            <img className="restaurant-logo" src="https://cdn.shopify.com/s/files/1/2047/5173/products/Anime-Miss-Kobayashi-s-Dragon-Maid-Tohru-Cosplay-Props-Dragon-Tail-Sleep-Pillow-Multifunction-Plush-Doll_0f8fbfd0-a545-46ef-b565-dda7319b0112_800x.jpg?v=1498479728" alt={props.name} />
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

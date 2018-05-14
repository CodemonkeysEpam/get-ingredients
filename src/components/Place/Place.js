import React from 'react';
import { Button } from '../Shared/Button/Button';

const Place = (props) => {
    let price, add, phone;

    if (props.price){
        price = <div className="place-price">{props.price} $</div>
    }
    if (props.addCard){
        add = <Button styles="place-button" label="ADD TO CARD"/>
    }
    if (props.phone){
        phone = <Button styles="place-button" label="PHONE"/>
    }

    return (
        <div onMouseEnter={props.MouseEnter} onMouseLeave={props.MouseLeave} className={"place-item"}>
            <div className="flex-item-info">
                <i className="fa fa-map-marker fa-3x" aria-hidden="true" onClick={props.Click}></i>
                <div className="place-info">
                    <div className="place-name">{props.name}</div>
                    <div className="place-address">{props.address}</div>
                </div>
            </div>
            <div className="place-description">{props.description}</div>
            {price}
            {add}
            {phone}
        </div> 

    )
}

export default Place;
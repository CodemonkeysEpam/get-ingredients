import React from 'react';

const Place = (props) => {
    let price, add, phone;

    if (props.price){
        price = <div className="place-price">{props.price} $</div>
    }
    if (props.addCard){
        add = <button className="place-button">ADD TO CARD</button>
    }
    if (props.phone){
        phone = <button className="place-button">PHONE</button>
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
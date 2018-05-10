import React from 'react';

const Place = (props) => {
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
        </div> 
    )
}

export default Place;
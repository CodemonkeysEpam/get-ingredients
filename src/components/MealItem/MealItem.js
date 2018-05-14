import React from 'react';
import './MealItem.scss';
import { Button } from '../Shared/Button/Button';

const MealItem = (props) => {
        return(
            <div className="mealItem">
                <div className="meal-name">{props.meal.name}</div>
                <div className='meal-img'><img src={props.meal.src} /></div>
                {props.place && <div className='meal-place'>{props.place.name}</div>}
                {props.price && <div className='meal-price'>{`${props.price}$`}</div>}
                {props.addToCartButton && <Button label="ADD TO CART"/>}
                {props.detailsButtonClick && <Button handleClick={props.detailsButtonClick} label="DETAILS"/>}
            </div>
        )
}

export {
    MealItem
}

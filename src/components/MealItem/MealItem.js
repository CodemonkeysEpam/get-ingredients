import React from 'react';
import './MealItem.scss';

const MealItem = (props) => {
        return(
            <div className="mealItem">
                <div className="meal-name">{props.meal.name}</div>
                <div className='meal-img'><img src={props.meal.src} /></div>
                {props.place && <div className='meal-place'>{props.place.name}</div>}
                {props.price && <div className='meal-price'>{`${props.price}$`}</div>}
                <button>ADD TO CARD</button>
            </div>
        )
}

export {
    MealItem
}

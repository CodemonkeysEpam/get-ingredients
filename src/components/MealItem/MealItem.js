import React from 'react';
import './MealItem.scss';

export default class MealItem extends React.Component {

    render() {
        console.log(this.props)
        return(
            <div className="mealItem">
                <div className="meal-name">
                    {this.props.meal.name}
                </div>
                <div className='meal-img'>
					<img src={this.props.meal.src} />
				</div>
                <div className='meal-ingredients'>
                    Ingredients:
				</div>
                <div className='meal-price'>
                    {`${this.props.meal.price}$`}
				</div>
                <input type='button' value='ADD TO CARD'></input>
            </div>
        )
    }
}

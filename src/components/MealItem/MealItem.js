import React from 'react';
import './MealItem.scss';

export default class MealItem extends React.Component {

    render() {
        return(
            <div>
            {this.props.meal.name}
            </div>
        )
    }
}

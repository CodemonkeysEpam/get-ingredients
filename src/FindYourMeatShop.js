import React from 'react';
import FindLocation from './FindLocation';
import MeatShops from './MeatShops';

export default class FindYourMeatShop extends React.Component {
    render () {
        return (
            <div id="find-meat-shop-body">   
                <div className="meat-icons">
                    <div className="meat-icons-item"><img src="/img/meat_icons/beef.png" alt="Beef" /></div>
                    <div className="meat-icons-item"><img src="/img/meat_icons/pork.png" alt="Pork" /></div>
                    <div className="meat-icons-item"><img src="/img/meat_icons/lamb.png" alt="Lamb" /></div>
                    <div className="meat-icons-item"><img src="/img/meat_icons/chicken.png" alt="Chicken" /></div>
                    <div className="meat-icons-item"><img src="/img/meat_icons/sea_food.png" alt="Sea food" /></div>
                </div>
                <div id="find-your-place-body">
                    <FindLocation list={MeatShops.MeatShopsList} />
                </div>
            </div>
        );
    }
}
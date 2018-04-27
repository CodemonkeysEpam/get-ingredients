import React from 'react';
import FindFoodTab from './FindFoodTab';
import FindLocation from './FindLocation';
import Meat from './Meat';
import MeatShops from './MeatShops';

export default class MeatSection extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          currentTab: 'FindYourMeat'
      }
  }

  handleClick (tab) {
    if (tab === 'FindYourPlace') {
      this.setState({
          currentTab: 'FindYourPlace'
      });  
    } else {
      this.setState({
          currentTab: 'FindYourMeat'
      });   
    }
}

displayTab () {
    if (this.state.currentTab === 'FindYourPlace') {
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
    } else {
        return (
            <div id="find-your-meal-body">
                <FindFoodTab itemsList={Meat.MeatList} placesList={MeatShops.MeatShopsList} />
            </div>
        )
    }
}

  render () {
    return (
        <div className="main-section">
        <div className="page-heading">Meat delivery</div>
            <div className="find-tabs">
                <div className="container">
                    <div className="flex-tabs">
                        <div id="find-your-place" className="find-tab tab-red" onClick={() => this.handleClick('FindYourPlace')}>Find meat shop</div>
                        <div id="find-your-meal" className="find-tab tab-yellow-active" onClick={() => this.handleClick('FindYourMeat')}>Find your meat</div>
                    </div>
                </div>
            </div>
            <div className="container">
            {this.displayTab()}
            </div>
        </div>
    );
  }
}
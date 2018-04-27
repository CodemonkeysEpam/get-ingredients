import React from 'react';
import FindFoodTab from './FindFoodTab';
import FindLocationTab from './FindLocationTab';
import Meat from './Meat';
import MeatShops from './MeatShops';
import Menus from './Menus';

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
                <div class="meat-icons">
                    <div class="meat-icons-item"><div class="meat-icons-item-icon"><img src="img/meat_icons/beef.png" alt="Beef" /></div><div class="meat-icons-item-name">Beef</div></div>
                    <div class="meat-icons-item"><div class="meat-icons-item-icon meat-icons-item-icon-active"><img src="img/meat_icons/pork.png" alt="Pork" /></div><div class="meat-icons-item-name">Pork</div></div>
                    <div class="meat-icons-item"><div class="meat-icons-item-icon"><img src="img/meat_icons/lamb.png" alt="Lamb" /></div><div class="meat-icons-item-name">Lamb</div></div>
                    <div class="meat-icons-item"><div class="meat-icons-item-icon"><img src="img/meat_icons/chicken.png" alt="Chicken" /></div><div class="meat-icons-item-name">Chicken</div></div>
                    <div class="meat-icons-item"><div class="meat-icons-item-icon"><img src="img/meat_icons/sea_food.png" alt="Sea food" /></div><div class="meat-icons-item-name">Sea food</div></div>
                </div>
                <div id="find-your-place-body">
                    <FindLocationTab list={MeatShops.MeatShopsList} />
                </div>
            </div>
        );
    } else {
        return (
            <div id="find-your-meal-body">
                <FindFoodTab itemsList={Meat.MeatList} placesList={MeatShops.MeatShopsList} menusList={Menus.MenusList}/>
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
                    <div id="find-your-place" className={this.state.currentTab === 'FindYourPlace' ? "find-tab tab-red-active": "find-tab tab-red"} onClick={() => this.handleClick('FindYourPlace')}>Find your place</div>
                    <div id="find-your-meal" className={this.state.currentTab === 'FindYourMeat' ? "find-tab tab-yellow-active": "find-tab tab-yellow"} onClick={() => this.handleClick('FindYourMeat')}>Find your meal</div>
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
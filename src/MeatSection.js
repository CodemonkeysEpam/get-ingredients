import React from 'react';
import FindFoodTab from './FindFoodTab';
import FindLocationTab from './FindLocationTab';
import Meat from './Meat';
import MeatShops from './MeatShops';
import Menus from './Menus';
import './styles/MeatSection.scss';

export default class MeatSection extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          currentTab: 'findyourmeat'
      }
  }

  handleClick (tab) {
    this.props.history.push(`/meat?${tab}`);
}

displayTab () {
    if (this.state.currentTab === 'findmeatshop') {
        return (
            <div>
                <div className="meat-icons">
                    <div className="item"><div className="item-icon"><img src="img/meat_icons/beef.png" alt="Beef" /></div><div className="item-name">Beef</div></div>
                    <div className="item"><div className="item-icon active"><img src="img/meat_icons/pork.png" alt="Pork" /></div><div className="item-name">Pork</div></div>
                    <div className="item"><div className="item-icon"><img src="img/meat_icons/lamb.png" alt="Lamb" /></div><div className="item-name">Lamb</div></div>
                    <div className="item"><div className="item-icon"><img src="img/meat_icons/chicken.png" alt="Chicken" /></div><div className="item-name">Chicken</div></div>
                    <div className="item"><div className="item-icon"><img src="img/meat_icons/sea_food.png" alt="Sea food" /></div><div className="item-name">Sea food</div></div>
                </div>
                <FindLocationTab list={MeatShops.MeatShopsList} />
            </div>
        );
    } else {
        return (
            <div>
                <FindFoodTab itemsList={Meat.MeatList} placesList={MeatShops.MeatShopsList} menusList={Menus.MenusList}/>
            </div>
        )
    }
}

static getDerivedStateFromProps(nextProps, prevState) {
    return {
        currentTab: nextProps.location.search === "?findmeatshop" ? "findmeatshop" : "findyourmeat"
    };
  }

  render () {
    return (
        <div className="main-section">
        <div className="page-heading">Meat delivery</div>
            <div className="find-tabs">
                <div className="container">
                    <div className="flex-tabs">
                    <a href="#" id="find-your-place" className={this.state.currentTab === 'findmeatshop' ? "find-tab tab-red active": "find-tab tab-red"} onClick={() => this.handleClick('findmeatshop')}>Find meat shop</a>
                    <a href="#" id="find-your-meal" className={this.state.currentTab === 'findyourmeat' ? "find-tab tab-yellow active": "find-tab tab-yellow"} onClick={() => this.handleClick('findyourmeat')}>Find your meat</a>
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

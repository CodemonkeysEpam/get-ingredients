import React from 'react';
import { Link } from 'react-router-dom';
import base from "../../services/base";
import './MeatSection.scss';
import FindFoodTab from '../FindFoodTab/FindFoodTab';
import FindLocationTab from '../FindLocationTab/FindLocationTab';

export default class MeatSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 'findyourmeat',
            shopsList: [],
            meatList: [],
            productsList: [],
            specialList: []
        }
    }

componentDidMount() {
  this.refShops = base.syncState(`meat/shops`, {
      context: this,
      state: 'shopsList',
      asArray: true
    });
  this.refMeat = base.syncState(`meat/meat`, {
      context: this,
      state: 'meatList',
      asArray: true
    });
  this.refProducts = base.syncState(`meat/products`, {
      context: this,
      state: 'productsList',
      asArray: true
    });
  this.refSpecial = base.syncState(`meat/special`, {
      context: this,
      state: 'specialList',
      asArray: true
    });

}

componentWillUnmount() {
    base.removeBinding(this.refShops);
    base.removeBinding(this.refMeat);
    base.removeBinding(this.refProducts);
}

displayTab () {
    if (this.state.currentTab === 'findmeatshop') {
        return (
            <React.Fragment>
                <div className="meat-icons">
                    <div className="item"><div className="item-icon"><img src="img/meat_icons/beef.png" alt="Beef" /></div><div className="item-name">Beef</div></div>
                    <div className="item"><div className="item-icon active"><img src="img/meat_icons/pork.png" alt="Pork" /></div><div className="item-name">Pork</div></div>
                    <div className="item"><div className="item-icon"><img src="img/meat_icons/lamb.png" alt="Lamb" /></div><div className="item-name">Lamb</div></div>
                    <div className="item"><div className="item-icon"><img src="img/meat_icons/chicken.png" alt="Chicken" /></div><div className="item-name">Chicken</div></div>
                    <div className="item"><div className="item-icon"><img src="img/meat_icons/sea_food.png" alt="Sea food" /></div><div className="item-name">Sea food</div></div>
                </div>
                <div className="find-tab-body">
                    {this.state.shopsList.length > 0 ?
                    <FindLocationTab list={this.state.shopsList} />
                    :
                    <div>...</div>}
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <div className="find-tab-body">
                {this.state.meatList.length > 0 && this.state.shopsList.length > 0 && this.state.productsList.length > 0 ?
                <FindFoodTab 
                    itemsList={this.state.meatList} 
                    placesList={this.state.shopsList}
                    menusList={this.state.productsList}
                    specialOffers = {false}
                    specialList={this.state.specialList} 
                />
                :
                <div>...</div>}
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
                        <Link to="/meat?findmeatshop" className={this.state.currentTab === 'findmeatshop' ? "find-tab tab-red active": "find-tab tab-red"}>Find meat shop</Link>
                        <Link to="/meat?findyourmeal" className={this.state.currentTab === 'findyourmeat' ? "find-tab tab-yellow active": "find-tab tab-yellow"}>Find your meat</Link>
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

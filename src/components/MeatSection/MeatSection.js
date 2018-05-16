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
                <div className="find-tab-body">
                    {this.state.shopsList.length > 0 ?
                    <FindLocationTab list={this.state.shopsList} type={'meat'}/>
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

import React from 'react';
import base from '../../../services/base';
import AddPartners from "./AddPartners/AddPartners";
import AddProduct from "./PartnersItem/Products/AddProduct";
import PartnersItem from "./PartnersItem/PartnersItem";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

class Partners extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            currentTab: 'Partners',
            placesList: [],
            shopsList: [],
            mealsList: [],
            menusList: []
        }
    }
  
    handleClick (tab) {
      this.setState({
          currentTab: tab
      });
    }

    componentDidMount() {
        this.refPlaces = base.bindToState(`meals/places`, {
            context: this,
            state: 'placesList',
            asArray: true
          });
          this.refShops = base.bindToState(`meat/places`, {
            context: this,
            state: 'shopsList',
            asArray: true
          });
          this.refMeals = base.bindToState(`meals/meals`, {
            context: this,
            state: 'mealsList',
            asArray: true
          });
          this.refMenus = base.bindToState(`meals/menus`, {
            context: this,
            state: 'menusList',
            asArray: true
          });
      }
    
      componentWillUnmount() {
          base.removeBinding(this.refPlaces);
          base.removeBinding(this.refShops);
          base.removeBinding(this.refMeals);
          base.removeBinding(this.refMenus);
      }

      static getDerivedStateFromProps(nextProps, prevState) {
        var currentTab;
        if(nextProps.location.pathname === "/account/partners/add") {
            currentTab = "AddPartners"
        }
        else if(nextProps.location.pathname.includes("/account/partners/restaurants/")) {
            currentTab = "PartnersRestItem"
        }
        else if(nextProps.location.pathname.includes("/account/partners/shops/")) {
            currentTab = "PartnersShopItem"
        } else if(nextProps.location.pathname.includes("/account/partners/meals/")) {
            currentTab = "PartnersMealItem"
        }
        else {
            currentTab = "Partners"
        }
        return {
            currentTab
        };
    }
    
    displayTab () {
        if(this.state.currentTab === "Partners") {
            return (
                <React.Fragment>
                    <div className="type-container">
                        <div className="header">
                            <div className="title">Places:</div>
                            <Link to="/account/partners/add" className="add-button">Add new item</Link>
                        </div>
                        
                        {this.state.placesList.length > 0 ?
                        this.state.placesList.map((place, index) => (
                            <Link to={`/account/partners/restaurants/${place.id}`} className="item" key={place.id}>
                                <img src={place.logoURL} alt="logo"/>
                                <div className="body">
                                    <div className="title">{place.name}</div>
                                    <div className="address">{place.address}</div>
                                    <div className="verified">Status: {place.status}</div>
                                </div>
                            </Link>
                        ))
                        :
                        <div>No data</div>
                        }
                    </div>

                    <div className="type-container">
                        <div className="header">
                            <div className="title">Shops:</div>
                            <Link to="/account/partners/add" className="add-button">Add new item</Link>
                        </div>
                        
                        {this.state.shopsList.length > 0 ?
                        this.state.shopsList.map((place, index) => (
                            <Link to={`/account/partners/shops/${place.id}`} className="item" key={place.id}>
                                <img src="https://firebasestorage.googleapis.com/v0/b/meatislifeepam.appspot.com/o/default%2Fprofile.jpg?alt=media&token=d26705f2-7d77-4c1e-b628-9cc1bd1a69e2" alt="logo"/>
                                <div className="body">
                                    <div className="title">{place.name}</div>
                                    <div className="address">{place.address}</div>
                                    <div className="verified">Verified: {place.verified.toString()}</div>
                                </div>
                            </Link>
                        ))
                        :
                        <div>No data</div>
                        }
                    </div>

                    <div className="type-container">
                        <div className="header">
                            <div className="title">Products:</div>
                            <Link to="/account/partners/meals/" className="add-button">Add new item</Link>
                        </div>
                        
                        {this.state.shopsList.length > 0 ?
                        this.state.mealsList.map((meal, index) => (
                            <Link to={`/account/partners/meals/${meal.id}`} className="item" key={meal.id}>
                                <img src="https://firebasestorage.googleapis.com/v0/b/meatislifeepam.appspot.com/o/default%2Fprofile.jpg?alt=media&token=d26705f2-7d77-4c1e-b628-9cc1bd1a69e2" alt="logo"/>
                                <div className="body">
                                    <div className="title">{meal.name}</div>
                                    <div className="verified">Verified: {meal.verified.toString()}</div>
                                </div>
                            </Link>
                        ))
                        :
                        <div>No data</div>
                        }
                    </div>
                </React.Fragment>
            )
        } else if(this.state.currentTab === "AddPartners"){
            return (        
                <AddPartners uid={this.props.uid}/>
            )     
        }
        else if(this.state.currentTab === "PartnersRestItem"){
            return (        
                <PartnersItem uid={this.props.uid} type="restaurant"/>
            )  
        }
        else if(this.state.currentTab === "PartnersShopItem") {
            return (        
                <PartnersItem uid={this.props.uid} type="shop"/>
            )
        } else if(this.state.currentTab === "PartnersMealItem") {
            return (
                <AddProduct uid={this.props.uid} type="meal" mealsList={this.state.mealsList} menusList={this.state.menusList} />
            )
        }

    }
    render() {
        return (
            <div className="partners">
                {this.displayTab()}
            </div>
        )
    }
}


export default withRouter(Partners);
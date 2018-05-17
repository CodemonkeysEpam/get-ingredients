import React from 'react';
import base from '../../../services/base';
import AddPartners from "./AddPartners/AddPartners";
import PartnersItem from "./PartnersItem/PartnersItem";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

class Partners extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            currentTab: 'Partners',
            placesList: [],
            shopsList: []
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
            asArray: true,
            queries: {
                orderByChild: 'userId',
                equalTo: this.props.uid
            }
          });
          this.refShops = base.bindToState(`meat/shops`, {
            context: this,
            state: 'shopsList',
            asArray: true,
            queries: {
                orderByChild: 'userId',
                equalTo: this.props.uid
            }
          });
      }
    
      componentWillUnmount() {
          base.removeBinding(this.refPlaces);
          base.removeBinding(this.refShops);
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
                                <img src={place.logoURL} alt="logo"/>
                                <div className="body">
                                    <div className="title">{place.name}</div>
                                    <div className="address">{place.address}</div>
                                    <div className="verified">Verified: {place.status}</div>
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
import React from 'react';
import base from '../../../../services/base';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";
import Orders from "./Orders/Orders";
import Photos from "./Photos/Photos";
import Products from "./Products/Products";
import ProductsMeat from "./Products/ProductsMeat";
class AddPartners extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            place: {},
            currentTab: "Orders",
            meal: {},
            isLoading: true
        }
    }

    componentDidMount() {
        if(this.props.type === "restaurant") {
            this.refPlaces = base.bindToState(`meals/places/${this.props.location.pathname.split("/").pop()}`, {
                context: this,
                state: 'place',
                then() {
                    this.setState({
                        isLoading: false
                    })
                }
            });
        }
        else if(this.props.type === "shop") {
          this.refShops = base.bindToState(`meat/shops/${this.props.location.pathname.split("/").pop()}`, {
            context: this,
            state: 'place',
            then() {
                this.setState({
                    isLoading: false
                })
            }
          });
      }
    }
    
      componentWillUnmount() {
        if(this.props.type === "restaurant") {
            base.removeBinding(this.refPlaces);
        } else if(this.props.type === "shop"){
            base.removeBinding(this.refShops);
        } else {
            base.removeBinding(this.refMeals);
        }
      }

   
      displayTab () {
        if(this.state.currentTab === "Orders") {
            return <Orders placeId={this.state.place.id}/>
        } else if (this.state.currentTab === "Products") { 
            return <Products placeId={this.state.place.id}/>
        } else if (this.state.currentTab === "ProductsMeat") { 
            return <ProductsMeat placeId={this.state.place.id}/>
        } 
        else if (this.state.currentTab === "Photos") { 
            return <Photos placeId={this.state.place.id} type={this.props.type}/>
        } 
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        var currentTab;
        if(nextProps.location.pathname.includes("/orders")) {
            currentTab = "Orders"
        }
        else if(nextProps.location.pathname.includes("/menu")) {
            currentTab = "Products"
        }
        else if(nextProps.location.pathname.includes("/products")) {
            currentTab = "ProductsMeat"
        }
        else if(nextProps.location.pathname.includes("/photos")) {
            currentTab = "Photos"
        }
        else {
            currentTab = "Orders"
        }
        return {
            currentTab
        };
    }

   
    render() {
        return this.state.isLoading ? <div>Loading</div> :
            <div className="partners-item">
                {Object.keys(this.state.place).length === 0 && this.state.place.constructor === Object ? 
                <div>No data</div>
                :
                this.state.place.userId === this.props.uid ?
                <div>
                <div className="title-partenr-item">{this.state.place.name}</div>
                
                <div className="sorting">
                    <NavLink exact to={`/account/partners/${this.props.type}s/${this.state.place.id}/orders`}
                    className="sorting-tags"className={this.state.currentTab==="Orders" ? "sorting-tags active": "sorting-tags"}
                    >Orders</NavLink>
                    <NavLink to={`/account/partners/${this.props.type}s/${this.state.place.id}/${this.props.type === 'restaurant' ? 'menu': 'products'}`}
                    className="sorting-tags"
                    >{this.props.type === 'restaurant' ? "Menu" : "Products"}</NavLink>
                    <NavLink to={`/account/partners/${this.props.type}s/${this.state.place.id}/photos`}
                    className="sorting-tags"
                    >Photos</NavLink>
                </div>
                <div>
                {this.displayTab()}
                </div>
                
                </div>
                :
                <div>Access denied</div>
                }
            </div>
        
        }
    }

export default withRouter(AddPartners);
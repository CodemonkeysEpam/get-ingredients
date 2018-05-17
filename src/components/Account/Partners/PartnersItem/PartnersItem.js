import React from 'react';
import base from '../../../../services/base';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";
import Dashboard from "./Dashboard/Dashboard";
import Orders from "./Orders/Orders";
import Photos from "./Photos/Photos";
import Products from "./Products/Products";

class AddPartners extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            place: {},
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
        else if(this.props.type === "shops") {
          this.refShops = base.bindToState(`meat/places/${this.props.location.pathname.split("/").pop()}`, {
            context: this,
            state: 'place',
            then() {
                this.setState({
                    isLoading: false
                })
            }
          });
        } else if(this.props.type === "meal") {
            this.refMeals = base.bindToState(`meals/meals/${this.props.location.pathname.split("/").pop()}`, {
              context: this,
              state: 'meal',
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
        if(this.state.currentTab === "Dashboard") {
            return <Dashboard/>
        } else if(this.state.currentTab === "Orders") {
            return <Orders placeId={this.state.place.id}/>
        } else if (this.state.currentTab === "Products") { 
            return <Products placeId={this.state.place.id}/>
        } 
        else if (this.state.currentTab === "Photos") { 
            return <Photos placeId={this.state.place.id}/>
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
            currentTab = "Products"
        }
        else if(nextProps.location.pathname.includes("/photos")) {
            currentTab = "Photos"
        }
        else {
            currentTab = "Dashboard"
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
                <div>{this.state.place.name}</div>
                
                <div className="sorting">
                    <NavLink exact to={`/account/partners/${this.props.type}s/${this.state.place.id}`}
                    className="sorting-tags"
                    >Dashboard</NavLink>
                    <NavLink to={`/account/partners/${this.props.type}s/${this.state.place.id}/orders`}
                    className="sorting-tags"
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
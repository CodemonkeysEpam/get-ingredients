import React from 'react';
import base from '../../../../services/base';
import { Link } from 'react-router-dom';
import "./Restaurants.scss";
import RestaurantItem from "./RestaurantItem/RestaurantItem";
import { withRouter } from "react-router";

class Restaurants extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            currentTab: 'Restaurants',
            restaurants: [],
            displayedRestaurants: [],
            activeTag: "All"
        }
    }

    componentDidMount() {
        this.refOrders = base.bindToState(`meals/places`, {
            context: this,
            state: 'restaurants',
            asArray: true,
            then() {
                this.setState({displayedRestaurants: this.state.restaurants})
            }
          });
      }

      static getDerivedStateFromProps(nextProps, prevState) {
        var currentTab;
        if(nextProps.location.pathname.includes("/account/restaurants/")) {
            currentTab = "RestaurantItem"
        }
        else {
            currentTab = "Restaurants"
        }
        return {
            currentTab
        };
    }

      changeActiveTag = (tag) => {
        if( tag === 'All' ){
            this.setState({
              displayedRestaurants: this.state.restaurants,
              activeTag: 'All'
            });
          } else {
            let newList = this.state.restaurants.filter( el => 
                el.status === tag
            );
            this.setState({
              displayedRestaurants: newList,
              activeTag: tag
            });
      
          }
      }
    
      componentWillUnmount() {
          base.removeBinding(this.refOrders);
      }

    render() {
        return (
            <React.Fragment>
            {this.state.currentTab === "Restaurants" ? 
            <div className="restaurants-admin-container">
                <div className="title">Restaurants</div>
                {this.state.restaurants.length > 0 ?
                <React.Fragment>
                    <div className="sorting">
                        <span>Sort by: </span>
                        <span 
                        className={this.state.activeTag === "All" ? "sorting-tags-active" : "sorting-tags"}
                        onClick={()=>this.changeActiveTag("All")}
                        >All</span>
                        <span 
                        className={this.state.activeTag === "Not verified" ? "sorting-tags-active" : "sorting-tags"}
                        onClick={()=>this.changeActiveTag("Not verified")}
                        >Not Verified</span>
                        <span 
                        className={this.state.activeTag === "Verified" ? "sorting-tags-active" : "sorting-tags"}
                        onClick={()=>this.changeActiveTag("Verified")}
                        >Verified</span>
                    </div>
                    <div className="titles">
                        <div className="place">Place</div>
                        <div className="status">Status</div>
                        <div className="details">Details</div>
                    </div>
                    
                    {this.state.displayedRestaurants.slice(0).reverse().map(item => (
                        <div className="item" key={item.id}>
                            <div className="place">{item.name}</div>
                            <div className="status">{item.status}</div>
                            <div className="details">
                                <Link to={`/account/restaurants/${item.id}`}>Details</Link>
                            </div>
                        </div>
                    ))}
                </React.Fragment>
                :
                <div>No restaurants</div>
                }
            </div>
            :
            <RestaurantItem/>
            }
        </React.Fragment>
        )
    }
}

export default withRouter(Restaurants);
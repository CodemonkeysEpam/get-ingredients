import React from 'react';
import base from '../../../../services/base';
import { Link } from 'react-router-dom';
import ShopItem from "./ShopItem/ShopItem";
import { withRouter } from "react-router";

class Shops extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            currentTab: 'Shops',
            shops: [],
            displayedShops: [],
            activeTag: "All"
        }
    }

    componentDidMount() {
        this.refOrders = base.bindToState(`meat/shops`, {
            context: this,
            state: 'shops',
            asArray: true,
            then() {
                this.setState({displayedShops: this.state.shops})
            }
          });
      }

      static getDerivedStateFromProps(nextProps, prevState) {
        var currentTab;
        if(nextProps.location.pathname.includes("/account/shops/")) {
            currentTab = "ShopItem"
        }
        else {
            currentTab = "Shops"
        }
        return {
            currentTab
        };
    }

      changeActiveTag = (tag) => {
        if( tag === 'All' ){
            this.setState({
              displayedShops: this.state.shops,
              activeTag: 'All'
            });
          } else {
            let newList = this.state.shops.filter( el => 
                el.status === tag
            );
            this.setState({
              displayedShops: newList,
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
            {this.state.currentTab === "Shops" ? 
            <div className="restaurants-admin-container">
                <div className="title">Shops</div>
                {this.state.shops.length > 0 ?
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
                    
                    {this.state.displayedShops.slice(0).reverse().map(item => (
                        <div className="item" key={item.id}>
                            <div className="place">{item.name}</div>
                            <div className="status">{item.status}</div>
                            <div className="details">
                                <Link to={`/account/shops/${item.id}`}>Details</Link>
                            </div>
                        </div>
                    ))}
                </React.Fragment>
                :
                <div>No shops</div>
                }
            </div>
            :
            <ShopItem/>
            }
        </React.Fragment>
        )
    }
}

export default withRouter(Shops);
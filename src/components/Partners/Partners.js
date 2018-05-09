import React from 'react';
import base from '../../services/base';
import AddPartners from "../AddPartners/AddPartners";

export default class Partners extends React.Component {
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
          this.refShops = base.bindToState(`meat/places`, {
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
    
    displayTab () {
        if(this.state.currentTab === "Partners") {
            return (
                <React.Fragment>
                    <a href="#" onClick={() => this.handleClick('AddPartners')}>Add new item</a>
                    <br />
                    <h2>Places:</h2>
                    {this.state.placesList.length > 0 ?
                    this.state.placesList.map((place, index) => (
                        <div key={place.id}>{index+1}) Name:{place.name} <br/> Address: {place.address} <br/> Verified: {place.verified.toString()}</div>
                    ))
                    :
                    <div>No data</div>
                    }
                    <br />
                    <h2>Shops:</h2>
                    {this.state.shopsList.length > 0 ?
                    this.state.shopsList.map((place, index) => (
                        <div key={place.id}>{index+1}) Name:{place.name} <br/> Address: {place.address} <br/> Verified: {place.verified.toString()}</div>
                    ))
                    :
                    <div>No data</div>
                    }
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <a href="#" onClick={() => this.handleClick('Partners')}>Back to Partners</a>
                    <br />
                    <AddPartners uid={this.props.uid}/>
                </React.Fragment>
            )     
        }

    }
    render() {
        return (
            <React.Fragment>
            {this.displayTab()}
            </React.Fragment>
        )
    }
}
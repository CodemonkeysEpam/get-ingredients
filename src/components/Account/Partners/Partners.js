import React from 'react';
import base from '../../../services/base';
import AddPartners from "./AddPartners/AddPartners";

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
                    <div className="type-container">
                        <div className="header">
                            <div className="title">Places:</div>
                            <a href="#" className="add-button" onClick={() => this.handleClick('AddPartners')}>Add new item</a>
                        </div>
                        
                        {this.state.placesList.length > 0 ?
                        this.state.placesList.map((place, index) => (
                            <div className="item" key={place.id}>
                            {/* <img src="#" alt="logo"/> */}
                            <div className="body">
                                {index+1}) Name:{place.name} <br/> Address: {place.address} <br/> Verified: {place.verified.toString()}
                            </div>
                            
                            
                            </div>
                        ))
                        :
                        <div>No data</div>
                        }
                    </div>

                    <div className="type-container">
                        <div className="header">
                            <div className="title">Shops:</div>
                            <a href="#" className="add-button" onClick={() => this.handleClick('AddPartners')}>Add new item</a>
                        </div>
                        
                        {this.state.shopsList.length > 0 ?
                        this.state.shopsList.map((place, index) => (
                            <div className="item" key={place.id}>{index+1}) Name:{place.name} <br/> Address: {place.address} <br/> Verified: {place.verified.toString()}</div>
                        ))
                        :
                        <div>No data</div>
                        }
                    </div>
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
            <div className="partners">
                {this.displayTab()}
            </div>
        )
    }
}
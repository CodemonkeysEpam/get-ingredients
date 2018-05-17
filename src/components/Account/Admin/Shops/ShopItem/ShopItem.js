import React from 'react';
import base from '../../../../../services/base';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import Map from "../../../../OneMarkerMap/OneMarkerMap";

class PartnerItem extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            place: {},
            isLoading: true

        }
    }

    verify = () => {
        base.update(`meat/shops/${this.state.place.id}`, {
            data: {
                id: this.state.place.id,
                name: this.state.place.name,
                address: this.state.place.address,
                location: this.state.place.location,
                phone: this.state.place.phone,
                assortment: this.state.place.assortment,
                userId: this.state.place.userId,
                logoURL: this.state.place.logoURL,
                description: this.state.place.description,
                status: "Verified",
            }
        })
    }

    componentDidMount() {
        this.refPlaces = base.bindToState(`meat/shops/${this.props.location.pathname.split("/").pop()}`, {
            context: this,
            state: 'place',
            then() {
                this.setState({
                    isLoading: false
                })
            }
        })
      }
    
      componentWillUnmount() {
        base.removeBinding(this.refPlaces);
      }

   
    render() {
        return this.state.isLoading ? <div>Loading</div> :
            <div className="partners-item-info">
                {Object.keys(this.state.place).length === 0 && this.state.place.constructor === Object ? 
                <div>No data</div>
                :
                <div>
                {this.state.place.status === "Not verified" ? <div className='verification'>This restaurant not verified <button onClick={this.verify}>Verify</button></div> : null}
                <div className='title'>{this.state.place.name}</div>
                <p>Address: {this.state.place.address}</p>
                <p>Phone: {this.state.place.phone}</p>
                <p>Description: {this.state.place.description}</p>
                <img src={this.state.place.logoURL} alt={this.state.place.name} />
                <Map lat={this.state.place.location.lat} lng={this.state.place.location.lng} name={this.state.place.name} address={this.state.place.address}/>
                </div>
                }
            </div>
        
    }
}

export default withRouter(PartnerItem);
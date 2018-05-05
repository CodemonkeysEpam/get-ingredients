import React from 'react';
import SearchAddress from './SearchAddress'


export default class AddPartners extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            type : "restaurant",
            name: "",
            address: null,
            location: null,
            phone: ""
        }
        
        this.getAddressInfo = this.getAddressInfo.bind(this);
        this.changeType = this.changeType.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getAddressInfo(place) {
        this.setState({
            address: place.formatted_address,
            location: {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            }
        });
    }

    changeType(event) {
        this.setState({
            type: event.target.value
        });
    }

    changeName(event) {
        this.setState({
            name: event.target.value
        });
    }

    changePhone(event) {
        this.setState({
            phone: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Type:
                    <select onChange={this.changeType} value={this.state.type}>
                        <option value="restaurant">Restaurant</option>
                        <option value="shop">Shop</option>
                    </select>
                </label>
                <br/>
                <label>
                    Name:
                    <input type="text" onChange={this.changeName} value={this.state.name}/>
                </label>
                <br/>
                <label>
                    Address:
                    <SearchAddress getAddressInfo={this.getAddressInfo}/>
                    {this.state.address && <span>+</span>}
                </label>
                <br/>
                <label>
                    Phone number:
                    <input type="text" onChange={this.changePhone} value={this.state.phone}/>
                </label>
                <br/>
                <button type="sumbmit">Send</button>
            </form>
        )
    }
}
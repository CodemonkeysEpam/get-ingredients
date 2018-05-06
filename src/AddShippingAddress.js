import React from 'react';


export default class AddShippingAddress extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            contactName: "",
            country: "",
            state: "",
            city: "",
            streetAddress: "",
            phone: ""
        }
        
        this.changeContactName = this.changeContactName.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeStreetAddress = this.changeStreetAddress.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeContactName(event) {
        this.setState({
            contactName: event.target.value
        });
    }

    changeCountry(event) {
        this.setState({
            country: event.target.value
        });
    }
    changeState(event) {
        this.setState({
            state: event.target.value
        });
    }
    changeCity(event) {
        this.setState({
            city: event.target.value
        });
    }
    changeStreetAddress(event) {
        this.setState({
            streetAddress: event.target.value
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
                    Contact Name:
                    <input type="text" onChange={this.changeContactName} value={this.state.сontactName}/>
                </label>
                <br/>
                <label>
                    Country:
                    <input type="text" onChange={this.changeCountry} value={this.state.country}/>
                </label>
                <br/>
                <label>
                    State/Province/Region:
                    <input type="text" onChange={this.changeState} value={this.state.state}/>
                </label>
                <br/>
                <label>
                    City:
                    <input type="text" onChange={this.changeCity} value={this.state.city}/>
                </label>
                <br/>
                <label>
                    Street Address:
                    <input type="text" onChange={this.changeStreetAddress} value={this.state.streetAddress}/>
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
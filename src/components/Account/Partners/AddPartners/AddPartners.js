import React from 'react';
import base from '../../../../services/base';
import SearchAddress from './SearchAddress';
import firebase from 'firebase';

export default class AddPartners extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            type : "restaurant",
            name: "",
            address: null,
            location: null,
            phone: "",
            file: null,
            desc: ""
        }
    }

    getAddressInfo = (place) => {
        this.setState({
            address: place.formatted_address,
            location: {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            }
        });
    }

    changeType = (event) => {
        this.setState({
            type: event.target.value
        });
    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    changePhone = (event) => {
        this.setState({
            phone: event.target.value
        });
    }

    changeFile = (event) => {
        this.setState({
            file: event.target.files[0]
        });
    }

    changeDesc = (event) => {
        this.setState({
            desc: event.target.value
        });
    }

    getFormattedTime = () =>{
        var today = new Date();
        var y = today.getFullYear();
        var m = today.getMonth();
        var d = today.getDate();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        return y + "-" + m + "-" + d + "-" + h + "-" + m + "-" + s;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var immediatelyAvailableReference = base.push(this.state.type === "restaurant" ?
        "meals/places" : "meat/shops", {
            data: {
                name: this.state.name, //some data to get key
            },
            then(err){
                if(err){
                    console.log(err);
                }
            }
        });

        var generatedKey = immediatelyAvailableReference.key;
        var type = this.state.file.name.split('.').pop();
        var filename = `logo-${this.getFormattedTime()}.${type}`;

        firebase.storage().ref('/places').child(generatedKey)
        .child(filename)
        .put(this.state.file, {contentType: this.state.file.type})
        .then(snapshot => {
            base.update(`${this.state.type === "restaurant" ?
            "meals" : "meat"}/places/${generatedKey}`, {
                data: {
                    id: generatedKey,
                    name: this.state.name,
                    address: this.state.address,
                    location: this.state.location,
                    phone: this.state.phone,
                    userId: this.props.uid,
                    logoURL: snapshot.downloadURL,
                    desc: this.state.desc,
                    verified: false
                },
                then(err){
                    if(!err){
                        console.log("yes");
                    }
                    else {
                        console.log(err);
                    }
                }
            });
        })
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
                <label>
                    Photo:
                    <input type="file" onChange={this.changeFile} accept="image/*"/>
                </label>
                <br/>
                <label>
                    Description:
                    <textarea onChange={this.changeDesc} value={this.state.desc}></textarea>
                </label>
                <br/>
                <button type="sumbmit">Send</button>
            </form>
        )
    }
}
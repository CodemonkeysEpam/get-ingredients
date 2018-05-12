import React from 'react';
import base from '../../../../services/base';
import SearchAddress from './SearchAddress';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

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
            file: event.target.files[0] ? event.target.files[0] : null
        });
    }

    changeDesc = (event) => {
        this.setState({
            desc: event.target.value
        });
    }

    getFormattedTime = () =>{
        var today = new Date();
        var Y = today.getFullYear();
        var M = today.getMonth();
        var D = today.getDate();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        return Y + "-" + M + "-" + D + "-" + h + "-" + m + "-" + s;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        var generatedKey = firebase.database().ref()
        .child(this.state.type === "restaurant" ? "meals/places" : "meat/shops")
        .push().key;

        // var immediatelyAvailableReference = base.push(this.state.type === "restaurant" ?
        // "meals/places" : "meat/shops", {
        //     data: {
        //         name: this.state.name, //some data to get key
        //     },
        //     then(err){
        //         if(err){
        //             console.log(err);
        //         }
        //     }
        // });

        // var generatedKey = immediatelyAvailableReference.key;
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
            <div className="add-partner">
                <div className="header">
                    <Link to="/account/partners" className="back-button">Back</Link>
                    <div className="title">Add new item:</div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="label">
                        <div className="title">Type:</div>
                        <select onChange={this.changeType} value={this.state.type} required>
                            <option value="restaurant">Restaurant</option>
                            <option value="shop">Shop</option>
                        </select>
                    </div>
                    <div className="label">
                        <div className="title">Name:</div>
                        <input type="text" onChange={this.changeName} placeholder="Enter name" value={this.state.name} required/>
                    </div>
                    <div className="label">
                        <div className="title">Address:</div>
                        <SearchAddress getAddressInfo={this.getAddressInfo}/>
                    </div>
                    <div className="label">
                        <div className="title">Phone number:</div>
                        <input type="text" onChange={this.changePhone} placeholder="Enter phone number" value={this.state.phone} required/>
                    </div>
                    <div className="label">
                        <div className="title">Photo:</div>
                        <label htmlFor="file-add-partner">
                                <div className="file">
                                    <span>{this.state.file === null ? 
                                    "Choose a file..." : 
                                    this.state.file.name}
                                    </span>
                                </div>
                        </label>
                        <input type="file" id="file-add-partner" onChange={this.changeFile} accept="image/*" required/>
                    </div>
                    
                    <div className="label">
                        <div className="title">Description:</div>
                        <textarea onChange={this.changeDesc} placeholder="Enter description" value={this.state.desc} required></textarea>
                    </div>
                        
                    <br/>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}
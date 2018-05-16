import React from 'react';
import base from '../../../../../services/base';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

export default class AddPpoduct extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            name: "",
            file: null,
            desc: ""
        }
    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
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
        var M = today.getMonth() + 1;
        var D = today.getDate();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        return Y + "-" + M + "-" + D + "-" + h + "-" + m + "-" + s;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        var generatedKey = firebase.database().ref()
        .child("meals/meals")
        .push().key;

        var type = this.state.file.name.split('.').pop();
        var filename = `logo-${this.getFormattedTime()}.${type}`;

        firebase.storage().ref('/meals').child(generatedKey)
        .child(filename)
        .put(this.state.file, {contentType: this.state.file.type})
        .then(snapshot => {
            base.update(`meals/meals/${generatedKey}`, {
                data: {
                    id: generatedKey,
                    name: this.state.name,
                    userId: this.props.uid,
                    src: snapshot.downloadURL,
                    description: this.state.desc,
                    status: "Not verified"
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
                        <div className="title">Name:</div>
                        <input type="text" onChange={this.changeName} placeholder="Enter name" value={this.state.name} required/>
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
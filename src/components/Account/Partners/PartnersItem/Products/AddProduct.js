import React from 'react';
import base from '../../../../../services/base';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import Autocomplete from 'react-autocomplete';
import { withRouter } from "react-router";

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            value: "",
            file: null,
            ingredients: "",
            mealExist: false,
            mealsList: [],
            price: ""
        }
    }

    onChangeName = (value) => {
        let exist = false;
        this.props.mealsList.forEach((item) => {
            if (item.name.toLowerCase() === value.toLowerCase()) {
                exist = true;
            }
        })
        this.setState({
            value: value,
            mealExist: exist
        });
        console.log(this.state.mealExist);
    }

    onChangeFile = (event) => {
        this.setState({
            file: event.target.files[0] ? event.target.files[0] : null
        });
    }

    onChangeIngredients = (event) => {
        this.setState({
            ingredients: event.target.value
        });
    }

    onChangePrice = (event) => {
        this.setState({
            price: event.target.value
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
        if(!this.mealExist) {
            this.addMealToBase();
        }
        else {
            this.addMenuToBase();
        }
    }

    addMealToBase = () => {
        var generatedKey = firebase.database().ref()
        .child("meals/meals")
        .push().key;

        var type = this.state.file.name.split('.').pop();
        var filename = `logo-${this.getFormattedTime()}.${type}`;
        var ingredients = this.state.ingredients.split(/[ ,]+/);

        firebase.storage().ref('/meals').child(generatedKey)
        .child(filename)
        .put(this.state.file, {contentType: this.state.file.type})
        .then(snapshot => {
            base.update(`meals/meals/${generatedKey}`, {
                data: {
                    id: generatedKey,
                    name: this.state.value,
                    src: snapshot.downloadURL,
                    ingredients: ingredients
                }}).
                then((err) => {
                    var generatedKeyMenus = firebase.database().ref()
                    .child("meals/menus")
                    .push().key;
                    base.update(`meals/menus/${generatedKeyMenus}`, {
                        data: {
                            id: generatedKeyMenus,
                            mealId: generatedKey,
                            price: this.state.price,
                            placeId: this.props.placeId
                        }}).then(()=>{
                            this.props.history.push(`/account/partners/restaurants/${this.props.placeId}/menu`);
                        })
                }
            );
        })
    }

    addMenuToBase = () => {
        // var generatedKeyMenus = firebase.database().ref()
        // .child("meals/menus")
        // .push().key;
        // base.update(`meals/menus/${generatedKeyMenus}`, {
        //     data: {
        //         id: generatedKeyMenus,
        //         mealId: 
        //         price: this.state.price,
        //         placeId: this.props.placeId
        //     }}).then(()=>{
        //         this.props.history.push(`/account/partners/restaurants/${this.props.placeId}/menu`);
        //     })
    }

    render() {
        return (
            <div className="add-partner">
                <div className="header">
                    <Link to={`/account/partners/restaurants/${this.props.placeId}/menu`} className="back-button">Back</Link>
                    <div className="title">Add new item:</div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="label">
                        <div className="title">Name:</div>
                        <Autocomplete
                            wrapperStyle={{ position: 'relative' }}
                            menuStyle={{ position: 'absolute', top: '32px', left: 0, zIndex: 4 }}
                            getItemValue={item => item.name}
                            items={this.props.mealsList}
                            shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                            renderItem={(item, isHighlighted) =>
                                <div key={item.id} className={ isHighlighted ? 'highlighted' : 'not-highlighted' }>
                                    {item.name}
                                </div>
                            }
                            value={this.state.value}
                            onSelect={value => this.setState({ value: value, mealExist: true })}
                            onChange={e => this.onChangeName(e.target.value)}
                        />
                    </div>
                    {!this.state.mealExist && <React.Fragment> 
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
                        <input type="file" id="file-add-partner" onChange={this.onChangeFile} accept="image/*" required/>
                    </div>
                    
                    <div className="label">
                        <div className="title">Ingredients:</div>
                        <textarea onChange={this.onChangeIngredients} placeholder="Enter description" value={this.state.ingredients} required></textarea>
                    </div>
                    </React.Fragment>
                    }

                    <div className="label">
                        <div className="title">Price:</div>
                        <input type="number" onChange={this.onChangePrice} placeholder="Enter price" value={this.state.price} required/>
                    </div>
                        
                    <br/>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}

export default withRouter(AddProduct);
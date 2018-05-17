import React from 'react';
import "../../../Account.scss";
import firebase from 'firebase';
import base from '../../../../../services/base';

export default class Photos extends React.Component{
    constructor(props) {
        super(props);
  
        this.state = {
            photos: [],
            file: null
        }
    }

    componentDidMount() {
        this.refOrders = base.syncState(`${this.props.type === 'restaurant' ? "meals/places" : "meat/shops"}/${this.props.placeId}/photos`, {
            context: this,
            state: 'photos',
            asArray: true,
            then() {
                
            }
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

        changeImage = (event) => {
            const file = event.target.files[0];
            var type = file.name.split('.').pop();
            var filename = `photo-${this.getFormattedTime()}.${type}`;
        
            firebase.storage().ref('/places/photos').child(this.props.placeId)
            .child(filename)
            .put(file, {contentType: file.type})
            .then(snapshot => {
                console.log("rere")
                var photos = [...this.state.photos, snapshot.downloadURL];
                this.setState({photos})
            })
            .catch((err)=> {
                console.log(err)
            })
        }

        deletePhoto = (index) => {
            var photos = [...this.state.photos];
            photos.splice(index, 1);
            this.setState({photos})
        }
    
      componentWillUnmount() {
          base.removeBinding(this.refOrders);
      }

    render() {
        return (
            <React.Fragment>
                <label htmlFor="add-photos">
                    <div className="add-photo">ADD</div>
                </label>
                <input id="add-photos" type="file" onChange={this.changeImage} accept="image/*"/>
                <div className="photos-gallery">
                {this.state.photos.length > 0 ? 
                    this.state.photos.map((photo,i) => (
                    <div className="photos-gallery-item" key={i}>
                        <button onClick={() => this.deletePhoto(i)} className="close">&times;</button>
                        <img src={photo}/>
                    </div>
                    )
                )
                : <div>No photos</div>}         
                </div>         
            </React.Fragment>
        );
    }
}
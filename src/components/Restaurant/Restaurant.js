import React from 'react';
import './Restaurant.scss';
import ImageGallery from 'react-image-gallery';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker,} from "react-google-maps";

const MyMap = compose(
withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{lat: 49.8426, lng: 23.9997}}
  >
    <Marker
      position={{lat: 49.8426, lng: 23.9997}}
    />
  </GoogleMap>
  );

export default class Restaurant extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "McDonalds",
            workingTime: "11:00 - 23:00",
            phoneNumber: "0 800 340 11 11",
            address: "Rynok Sq 23"
        }
    }

    render() {
        // <img className="restaurant-logo" src={this.props.logoUrl} alt={this.props.name} >
        // <div className="place-name">{this.props.name}</div>
        // {this.props.address && <div className="place-address">{this.props.address}</div>}
        // {this.props.showOnMapClick && <button className="restaurant-show-on-map" onClick={() => {this.props.showOnMapClick(this)}}></button>}
        // <button className="restaurant-details" onClick={() => {this.props.detailsClick(this)}}></button>

        const images = [
            {
                original: 'https://static.dezeen.com/uploads/2016/07/Musling_SPACE-Copenhagen_Joachim-Wichmann_dezeen_1568_0.jpg'
            },
            {
                original: 'http://gritsandgrids.s3.amazonaws.com/media/2016/03/a0e0c332937443.569930725cd1c.jpg'
            },
            {
                original: 'http://gritsandgrids.s3.amazonaws.com/media/2016/03/e22b8326364947.5635482042182.jpg'
            }
        ]

        return (
            <div className="container restaurant">
                <h2>{this.state.name}</h2>
                <hr/>
                <div className="carousel">
                    <ImageGallery
                        items={images}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showBullets={true}
                        showNav={false}
                    />
                </div>
                <div className="details">
                    <ul>
                        <li>some description</li>
                        <li>{this.state.workingTime}</li>
                        <li>{this.state.phoneNumber}</li>
                        <li><address>{this.state.address}</address></li>
                    </ul>
                </div>
                <div className="map">
                    <MyMap />
                </div>
                <hr/>
                //Restaurant meals component here
            </div>
        )
    }
}

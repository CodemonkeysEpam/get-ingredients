import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const Map = compose(
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
        defaultCenter={{lat: props.lat, lng: props.lng}}
    >
        <InfoWindow position={{lat: props.lat, lng: props.lng}}>
            <div>
                <h1 style={{color: '#e33834', fontSize: '16px', fontWeight: 'bold'}}>{props.name}</h1>
                <p style={{color: 'grey'}}>Address: {props.address}</p>
            </div>
        </InfoWindow>
  </GoogleMap>
  );

 export default Map;

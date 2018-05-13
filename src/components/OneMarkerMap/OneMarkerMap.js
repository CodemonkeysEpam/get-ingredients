/* global google */  //must be here to work (else we got to add window before google)
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
        <Marker 
        position={{lat: props.lat, lng: props.lng}}
        icon= {{
            path: google.maps.SymbolPath.CIRCLE,
            // strokeColor: '#ccc',
            fillColor: '#fff',
            fillOpacity: 1,
            strokeWeight: 2,
            strokeColor: "#e33834",
            scale: 8,
        }}
        >
        <InfoWindow>
            <div>
                <h1 style={{color: '#e33834', fontSize: '16px', fontWeight: 'bold'}}>{props.name}</h1>
                <p style={{color: 'grey'}}>Address: {props.address}</p>
            </div>
        </InfoWindow>
        </Marker>
  </GoogleMap>
  );

 export default Map;
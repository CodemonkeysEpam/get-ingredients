/* global google */  //must be here to work (else we got to add window before google)
import React from "react"
import { compose, withProps, lifecycle, withStateHandlers, withHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MapWithAMarkers = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCl7bu7Zninz_LcMD8cuQO5TutrqxNj0z0&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    lifecycle({
        componentDidMount() {  
            this.setState({
                zoomToMarkers: map => {
                    if(map != null) {
                        const bounds = new google.maps.LatLngBounds();
                        map.props.children.forEach((child) => {
                            if (child.type === Marker) {
                                bounds.extend(new google.maps.LatLng(child.props.position.lat, child.props.position.lng));
                            }
                        })
                        map.fitBounds(bounds);
                    }
                }
            })
        },
    }),
    withStateHandlers(() => ({
    isOpen: null,
    // isHover: null,
  }), {
    onToggleOpen: ({ isOpen }) => (index) => {
        if(isOpen !== index) {
            return {
                isOpen: index,
            }
        }
        else {
            return {
                isOpen: null,
            }
        }
    },
    // onToggleHover: ({ isHover }) => (index) => {
    //     if(isHover !== index) {
    //         return {
    //             isHover: index,
    //         }
    //     }
    //     else {
    //         return {
    //             isOpen: null,
    //         }
    //     }
    // },
    // currentPlace2: ({ isOpen }) => (index) => {
    //     return {
    //         isOpen: index,
    //     }
    // }
    
  }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap ref={props.zoomToMarkers} defaultZoom={5} defaultCenter={{ lat: 25.0391667, lng: 121.525 }} >
        {props.places.map((place, index) => {
            // if(place.id === props.currentPlace.id) {
            //    props.currentPlace2(index)
            // }
            
            return (
            <Marker
                key={index}
                position={{ lat: place.lat, lng: place.lng }}
                icon= {{
                    path: google.maps.SymbolPath.CIRCLE,
                    // strokeColor: '#ccc',
                    fillColor: '#fff',
                    fillOpacity: 1,
                    strokeWeight: 2,
                    strokeColor: props.isHover === index || props.isOpen === index ? "#e33834" : "black=",
                    scale: props.isHover === index || props.isOpen === index ? 8 : 6,
                }}
                // onClick={() => props.onToggleOpen(index)}
                onMouseOver={() => props.onToggleOpen(index)}
                onMouseOut={() => props.onToggleOpen(null)}
                
            >
                {(props.isOpen === index) && <InfoWindow onCloseClick={() => props.onToggleOpen(null)}>
                    <div>
                        <h1 style={{color: '#e33834', fontSize: '16px', fontWeight: 'bold'}}>{place.name}</h1>
                        <p>Address: {place.address}</p>
                        {/* <p>{props.currentPlace.lat}</p> */}
                    </div>
                </InfoWindow>}
            </Marker>
        )
    }
        )}
         
    </GoogleMap>
    );

export default MapWithAMarkers;
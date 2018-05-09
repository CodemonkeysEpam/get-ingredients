/* global google */  //must be here to work (else we got to add window before google)
import React from "react"
import { compose, withProps, lifecycle, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MapWithAMarkers = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCl7bu7Zninz_LcMD8cuQO5TutrqxNj0z0&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withStateHandlers(() => ({
        isOpen: null,
    }), {
        onToggleOpen: ({ isOpen }) => (index) => {
            if(isOpen !== index) {
                return {
                    isOpen: index,
                    isHoverSidebarItem: null
                }
            }
            else {
                return {
                    isOpen: null,
                    isHoverSidebarItem: null
                }
            }
        },
    }),
    lifecycle({
        componentWillReceiveProps(nextProps) {
            this.setState({
                isHoverSidebarItem: nextProps.hoverPlace != null ? nextProps.hoverPlace.id : null,
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
            });
        },
        componentDidMount() {  
            this.setState({
                isHoverSidebarItem: this.hoverPlace != null ? this.hoverPlace.id : null,
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
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap ref={props.zoomToMarkers} defaultZoom={5} defaultCenter={{ lat: 25.0391667, lng: 121.525 }} >
        {props.places.map((place, index) => (
            <Marker
                key={index}
                position={{ lat: place.lat, lng: place.lng }}
                icon= {{
                    path: google.maps.SymbolPath.CIRCLE,
                    // strokeColor: '#ccc',
                    fillColor: '#fff',
                    fillOpacity: 1,
                    strokeWeight: 2,
                    strokeColor: props.isHover === index || props.isOpen === index || props.isHoverSidebarItem === place.id ? "#e33834" : "black=",
                    scale: props.isHover === index || props.isOpen === index || props.isHoverSidebarItem === place.id ? 8 : 6,
                }}
                // onClick={() => props.onToggleOpen(index)}
                onMouseOver={() => props.onToggleOpen(index)}
                onMouseOut={() => props.onToggleOpen(null)}
                
            >
                {(props.isOpen === index || props.isHoverSidebarItem === place.id ) && <InfoWindow onCloseClick={() => props.onToggleOpen(null)}>
                    <div>
                        <h1 style={{color: '#e33834', fontSize: '16px', fontWeight: 'bold'}}>{place.name}</h1>
                        <p>Address: {place.address}</p>
                    </div>
                </InfoWindow>}
            </Marker>
        ))}
    </GoogleMap>
);

export default MapWithAMarkers;
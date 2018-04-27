import React from 'react';
import GoogleMapReact from 'google-map-react';

const PlaceAddress = ({ text }) => <div className="google-marker"><i className="fa fa-map-marker fa-3x" aria-hidden="true"></i>{text}</div>;

export default class SimpleMap extends React.Component {
   
    static defaultProps = {
      zoom: 17
    };
   
    render() {
      return (
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCl7bu7Zninz_LcMD8cuQO5TutrqxNj0z0' }}
          center= {{
            lat: this.props.lat,
            lng: this.props.lng,
          }}
          zoom={this.props.zoom}
        >
          <PlaceAddress
            lat={this.props.lat}
            lng={this.props.lng}
            text={this.props.name}
          />
        </GoogleMapReact>
      );
    }
  }
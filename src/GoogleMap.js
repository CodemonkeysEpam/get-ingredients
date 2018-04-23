import React from 'react';
import GoogleMapReact from 'google-map-react';

const PlaceAddress = ({ text }) => <div>{text}</div>;

export default class SimpleMap extends React.Component {
    static defaultProps = {
      center: {lat: 49.845210, lng: 24.030431},
      zoom: 17
    };
   
    render() {
      return (
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
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
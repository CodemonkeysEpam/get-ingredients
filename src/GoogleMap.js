import React from 'react';
import GoogleMapReact from 'google-map-react';
import './styles/GoogleMap.scss';

export default class SimpleMap extends React.Component {

    static defaultProps = {
      zoom: 17
    };

    renderPlaces = (list) => {
      return list.map(place => {
        return (
          <div className="google-marker" lat={place.lat} lng={place.lng}>
            <i className="fa fa-map-marker fa-3x" aria-hidden="true"></i>
            {place.name}
          </div>
          )
      })
  }

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCl7bu7Zninz_LcMD8cuQO5TutrqxNj0z0' }}
        center={this.props.center}
        zoom={this.props.zoom}
      >
      {this.renderPlaces(this.props.placesList)}
      </GoogleMapReact>
    );
  }
}

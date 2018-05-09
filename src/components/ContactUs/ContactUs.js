import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker,} from "react-google-maps";
import './ContactUs.scss';

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

export default class ContactUs extends React.Component {
    render() {
        return (
            <div className="contact-us">
                <h3>We are crazy about meat. Beef. Pork. Veal. Chicken. Venison. Doesnt matter. This is our lifestyle and this is how we live. We are challenging modern vegetarian culture. We are underground. Like us? Join us.</h3>
                <div className="map" style={{ height: '400px', width: '60%' }}>
                <MyMap />
                </div>
                <div className="contacts">
                    <address>
                        Visit us at:<br />
                        Oleny Stepanivny St, 45<br />
                        Lviv, Ukraine<br />
                    </address>
                    <ul>
                        <li>9:00 - 17:00</li>
                        <li>Mon-Fri</li>
                        <li>+38 093 093 09 03</li>
                        <li>codemonkeys2018@gmail.com</li>
                    </ul>
                </div>
            </div>
        )
    }
}

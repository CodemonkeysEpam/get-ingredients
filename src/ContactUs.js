import React from 'react';
import './styles/ContactUs.scss';
import GoogleMapReact from 'google-map-react'

const Marker = (props) => <div style={{"background": "url(https://image.flaticon.com/icons/svg/33/33622.svg)", "width": "25px", "height": "25px", "backgroundSize": "100%"}}></div>;

export default class ContactUs extends React.Component {
    render() {
        return (
            <div className="contact-us">
                <h3>We are crazy about meat. Beef. Pork. Veal. Chicken. Venison. Doesnt matter. This is our lifestyle and this is how we live. We are challenging modern vegetarian culture. We are underground. Like us? Join us.</h3>
                <div className="map" style={{ height: '400px', width: '60%' }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: 'AIzaSyBR6d-Nuc7yQLspw41q5WREpj--vWNQdJo' }}
                      defaultCenter={{lat: 49.8426, lng: 23.9997}}
                      defaultZoom={15}>
                      <Marker
                        lat={49.842660}
                        lng={23.999795}
                      />
                    </GoogleMapReact>
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

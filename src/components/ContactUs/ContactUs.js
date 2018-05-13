import React from 'react';
import './ContactUs.scss';
import Map from '../OneMarkerMap/OneMarkerMap.js'

export default class ContactUs extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="contact-us">
                    <h3>We are crazy about meat. Beef. Pork. Veal. Chicken. Venison. Doesnt matter. This is our lifestyle and this is how we live. We are challenging modern vegetarian culture. We are underground. Like us? Join us.</h3>
                    <div className="map" style={{ height: '400px', width: '70%' }}>
                        <Map lat={49.8426} lng={23.9997} name={"Meat is Life"} address={"Oleny Stepanivny St, 45"}/>
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
            </div>
        )
    }
}

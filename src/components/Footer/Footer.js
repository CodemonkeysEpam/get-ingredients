import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {

    render() {
        return(
            <footer>
                <div className="container-wrapper">
                <ul className="left-column">
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li>
                        <div className="social-networks">
                            <Link to="https://github.com/CodemonkeysEpam" target="_blank"><div className="github"></div></Link>
                            <Link to="https://fb.com" target="_blank"><div className="facebook"></div></Link>
                            <Link to="https://instagram.com" target="_blank"><div className="instagram"></div></Link>
                        </div>
                    </li>
                    <li><Link to="/recepies">Our partners</Link></li>
                </ul>

                <ul className="right-column">
                    <li><Link className="title" to="/">Meat is life</Link></li>
                    <li>Codemonkeys team 2018</li>
                </ul>
                </div>
            </footer>
        )
    }
}

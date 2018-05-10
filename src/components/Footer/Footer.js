import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {

    render() {
        return(
            <footer>
                <ul className="left-column">
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li>
                        <div className="social-networks">
                            <a href="https://github.com/CodemonkeysEpam" target="_blank"><div className="github"></div></a>
                            <a href="https://fb.com" target="_blank"><div className="facebook"></div></a>
                            <a href="https://instagram.com" target="_blank"><div className="instagram"></div></a>
                        </div>
                    </li>
                    <li><Link to="/recepies">Our partners</Link></li>
                </ul>

                <ul className="right-column">
                    <li><Link className="title" to="/">Meat is life</Link></li>
                    <li>Codemonkeys team 2018</li>
                </ul>
            </footer>
        )
    }
}

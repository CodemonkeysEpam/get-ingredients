import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {

    render() {
        return(
            <footer>
                <ul className="left-column">
                    <li><a href="/contact-us">Contact Us</a></li>
                    <li>
                        <div className="social-networks">
                            <a href="https://github.com/CodemonkeysEpam" target="_blank"><div className="github"></div></a>
                            <a href="https://fb.com" target="_blank"><div className="facebook"></div></a>
                            <a href="https://instagram.com" target="_blank"><div className="instagram"></div></a>
                        </div>
                    </li>
                    <li><a href="/recepies">Our partners</a></li>
                </ul>

                <ul className="right-column">
                    <li><a className="title" href="/">Meat is life</a></li>
                    <li>Codemonkeys team 2018</li>
                </ul>
            </footer>
        )
    }
}
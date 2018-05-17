import React from 'react';
import "../../../Account.scss";

export default class Photos extends React.Component{
    render() {
        return (
            <div>
                <button className="add-photo">ADD</button>
                <div className="photos-gallery">
                    <div className="photos-gallery-item">
                        <button className="close">&times;</button>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-1.jpg"/>
                    </div>
                    <div className="photos-gallery-item">
                        <button className="close">&times;</button>    
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-2.jpg"/>
                    </div>
                    <div className="photos-gallery-item">
                        <button className="close">&times;</button>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-3.jpg"/>
                    </div>
                    <div className="photos-gallery-item">
                        <button className="close">&times;</button>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-4.jpg"/>
                    </div>
                    <div className="photos-gallery-item">
                        <button className="close">&times;</button>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-5.jpg"/>
                    </div>
                    <div className="photos-gallery-item">
                        <button className="close">&times;</button>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-5.jpg"/>
                    </div>
                    <div className="photos-gallery-item">
                        <button className="close">&times;</button>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-5.jpg"/>
                    </div>
                    <div className="photos-gallery-item">
                        <button className="close">&times;</button>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-5.jpg"/>
                    </div>
                    <div className="photos-gallery-item">
                        <button className="close">&times;</button>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-5.jpg"/>
                    </div>
                    <div className="photos-gallery-item">
                        <button className="close">&times;</button>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-5.jpg"/>
                    </div>
                </div>         
            </div>
        );
    }
}
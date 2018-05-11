import React from 'react';

export default class MyInfo extends React.Component {
    getPhotoURL(defaultURL) {
        if(defaultURL !== null) {
            if(defaultURL.includes("facebook")){
                return `${defaultURL}?height=400`
            } else if (defaultURL.includes("twimg")) {
                return defaultURL.replace("normal", "400x400");
            }
            else {
                return defaultURL
            }
        }
    }
    render() {
        return (
            <div>
                <p>Name: {this.props.user.displayName}</p>
                <p>Email: {this.props.user.email}</p>
                <p>Photo: </p>
                <img src={this.getPhotoURL(this.props.user.photoURL)} width="200px" alt={this.props.user.displayName} />
            </div>
        )
    }
}
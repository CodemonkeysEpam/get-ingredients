import React from 'react';

export default class MyInfo extends React.Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.user.displayName}</p>
                <p>Email: {this.props.user.email}</p>
                <p>Photo: </p>
            </div>
        )
    }
}
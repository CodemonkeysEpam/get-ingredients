import React from 'react';
import firebase from 'firebase';

export default class Logout extends React.Component {

    componentDidMount() {
        firebase.auth().signOut();
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>Loging out...</div>
        )
    }
}
import React from 'react';
import './styles/Home.scss';

export default class Home extends React.Component {
  render () {

    let homeStyle = {
      color: 'white',
      fontSize: '35px',
      textAlign: 'center',
      marginTop: '20px'
    }

    return (
        <div>
          <h1 style={homeStyle}>Home</h1>
        </div>
    );
  }
}

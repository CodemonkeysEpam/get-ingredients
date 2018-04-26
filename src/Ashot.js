import React from 'react';

export default class Ashot extends React.Component {
  render () {

    let homeStyle = {
      color: 'white',
      fontSize: '35px',
      textAlign: 'center',
      marginTop: '20px'
    }

    return (
        <div>
          <h1 style={homeStyle}>Ashot`s</h1>
        </div>
    );
  }
}
import React from 'react';

export default class Meat extends React.Component {
  render () {

    let homeStyle = {
      color: 'white',
      fontSize: '35px',
      textAlign: 'center',
      marginTop: '20px'
    }

    return (
        <div>
          <h1 style={homeStyle}>Meat</h1>
        </div>
    );
  }
}
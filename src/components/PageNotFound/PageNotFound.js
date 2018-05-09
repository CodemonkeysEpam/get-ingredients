import React from 'react';

export default class PageNotFound extends React.Component {
  render () {

    let homeStyle = {
      color: 'white',
      fontSize: '35px',
      textAlign: 'center',
      marginTop: '20px'
    }

    return (
        <div>
          <h1 style={homeStyle}>PAGE NOT FOUND</h1>
        </div>
    );
  }
}

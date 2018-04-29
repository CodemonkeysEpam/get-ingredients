import React from 'react';
import './styles/Shop.scss';

export default class Shop extends React.Component {
  render () {

    let homeStyle = {
      color: 'white',
      fontSize: '35px',
      textAlign: 'center',
      marginTop: '20px'
    }

    return (
        <div>
          <h1 style={homeStyle}>Shop</h1>
        </div>
    );
  }
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import 'font-awesome/scss/font-awesome.scss';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

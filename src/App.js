import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import MainSection from './MainSection';
import 'font-awesome/scss/font-awesome.scss';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

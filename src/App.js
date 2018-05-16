import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/scss/font-awesome.scss';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import store from './store/index.js';

Modal.setAppElement('body');

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <React.Fragment>
                    <Menu />
                    <Footer />
                </React.Fragment>
            </BrowserRouter>
        </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

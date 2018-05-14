import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/scss/font-awesome.scss';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

import { Provider } from 'react-redux'
import { configureStore } from './store'

const store = configureStore();


store.dispatch({
  type: 'ADD_ORDER',
  text: 'Use Redux'
})

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Menu />
                    <Footer />
                </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

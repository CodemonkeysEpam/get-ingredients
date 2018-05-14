import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import orders from './orders'

export default combineReducers ({
    routing: routerReducer,
    orders
});

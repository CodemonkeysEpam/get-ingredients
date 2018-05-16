import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';
import { save, load } from "redux-localstorage-simple";

const createStoreWithMiddleware = applyMiddleware(
    save() // Saving done here
)(createStore)

let store = createStoreWithMiddleware(
    reducer,
    load()
);

export default store;

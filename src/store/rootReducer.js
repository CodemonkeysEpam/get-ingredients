// import { combineReducers } from 'redux';
export function rootReducer(state = [], action){
    if(action.type === "ADD_ORDER"){
        return [
            ...state,
            action.order
        ];
    }
    return state;
}

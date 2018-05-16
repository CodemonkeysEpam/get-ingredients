let initialState = {
    orders: []
}

export default function (state=initialState, action) {
    if(action.type === "ADD_ORDER") {
        let orders = state.orders.splice(0);
        let pushed = false;
        for(let i = 0; i < orders.length; i++){
            if(orders[i].id === action.payload.id && orders[i].type === action.payload.type){
                orders[i].count += action.payload.count;
                pushed = true;
            }
        }
        if(!pushed){
            orders.push(action.payload);
        }
        return Object.assign({}, state, { orders: orders });
    }
    if(action.type === "UPDATE_ORDER"){
        let orders = state.orders.splice(0);
        for(let i = 0; i < orders.length; i++){
            if(orders[i].id === action.payload.id && orders[i].type === action.payload.type){
                orders[i] = action.payload
            }
        }
        return Object.assign({}, state, { orders: orders });
    }
    if(action.type === "DELETE_ORDER") {
        let orders = state.orders.splice(0);
        let index;
        for(let i = 0; i < orders.length; i++){
            if(orders[i].id === action.payload.id && orders[i].type === action.payload.type){
                index = orders.indexOf(orders[i]);
                break;
            }
        }
        if(index > -1){
            orders.splice(index, 1);
        }
        return Object.assign({}, state, { orders: orders });
    }
    if(action.type === "CLEAR") {
        return initialState;
    }
    return state;
}

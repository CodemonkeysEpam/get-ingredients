let initialState = {
    orders: [
        {
            sdfdsf: 12
        },
        {
            sdfdsf: 12
        }
    ]
}

export default function (state=initialState, action) {
    if(action.type === "ADD_ORDER") {
        console.log(state);
        return {
            ...state,
            orders: [...state.orders, action.payload]
        };
    }
    return state;
}

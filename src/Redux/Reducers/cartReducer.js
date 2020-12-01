import * as ActionType from "./../Constants/constants";

let initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_CART: 
            state.cart = action.cart;
            return {...state};

        case ActionType.RESET_LIST_CART:
            state.cart = action.cart;
            return {...state};
        
        default:
            return {...state}
    }
}

export default cartReducer;
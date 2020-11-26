import * as ActionType from "../Constants/constants";

const initialState = {
    user:{},
    userList: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_INFO_USER:
            state.user = action.user;
            return state;

        case ActionType.RESET_USER_LOGIN:
            state.user = action.user;
            return {...state}
        
        case ActionType.GET_LIST_USER:
            state.userList = action.userList;

        default:
            return { ...state };
    }
}

export default userReducer
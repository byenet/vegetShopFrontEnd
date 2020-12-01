import * as ActionType from "./../Constants/constants";
import { cartService } from "./../../Services/index";

export const actGetListCart = (id,token) => {
    return dispatch => {
        cartService.getListCards(id,token)
        .then((result) => {
            dispatch({
                type: ActionType.GET_LIST_CART,
                cart: result.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const actResetListCart = (cart) => {
    return (dispatch) => {
        dispatch({
            type: ActionType.RESET_LIST_CART,
            cart: cart
        })
    }
}
import * as ActionType from "./../Constants/constants";
import { productService } from "./../../Services/index";



export const actGetListAllProducts = () => {
    return dispatch => {
        productService.getListAllProducts()
        .then(result => {
            dispatch({
                type: ActionType.GET_LIST_ALL_SP,
                listAllSP: result.data
            });
        })
        .catch(err => {
            console.log(err);
        })
    }
}


export const actGetListRauCuSP = () => {
    return dispatch => {
        productService.getListSPRauCu()
        .then(result => {
            dispatch({
              type: ActionType.GET_LIST_RAUCU_SP,
              listRauCuSP: result.data,
            });
        })
        .catch(err =>{
            console.log(err);
        })
    }
}

export const actGetListHoaQuaSP = () => {
    return dispatch => {
        productService.getListSPHoaQua()
        .then((result) => {
            dispatch({ 
                type : ActionType.GET_LIST_HOAQUA_SP,
                listHoaQuaSP: result.data
            });
        })
        .catch((err) =>{
            console.log(err);
        })
    }
}

export const actGetListHaiSanSP = () => {
    return dispatch => {
        productService.getListSPHaiSan()
        .then((result) => {
            dispatch({ 
                type : ActionType.GET_LIST_HAISAN_SP,
                listHaiSanSP: result.data
            });
        })
        .catch((err) =>{
            console.log(err);
        })
    }
}

export const actGetListHatSP = () => {
    return dispatch => {
        productService.getListSPHat()
        .then((result) => {
            dispatch({ 
                type : ActionType.GET_LIST_HAT_SP,
                listHatSP: result.data
            });
        })
        .catch((err) =>{
            console.log(err);
        })
    }
}

export const actGetListTuoiSP = () => {
    return dispatch => {
        productService.getListSPTuoiSong()
        .then((result) => {
            dispatch({ 
                type : ActionType.GET_LIST_TUOI_SP,
                listTuoiSP: result.data
            });
        })
        .catch((err) =>{
            console.log(err);
        })
    }
}

export const actSwitchListRender = (list) => {
    return dispatch => {
        dispatch({
            type: ActionType.SWITCH_LIST_RENDER,
            listRender: list
        })
    }
}

export const actGetDetailProduct = (id) => {
    return dispatch => {
        productService.getDetailProduct(id)
        .then((result) => {
            dispatch({
                type: ActionType.GET_DETAIL_PRODUCT,
                product: result.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}


import * as ActionType from './../Constants/constants'

let initialState = {
    listRender: [],
    listAllSP: [],
    listRauCuSP: [],
    listHoaQuaSP: [],
    listHaiSanSP: [],
    listHatSP: [],
    listTuoiSP: [],
    item:{},
    product:{}
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.GET_LIST_ALL_SP:
        state.listAllSP = action.listAllSP;
        return { ...state };
      case ActionType.GET_LIST_RAUCU_SP:
        state.listRauCuSP = action.listRauCuSP;
        state.listRender = action.listRauCuSP
        return { ...state };
      case ActionType.GET_LIST_HOAQUA_SP:
        state.listHoaQuaSP = action.listHoaQuaSP;
        return { ...state };
      case ActionType.GET_LIST_HAISAN_SP:
        state.listHaiSanSP = action.listHaiSanSP;
        return { ...state };
      case ActionType.GET_LIST_HAT_SP:
        state.listHatSP = action.listHatSP;
        return { ...state };
      case ActionType.GET_LIST_TUOI_SP:
        state.listTuoiSP = action.listTuoiSP;
        return { ...state };
      case ActionType.SWITCH_LIST_RENDER:
        state.listRender = action.listRender;
        return { ...state };
      case ActionType.GET_DETAIL_PRODUCT:
        state.product = action.product;
        return { ...state };

      default:
        return { ...state };
    }
}

export default productReducer;
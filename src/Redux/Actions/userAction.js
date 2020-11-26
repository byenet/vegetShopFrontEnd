import * as ActionType from "../Constants/constants";
import { userService } from "../../Services";
import Swal from "sweetalert2";
import { cookieService } from "../../Services";


export const actGetInfoUser = (user,history) => {
    return (dispatch) => {
        userService.loginUser(user)
        .then(result => {
            dispatch({ 
                type: ActionType.GET_INFO_USER,
                user: {
                    tentk: result.data.tentk,
                    idtk: result.data.idtk,
                    token: result.data.jwt,
                    phanquyen: result.data.phanquyen
                }
            })
            Swal.fire({
                icon: "success",
                title: "Đăng nhập thành công",
                text: "",
                timer: 2000,
            });

            cookieService.set("token", result.data.jwt, {
                path: "/",
                expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
            });
            cookieService.set("idtk", result.data.idtk, {
                path: "/",
                expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
            });
            cookieService.set("tentk", result.data.tentk, {
                path: "/",
                expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
            });
            cookieService.set("phanquyen", result.data.phanquyen, {
              path: "/",
              expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
            });

            // console.log(cookieService.get("token"));

            // localStorage.setItem("user", JSON.stringify(result.data))
            history.push("/")
        })
        .catch((error) => {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Đăng nhập thất bại",
                text: "Tên đăng nhập hoặc mật khẩu không đúng",
                timer: 3000,
            });
        })
    }
}


export const actResetUserLogin = (user) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.RESET_USER_LOGIN,
      user: user,
    });
  };
};


export const actGetListUser = () => {
    return dispatch => {
        userService.listUser()
        .then(result => {
            dispatch({
                type: ActionType.GET_LIST_USER,
                userList: result.data
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }
}
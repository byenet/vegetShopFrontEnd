import Axios from "axios";
import * as yup from "yup";

export const signupUserSchema = yup.object().shape({
  pass: yup
    .string()
    .required("Mật khẩu không được để trống")
    .min(4, "Mật Khẩu phải nhiều hơn 4 ký tự")
    .max(16, "Mật Khẩu phải nhỏ hơn 16 ký tự")
    .matches(/^[a-zA-Z0-9]{4,16}$/, "Mật khẩu chỉ được bao gồm chữ cái và số"),

  email: yup
    .string()
    .required("Email không được để trống")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không đúng định dạng"),

  phone: yup
    .string()
    .required("Số điện thoại không được để trống")
    .matches(/^[\d]+$/, "Số điện thoại chỉ gồm ký tự số")
    .matches(
      /^(03|05|07|08|09)+([0-9]{8})$/,
      "Số điện thoại không đúng định dạng"
    ),

  tentk: yup
    .string()
    .required("Họ và tên không được để trống")
    .min(4, "Họ và tên phải nhiều hơn 4 ký tự")
    .max(16, "Họ và tên phải nhỏ hơn 30 ký tự")
    .matches(/^[a-zA-Z\s]{4,30}$/, "Họ và tên chỉ bao gồm chữ cái"),
});
class UserService {

    loginUser = user => {
        return Axios({
            method: "POST",
            url:"/login",
            data: user
        })
    }

    signupUser = user => {
      return Axios({
        method: "POST",
        url: "http://localhost:8081/adduser",
        data: user,
      });
    };

    listUser = (token) => {
      return Axios({
        method: "GET",
        url: "/getalltaikhoan",
        headers: { Authorization: "Bearer " + token },
      });
    }
}

export default UserService;
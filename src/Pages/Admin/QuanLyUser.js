import React, { Component } from "react";
import MaterialTable from "material-table";
import Axios from "axios";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import * as action from "../../Redux/Actions/userAction"
import {cookieService} from "../../Services/"

class QuanLyUser extends Component {
    componentDidMount() {
         let token = cookieService.get("tokenAdmin");
        //  console.log(token);
        this.props.getListUser(token);
    }

    constructor(props) {
        super(props);
        this.state = {
          columns: [
            // {
            //     title:"ID",
            //     field:"idtk",
            //     editable: "never"
            // },
            {
              title: "Họ tên",
              field: "tentk",
              validate: (rowData) =>
                /^[a-zA-Z\s]{4,30}$/.test(rowData.tentk)
                  ? true
                  : {
                      isValid: false,
                      helperText:
                        "tên chỉ được bao gồm ký tự chữ cái và từ 4 đến 30 ký tự",
                    },
            },
            {
              title: "Email",
              field: "email",
              validate: (rowData) =>
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(rowData.email)
                  ? true
                  : {
                      isValid: false,
                      helperText: "email không đúng định dạng",
                    },
            },
            {
              title: "Điện thoại",
              field: "phone",
              validate: (rowData) =>
                /^(03|05|07|08|09)+([0-9]{8})$/.test(rowData.phone)
                  ? true
                  : {
                      isValid: false,
                      helperText: "Số điện thoại không hợp lệ",
                    },
            },
            {
              title: "Mật khẩu",
              field: "pass",
              editable: "onAdd",
            //   validate: (rowData) =>
            //     /^[a-zA-Z0-9]{4,16}$/.test(rowData.pass)
            //       ? true
            //       : {
            //           isValid: false,
            //           helperText: "Mật khẩu chỉ được bao gồm chữ cái và số và từ 4 đến 16 ký tự",
            //         },
            },
            {
              title: "Loại người dùng",
              field: "phanquyen",
              lookup: { 0: "Khách hàng", 1: "Quản trị" },
            //   editable: "onAdd",
            },
          ],
        };
    }

    render() {
        // console.log(this.props.userList);
        return (
        <MaterialTable
            title="Danh Sách Người Dùng"
            columns={this.state.columns}
            data={this.props.userList}
            options={{
            actionsColumnIndex: -1,
            addRowPosition: "first",
            }}
            editable={{
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                    let user = {
                      tentk: newData.tentk,
                      email: newData.email,
                      phone: newData.phone,
                      pass: newData.pass,
                      phanquyen: 0,
                    };
                    let token = cookieService.get("tokenAdmin");
                    setTimeout(() => {
                        resolve();
                        return Axios({
                        method: "POST",
                        url: "/adduser",
                        data: user,
                        headers: { Authorization: "Bearer " + token },
                        })
                        .then((result) => {
                            Swal.fire({
                            icon: "success",
                            title: "Thêm thành công!",
                            text: "",
                            timer: 2000,
                            });
                            this.props.getListUser();
                        })
                        .catch((err) => {
                            Swal.fire({
                            icon: "error",
                            title: "Thêm thất bại!",
                            text: err.response.data,
                            timer: 3000,
                            });
                        });
                    }, 1000);
                    }),

                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                    let user = {
                        idtk: newData.idtk,
                        tentk: newData.tentk,
                        email: newData.email,
                        phone: newData.phone,
                        // pass: newData.pass,
                        phanquyen: newData.phanquyen,
                    };
                    let token = cookieService.get("tokenAdmin");
                    setTimeout(() => {
                        resolve();
                        return Axios({
                        method: "PUT",
                        url:"/updatetaikhoan",
                        data: user,
                        headers: { Authorization: "Bearer " + token.accessToken },
                        })
                        .then((result) => {
                            Swal.fire({
                            icon: "success",
                            title: "Cập nhật thành công!",
                            text: "",
                            timer: 2000,
                            });
                            this.props.getListUser();
                        })
                        .catch((err) => {
                            Swal.fire({
                            icon: "error",
                            title: "Cập nhật thất bại!",
                            text: err.response.data,
                            timer: 3000,
                            });
                        });
                    }, 1000);
                    }),

                onRowDelete: (oldData) =>
                    new Promise((resolve, reject) => {
                    setTimeout(() => {
                    let token = cookieService.get("tokenAdmin");
                        resolve();
                        return Axios({
                        method: "DELETE",
                        url: `/deletetaikhoan=${oldData.idtk}`,
                        headers: { Authorization: "Bearer " + token },
                        })
                        .then((result) => {
                            Swal.fire({
                            icon: "success",
                            title: "Xóa thành công!",
                            text: "",
                            timer: 2000,
                            });
                            this.props.getListUser();
                        })
                        .catch((err) => {
                            Swal.fire({
                            icon: "error",
                            title: "Xóa thất bại!",
                            text: err.response.data,
                            timer: 3000,
                            });
                        });
                    }, 1000);
                    }),
            }}
        />
        );
    }
}

const mapStateToProps = state => {
    return {
      userList: state.userReducer.userList
    };
}

const mapDispatchToProps = dispatch => {
    return { 
        getListUser: (token) => {
            dispatch(action.actGetListUser(token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanLyUser)
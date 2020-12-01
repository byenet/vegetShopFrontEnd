import React, { Component } from "react";
import MaterialTable from "material-table";
import Axios from "axios";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import * as action from "../../Redux/Actions/productAction"

class QuanLySanPham extends Component {
    componentDidMount() {
        this.props.getListAllSP();
    }

    constructor(props) {
        super(props);
        this.state = {
          columns: [
            {
              title: "ID",
              field: "idsp",
              editable: "never",
            },
            {
              title: "Tên SP",
              field: "tensp",
            },
            {
              title: "Giá",
              field: "giasp",
            },
            {
              title: "Thương Hiệu",
              field: "thuonghieu",
            },
            {
              title: "Tình Trạng",
              field: "tinhtrang",
            },
            {
              title: "Nguồn gốc",
              field: "khoiluong",
            },
            {
              title: "khối lượng",
              field: "khoiluong",
            },
            {
              title: "Chi tiết",
              field: "chitiet",
            },
          ],
        };
    }

    render() {
        console.log(this.props.ListAllSP);
        return (
        <MaterialTable
            title="Danh Sách Người Dùng"
            columns={this.state.columns}
            data={this.props.ListAllSP}
            options={{
            actionsColumnIndex: -1,
            addRowPosition: "first",
            }}
            editable={{
                // onRowAdd: (newData) =>
                //     new Promise((resolve) => {
                //     let user = {
                //         tentk: newData.tentk,
                //         email: newData.email,
                //         phone: newData.phone,
                //         pass: newData.pass,
                //         phanquyen: newData.phanquyen,
                //     };
                //     let token = cookieService.get("tokenAdmin");
                //     setTimeout(() => {
                //         resolve();
                //         return Axios({
                //         method: "POST",
                //         url: "/adduser",
                //         data: user,
                //         headers: { Authorization: "Bearer " + token },
                //         })
                //         .then((result) => {
                //             Swal.fire({
                //             icon: "success",
                //             title: "Thêm thành công!",
                //             text: "",
                //             timer: 2000,
                //             });
                //             this.props.getListUser();
                //         })
                //         .catch((err) => {
                //             Swal.fire({
                //             icon: "error",
                //             title: "Thêm thất bại!",
                //             text: err.response.data,
                //             timer: 3000,
                //             });
                //         });
                //     }, 1000);
                //     }),

                // onRowUpdate: (newData, oldData) =>
                //     new Promise((resolve, reject) => {
                //     let user = {
                //         idtk: newData.idtk,
                //         tentk: newData.tentk,
                //         email: newData.email,
                //         phone: newData.phone,
                //         pass: newData.pass,
                //         phanquyen: newData.phanquyen,
                //     };
                //     let token = cookieService.get("tokenAdmin");
                //     setTimeout(() => {
                //         resolve();
                //         return Axios({
                //         method: "PUT",
                //         url:"/updatetaikhoan",
                //         data: user,
                //         headers: { Authorization: "Bearer " + token.accessToken },
                //         })
                //         .then((result) => {
                //             Swal.fire({
                //             icon: "success",
                //             title: "Cập nhật thành công!",
                //             text: "",
                //             timer: 2000,
                //             });
                //             this.props.getListUser();
                //         })
                //         .catch((err) => {
                //             Swal.fire({
                //             icon: "error",
                //             title: "Cập nhật thất bại!",
                //             text: err.response.data,
                //             timer: 3000,
                //             });
                //         });
                //     }, 1000);
                //     }),

                // onRowDelete: (oldData) =>
                //     new Promise((resolve, reject) => {
                //     setTimeout(() => {
                //     let token = cookieService.get("tokenAdmin");
                //         resolve();
                //         return Axios({
                //         method: "DELETE",
                //         url: `/deletetaikhoan=${oldData.idtk}`,
                //         headers: { Authorization: "Bearer " + token },
                //         })
                //         .then((result) => {
                //             Swal.fire({
                //             icon: "success",
                //             title: "Xóa thành công!",
                //             text: "",
                //             timer: 2000,
                //             });
                //             this.props.getListUser();
                //         })
                //         .catch((err) => {
                //             Swal.fire({
                //             icon: "error",
                //             title: "Xóa thất bại!",
                //             text: err.response.data,
                //             timer: 3000,
                //             });
                //         });
                //     }, 1000);
                //     }),
            }}
        />
        );
    }
}

const mapStateToProps = state => {
    return {
      ListAllSP: state.productReducer.listAllSP,
    };
}

const mapDispatchToProps = dispatch => {
    return { 
        getListAllSP: () => {
            dispatch(action.actGetListAllProducts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanLySanPham)
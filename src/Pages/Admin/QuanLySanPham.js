import React, { Component } from "react";
import MaterialTable from "material-table";
import Axios from "axios";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import * as action from "../../Redux/Actions/productAction"
import { cookieService } from "../../Services/";
class QuanLySanPham extends Component {
  componentDidMount() {
    this.props.getListAllSP();
  }

  handleOnChange = (event) => {
    if(event.target.name === "hinhAnh"){
      this.setState(
        {
          file: event.target.files[0],
        }
      )
    }
    
  }

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      columns: [
        {
          title: "ID",
          field: "idsp",
          editable: "never",
        },
        {
          title: "Tên SP",
          field: "tensp",
          validate: (rowData) =>
            rowData.tensp === ""
              ? { isValid: false, helperText: "tên không được bỏ trống" }
              : true,
        },
        {
          title: "Hình ảnh",
          field: "hinhanh",
          validate: (rowData) =>
            rowData.hinhanh === ""
              ? { isValid: false, helperText: "Hình ảnh không được bỏ trống" }
              : true,
          editComponent: (props) => {
            return (
              <div>
                {/* <input
                  type="text"
                  value={props.value}
                  onChange={(e) => props.onChange(e.target.value)}
                /> */}
                <input
                  name="hinhAnh"
                  type="file"
                  className="form-control-file"
                  onChange={this.handleOnChange}
                />
              </div>
            );
          },
          render: (rowData) => (
            <img
              alt="anh sp"
              src={`./img${rowData.hinhanh.slice(
                rowData.hinhanh.lastIndexOf("\\"),
                rowData.hinhanh.length
              )}`}
              style={{ width: 150 }}
            />
          ),
        },
        {
          title: "Giá",
          field: "giasp",
          validate: (rowData) =>
            rowData.giasp === ""
              ? { isValid: false, helperText: "giá không được bỏ trống" }
              : true,
        },
        {
          title: "Thương Hiệu",
          field: "thuonghieu",
          validate: (rowData) =>
            rowData.thuonghieu === ""
              ? {
                  isValid: false,
                  helperText: "thương hiệu không được bỏ trống",
                }
              : true,
        },
        {
          title: "Tình Trạng",
          field: "tinhtrang",
          validate: (rowData) =>
            rowData.tinhtrang === ""
              ? { isValid: false, helperText: "tình trạng không được bỏ trống" }
              : true,
        },
        {
          title: "Nguồn gốc",
          field: "nguongoc",
          validate: (rowData) =>
            rowData.nguongoc === ""
              ? { isValid: false, helperText: "nguồn gốc không được bỏ trống" }
              : true,
        },
        {
          title: "khối lượng",
          field: "khoiluong",
          validate: (rowData) =>
            rowData.khoiluong === ""
              ? { isValid: false, helperText: "khối lương không được bỏ trống" }
              : true,
        },
        {
          title: "Chi tiết",
          field: "chitiet",
          cellStyle: {
            width: "400px",
          },
          validate: (rowData) =>
            rowData.chitiet === ""
              ? { isValid: false, helperText: "chi tiết không được bỏ trống" }
              : true,
        },
      ],
    };
  }

  render() {
    // console.log(this.props.ListAllSP);
    return (
      <MaterialTable
        title="Danh Sách Sản Phẩm"
        columns={this.state.columns}
        data={this.props.ListAllSP}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "first",
        }}
        editable={{
          onRowAdd: (newData) =>
              new Promise((resolve) => {
              let form_data = new FormData();
              form_data.append("tensp", newData.tensp);
              form_data.append("giasp", newData.giasp);
              form_data.append("thuonghieu", newData.thuonghieu);
              form_data.append("tinhtrang", newData.tinhtrang);
              form_data.append("nguongoc", newData.nguongoc);
              form_data.append("khoiluong", newData.khoiluong);
              form_data.append("chitiet", newData.chitiet);
              form_data.append("loaisp", 1);
              form_data.append("hinhanh", this.state.file);

              let token = cookieService.get("tokenAdmin");
              setTimeout(() => {
                  resolve();
                  return Axios({
                    method: "POST",
                    url: "http://localhost:8081/uploadsp",
                    data: form_data,
                    headers: {
                      Authorization: "Bearer " + token
                    },
                  })
                    .then((result) => {
                      Swal.fire({
                        icon: "success",
                        title: "Thêm thành công!",
                        text: "",
                        timer: 1000,
                      });
                      this.props.getListAllSP();
                    })
                    .catch((err) => {
                      Swal.fire({
                        icon: "error",
                        title: "Thêm thất bại!",
                        text: err.response.data,
                        timer: 2000,
                      });
                    });
                  // console.log(form_data)
              }, 1000);
              }),

          onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
              let form_data = new FormData();
              form_data.append("idsp", newData.idsp);
              form_data.append("tensp", newData.tensp);
              form_data.append("giasp", newData.giasp);
              form_data.append("thuonghieu", newData.thuonghieu);
              form_data.append("tinhtrang", newData.tinhtrang);
              form_data.append("nguongoc", newData.nguongoc);
              form_data.append("khoiluong", newData.khoiluong);
              form_data.append("chitiet", newData.chitiet);
              form_data.append("hinhanh", this.state.file);
              let token = cookieService.get("tokenAdmin");
              setTimeout(() => {
                  resolve();
                    return Axios({
                      method: "PUT",
                      url: "http://localhost:8081/uploadsp",
                      data: form_data,
                      headers: {
                        Authorization: "Bearer " + token,
                      },
                    })
                      .then((result) => {
                        Swal.fire({
                          icon: "success",
                          title: "Cập nhật thành công!",
                          text: "",
                          timer: 1000,
                        });
                        this.props.getListAllSP();
                      })
                      .catch((err) => {
                        Swal.fire({
                          icon: "error",
                          title: "Cập nhật thất bại!",
                          text: err.response.data,
                          timer: 2000,
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
                  url: `/xoasanpham=${oldData.idsp}`,
                  headers: { Authorization: "Bearer " + token },
                })
                  .then((result) => {
                    Swal.fire({
                      icon: "success",
                      title: "Xóa thành công!",
                      text: "",
                      timer: 1000,
                    });
                    this.props.getListAllSP();
                  })
                  .catch((err) => {
                    Swal.fire({
                      icon: "error",
                      title: "Xóa thất bại!",
                      text: err.response.data,
                      timer: 2000,
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
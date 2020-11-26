import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../../../Redux/Actions/userAction";
import * as yup from "yup";

const signupUserSchema = yup.object().shape({
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

});


class Login extends Component {
  _handleSubmit = (values) => {
    // console.log(values);
    this.props.login(values,this.props.history)
  };

  render() {
    return (
      <div>
        <div class="breadcrumb_background">
          <div class="title_full">
            <div class="container">
              <p class="title_page">Đăng nhập tài khoản</p>
            </div>
          </div>
          <section class="bread-crumb">
            <div class="container">
              <div class="row">
                <div class="w-100">
                  <ul class="breadcrumb breadcrumb_ul">
                    <li class="home">
                      <NavLink to="/">
                        <span>Trang chủ</span>
                      </NavLink>
                      <span class="mr_lr">
                        &nbsp;<i class="fa fa-angle-right"></i>&nbsp;
                      </span>
                    </li>

                    <li>
                      <strong>
                        <span>Đăng nhập tài khoản</span>
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="bg_base_lr">
          <div class="container">
            <div class="row row-noGutter-2">
              <div class="content_login_base">
                <div class="col-lg-6 col-md-6 col-sm-12 margin-form">
                  <div id="login">
                    <div class="form-signup form_hh">
                      <div class="row">
                        <div class="col-md-12 col-lg-12">
                          <h1 class="title_center_page title_customers">
                            <span>Đăng nhập tài khoản</span>
                          </h1>
                          <div class="content_all">
                            <Formik
                              initialValues={{
                                email: "",
                                pass: "",
                              }}
                              validationSchema={signupUserSchema}
                              onSubmit={this._handleSubmit}
                              render={(formikProps) => (
                                <Form>
                                  <fieldset class="content_r">
                                    <Field
                                      placeholder="Email"
                                      type="text"
                                      className="form-control"
                                      name="email"
                                      onChange={formikProps.handleChange}
                                    />
                                    <ErrorMessage name="email">
                                      {(msg) => (
                                        <div className="alert text-danger">
                                          {msg}
                                        </div>
                                      )}
                                    </ErrorMessage>
                                  </fieldset>
                                  <fieldset class="content_r">
                                    <Field
                                      placeholder="Mật Khẩu"
                                      type="password"
                                      className="form-control"
                                      name="pass"
                                      onChange={formikProps.handleChange}
                                    />
                                    <ErrorMessage name="pass">
                                      {(msg) => (
                                        <div className="alert text-danger">
                                          {msg}
                                        </div>
                                      )}
                                    </ErrorMessage>
                                  </fieldset>
                                  <div class="btn_style">
                                    <button
                                      value="Đăng nhập"
                                      class="button_gradient btn btn_customer"
                                    >
                                      Đăng nhập
                                    </button>
                                  </div>
                                  <span class="have_ac">
                                    Bạn chưa có tài khoản, vui lòng đăng ký {" "}
                                    <NavLink to ="/register">tại đây</NavLink>
                                  </span>
                                </Form>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProp = (dispatch) => {
  return {
    login: (user,history) => {
      dispatch(action.actGetInfoUser(user,history));
    },
  };
};
 

  

export default connect(null,mapDispatchToProp)(Login)



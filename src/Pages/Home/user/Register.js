import React, { Component } from 'react'
import { signupUserSchema } from "../../../Services/User";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { userService } from "../../../Services";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";

export default class Register extends Component {
  _handleSubmit = (values) => {
    // console.log(values);
    let {history} = this.props;
     userService.signupUser(values)
      .then((result) => {
        console.log(result.data);
        Swal.fire({
          icon: "success",
          title: "Đăng ký thành công",
          text: "Mời bạn đăng nhập và sử dụng",
          timer: 2000,
        });
        // console.log(history);
         history.push(`/login`);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Đăng ký thất bại!",
          text: "",
          timer: 3000,
        });
      });

  };

  render() {
    return (
      <div>
        <div class="breadcrumb_background">
          <div class="title_full">
            <div class="container">
              <p class="title_page">Đăng Ký tài khoản</p>
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
                        <span>Đăng ký tài khoản</span>
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
                            <span>Đăng ký tài khoản</span>
                          </h1>
                          <div class="content_all">
                            <Formik
                              initialValues={{
                                email: "",
                                pass: "",
                                tentk: "",
                                phone: "",
                              }}
                              validationSchema={signupUserSchema}
                              onSubmit={this._handleSubmit}
                              render={(formikProps) => (
                                <Form>
                                  <fieldset class="content_r">
                                    <Field
                                      placeholder="Họ và tên"
                                      type="text"
                                      className="form-control"
                                      name="tentk"
                                      onChange={formikProps.handleChange}
                                    />
                                    <ErrorMessage name="tentk">
                                      {(msg) => (
                                        <div className="alert text-danger">
                                          {msg}
                                        </div>
                                      )}
                                    </ErrorMessage>
                                  </fieldset>
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
                                      placeholder="Số điện thoại"
                                      type="text"
                                      className="form-control"
                                      name="phone"
                                      onChange={formikProps.handleChange}
                                    />
                                    <ErrorMessage name="phone">
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
                                    <button class="button_gradient btn btn_customer">
                                      Đăng ký
                                    </button>
                                  </div>
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

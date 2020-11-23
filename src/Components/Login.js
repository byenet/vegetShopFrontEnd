import React, { Component } from "react";
import { connect } from "react-redux";

export default class Login extends Component {
  render() {
    return (
        <div>
          <div className="breadcrumb_background">
            <div className="title_full">
              <div className="container">
                <p className="title_page">Đăng nhập tài khoản</p>
              </div>
            </div>
            <section className="bread-crumb">
              <div className="container">
                <div className="row">
                  <div className="w-100">
                    <ul className="breadcrumb breadcrumb_ul">
                      <li className="home">
                        <a href="/">
                          <span>Trang chủ</span>
                        </a>
                        <span className="mr_lr">
                          &nbsp;
                          <i className="fa fa-angle-right" />
                          &nbsp;
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
          {/* BEGIN FORM LOGIN */}
          <div className="bg_base_lr">
            <div className="container">
              <div className="row row-noGutter-2">
                <div className="content_login_base">
                  <div className="col-lg-6 col-md-6 col-sm-12 margin-form">
                    <div className="page_login_ page_base_h">
                      <div id="login">
                        <form action="/account/login" id="customer_login">
                          <div className="form-signup form_hh">
                            <div className="row">
                              <div className="col-md-12 col-lg-12">
                                <h1 className="title_center_page title_customers">
                                  <span>Đăng nhập tài khoản</span>
                                </h1>
                                <div className="content_all">
                                  <fieldset className="content_r">
                                    <input type="email" placeholder="Email" />
                                  </fieldset>
                                  <fieldset className="content_r">
                                    <input
                                      type="password"
                                      placeholder="Mật khẩu"
                                    />
                                  </fieldset>
                                </div>
                              </div>
                            </div>
                            <div className="btn_style">
                              <button
                                type="summit"
                                value="Đăng nhập"
                                className="button_gradient btn btn_customer"
                              >
                                Đăng nhập
                              </button>
                              <span className="recv-text">
                                <a id="rcv-pass">Quên mật khẩu</a>
                              </span>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END FORM LOGIN */}
        </div>
    );
  }
}

import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import Login from '../Pages/Home/user/Login';
import logo from "../Assets/img/logo.png";
import { connect } from "react-redux";
import {cookieService} from "../Services"
import * as action from "../Redux/Actions/userAction"
import Swal from "sweetalert2";
class Navbar extends Component {
  componentDidMount() {
    let token = cookieService.get("token");
    let tentk = cookieService.get("tentk");
    let idtk = cookieService.get("idtk");
    let phanquyen = cookieService.get("phanquyen");
    let userLog = {
      token,
      tentk,
      idtk,
      phanquyen,
    };
    if (token) {
      this.props.setUserLogin(userLog);
    }
  }

  handleOnClick = (event) => {
    // console.log(this.props);
    let { history } = this.props;
    if (event.target.name === "logout") {
      cookieService.remove("token", { path: "/" });
      cookieService.remove("tentk", { path: "/" });
      cookieService.remove("idtk", { path: "/" });
      cookieService.remove("phanquyen", { path: "/" });
      this.props.setUserLogin({});
      const url = this.props.match;
      // console.log(url);

      if (url.path === "/" || url.path === "/detail-product/:id") {
        Swal.fire({
          icon: "success",
          title: "Đã đăng xuất",
          text: "",
        });
      } else {
        let timerInterval;
        Swal.fire({
          icon: "success",
          title: "Đã đăng xuất",
          text: "",
          timer: 2000,
          timerProgressBar: true,
          onBeforeOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {}, 100);
          },

          onClose: () => {
            history.push(`/`);
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            history.push(`/`);
          }
        });
      }
    }
  };

  renderLogin = () => {
    if (this.props.user.tentk) {
      return (
        <div className="inline-b group_accout visible_index">
          <p>
            Hi, {this.props.user.tentk}
            <i className="fas fa-user ml-2" />
          </p>
          <div className="groupc">
            <a
              className="btn button_gradient"
              name="logout"
              onClick={this.handleOnClick}
            >
              Đăng xuất
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="inline-b group_accout visible_index">
          <i className="fas fa-user-plus" />
          <div className="groupc">
            <NavLink className="btn button_gradient" to="/login">
              Đăng nhập
            </NavLink>
            <NavLink to="/register">Đăng ký</NavLink>
          </div>
        </div>
      );
    }
  };

  render() {
    console.log(this.props.user.tentk);
    return (
      <header className="header header-s">
        <div className="container header-content">
          <div className="row">
            <div className="content-header w-100">
              {/*Navbar */}
              <nav className="navbar navbar-expand-lg p-0 navbar_header">
                {/* logo */}
                <div className="col-lg-3 col-md-3 p-0 content_header_logo">
                  <div className="logo-header">
                    <NavLink to="/">
                      {/* <img src="./img/logo.png" alt="logo" /> */}
                      <img src={logo} alt="logo" />
                    </NavLink>
                  </div>
                </div>
                <button
                  className="navbar-toggler nav_bar_btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="fas fa-bars" />
                </button>
                <div
                  className="collapse navbar-collapse wrap_main"
                  id="navbarSupportedContent"
                >
                  {/* nav_main */}
                  <ul className="navbar-nav nav_main">
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/">
                        Trang chủ
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Giới thiệu
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link " to="/">
                        Sản phẩm
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link " to="/">
                        Tin tức
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link " to="/">
                        Liên hệ
                      </NavLink>
                    </li>
                  </ul>
                  {/* cartgroup */}
                  <ul className="navbar-nav nav_main_left ml-auto">
                    <div className="cartgroup ">
                      {/* login, logout */}
                      {this.renderLogin()}
                      {/* cart */}
                      <div className="header-right">
                        <div className="top-cart-contain">
                          <div className="mini-cart ">
                            <div className="heading-cart cart_header">
                              <a
                                className="img_hover_cart"
                                href="#"
                                title="Giỏ hàng"
                              >
                                <div className="icon_hotline visible_index">
                                  <i className="fas fa-shopping-basket" />
                                  <span className="count_item button_gradient">
                                    0
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div className="top-cart-content">
                              <ul
                                id="cart-sidebar"
                                className="mini-products-list"
                              >
                                <div className="no-item">
                                  <p>Không có sản phẩm nào trong giỏ hàng.</p>
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </nav>
              {/*/.Navbar */}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setUserLogin: user => {
      dispatch(action.actResetUserLogin(user))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
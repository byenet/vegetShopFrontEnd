import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import logo from "../../Assets/img/logo.png";
import Swal from "sweetalert2";
import {cookieService} from "../../Services/"

class NavbarAdmin extends Component {
    handleOnClick = () => {
        cookieService.remove("tokenAdmin", { path: "/" });
        cookieService.remove("tentkAdmin", { path: "/" });
        cookieService.remove("idtkAdmin", { path: "/" });
        cookieService.remove("phanquyenAdmin", { path: "/" });
        this.props.history.push("/loginAdmin");
    }

    render() {
        let tkadmin = cookieService.get("tentkAdmin");
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
                          <div className="inline-b group_accout visible_index">
                            <p>
                              Hi, {tkadmin}
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
                          {/* cart */}
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

export default withRouter(NavbarAdmin);
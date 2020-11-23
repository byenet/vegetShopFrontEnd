import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
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
                            <a className href="#">
                            <img src="./img/logo.png" alt />
                            </a>
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
                            <a className="nav-link" href="#">
                                Trang chủ
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">
                                Giới thiệu
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link " href="#">
                                Sản phẩm
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link " href="#">
                                Tin tức
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link " href="#">
                                Liên hệ
                            </a>
                            </li>
                        </ul>
                        {/* cartgroup */}
                        <ul className="navbar-nav nav_main_left ml-auto">
                            <div className="cartgroup ">
                            {/* login, logout */}
                            <div className="inline-b group_accout visible_index">
                                <i className="fas fa-user-plus" />
                                <div className="groupc">
                                <a
                                    className="btn button_gradient"
                                    href="account/login.html"
                                >
                                    Đăng nhập
                                </a>
                                <a href="/account/register.html">Đăng ký</a>
                                </div>
                            </div>
                            {/* cart */}
                            <div className="header-right">
                                <div className="top-cart-contain">
                                <div className="mini-cart ">
                                    <div className="heading-cart cart_header">
                                    <a
                                        className="img_hover_cart"
                                        href="./cart/cart.html"
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
                                        <p>
                                            Không có sản phẩm nào trong giỏ hàng.
                                        </p>
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

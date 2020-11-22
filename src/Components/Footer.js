import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer mt-5">
            <div className="container footer_content">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="widget_first_childs margin-top-50">
                    <div className="logo_footer" style={{ marginBottom: 12 }}>
                    <a href="/" className="logo-wrapper">
                        <img src="./img/logo.png" alt="logo " />
                    </a>
                    </div>
                    <div className="widget-ft-top">
                    <div className="hotline_footer">
                        <ul className="contact padding-0">
                        <li className="li_footer_h">
                            <span className="txt_content_child">
                            <i className="fas fa-map-marker-alt" />
                            <span className="add">
                                30 Phạm Văn Đồng Cầu Giấy, Hà Nội
                            </span>
                            </span>
                        </li>
                        <li className="li_footer_h">
                            <span className="txt_content_childs">
                            <i className="fas fa-mobile-alt" />{" "}
                            <a className="hai01" href="tel:0359329688">
                                0359329688
                            </a>
                            </span>
                        </li>
                        <li className="li_footer_h">
                            <span className="txt_content_childs">
                            <i className="far fa-envelope" />{" "}
                            <a href="mailto:coolorganic@gmail.com">
                                coolorganic@gmail.com
                            </a>
                            </span>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 footer_menu">
                    <div className="widget-ft first">
                        <h4 className="title-menu">
                        <a
                            role="button"
                            className="collapsed"
                            data-toggle="collapse"
                            aria-expanded="false"
                            data-target="#collapseListMenu01"
                            aria-controls="collapseListMenu01"
                        >
                            Cẩm nang sử dụng{" "}
                            <i className="fa fa-plus" aria-hidden="true" />
                        </a>
                        </h4>
                        <div className="collapse" id="collapseListMenu01">
                        <ul className="list-menu">
                            <li className="li_menu">
                            <a title="Trang chủ" href="#">
                                Trang chủ
                            </a>
                            </li>
                            <li className="li_menu">
                            <a title="Giới thiệu" href="#">
                                Giới thiệu
                            </a>
                            </li>
                            <li className="li_menu">
                            <a title="Sản phẩm" href="#">
                                Sản phẩm
                            </a>
                            </li>
                            <li className="li_menu">
                            <a title="Tin tức" href="#">
                                Tin tức
                            </a>
                            </li>
                            <li className="li_menu">
                            <a title="Liên hệ" href="#">
                                Liên hệ
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 footer_menu">
                    <div className="widget-ft first">
                        <h4 className="title-menu">
                        <a
                            role="button"
                            className="collapsed"
                            data-toggle="collapse"
                            aria-expanded="false"
                            data-target="#collapseListMenu02"
                            aria-controls="collapseListMenu02"
                        >
                            Chính sách{" "}
                            <i className="fa fa-plus" aria-hidden="true" />
                        </a>
                        </h4>
                        <div className="collapse" id="collapseListMenu02">
                        <ul className="list-menu">
                            <li className="li_menu">
                            <a title="Trang chủ" href="#">
                                Trang chủ
                            </a>
                            </li>
                            <li className="li_menu">
                            <a title="Giới thiệu" href="#">
                                Giới thiệu
                            </a>
                            </li>
                            <li className="li_menu">
                            <a title="Sản phẩm" href="#">
                                Sản phẩm
                            </a>
                            </li>
                            <li className="li_menu">
                            <a title="Tin tức" href="#">
                                Tin tức
                            </a>
                            </li>
                            <li className="li_menu">
                            <a title="Liên hệ" href="#">
                                Liên hệ
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 footer_menu">
                    <div className="widget-ft first">
                        <h4 className="title-menu">
                        <a
                            role="button"
                            className="collapsed"
                            data-toggle="collapse"
                            aria-expanded="false"
                            data-target="#collapseListMenu03"
                            aria-controls="collapseListMenu03"
                        >
                            Dịch vụ <i className="fa fa-plus" aria-hidden="true" />
                        </a>
                        </h4>
                        <div className="collapse" id="collapseListMenu03">
                        <ul className="list-menu">
                            <li className="li_menu">
                            <a title="Trang chủ" href="#">
                                Trang chủ
                            </a>
                            </li>
                            <li className="li_menu">
                            <a title="Giới thiệu" href="#">
                                Giới thiệu
                            </a>
                            </li>
                            <li className="li_menu">
                            <a title="Sản phẩm" href="#">
                                Sản phẩm
                            </a>
                            </li>
                            <li className="li_menu">
                            <a title="Tin tức" href="#">
                                Tin tức
                            </a>
                            </li>
                            <li className="li_menu">
                            <a title="Liên hệ" href="#">
                                Liên hệ
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </footer>
    );
  }
}

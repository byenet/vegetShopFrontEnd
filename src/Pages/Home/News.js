import React, { Component } from "react";

export default class News extends Component {
  render() {
    return (
        <section className="new_blogs">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 col-xs-12">
                <div className="title_head heading">
                    <h2 title="Tin tức mới nhất">
                    <a href className="text_gradient">
                        Tin tức mới nhất
                    </a>
                    </h2>
                </div>
                </div>
            </div>
            <div className="row content_blog_new">
                <div className="col-md-12 col-lg-4 my_blog">
                <div className="blog_index">
                    <div className="image_my_blog">
                    <a className="img-blog" href>
                        <img
                        className="lazyload loaded"
                        src="./img/img_blog1.jpg"
                        />
                    </a>
                    <div className="date_blog">
                        <i className="far fa-calendar" />
                        <b className="color_main">27/03/2019</b> &nbsp;Đăng bởi:{" "}
                        <b className="color_main">Maque Team</b>
                    </div>
                    </div>
                    <div className="content_blog">
                    <div className="content_right">
                        <h3>
                        <a
                            href
                            title="Nhập khẩu rau quả vượt mốc 1 tỷ USD, Thái Lan chiếm 60% thị phần"
                        >
                            Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành
                            lao đao
                        </a>
                        </h3>
                    </div>
                    <div className="summary_item_blog">
                        <p>
                        {" "}
                        Khoảng gần một tuần nay, do ảnh hưởng của những cơn mưa
                        lớn kéo dài liên tiếp nên...
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-12 col-lg-4 my_blog">
                <div className="blog_index">
                    <div className="image_my_blog">
                    <a className="img-blog" href>
                        <img
                        className="lazyload loaded"
                        src="./img/img_blog2.jpg"
                        />
                    </a>
                    <div className="date_blog">
                        <i className="far fa-calendar" />
                        <b className="color_main">27/03/2019</b> &nbsp;Đăng bởi:{" "}
                        <b className="color_main">Maque Team</b>
                    </div>
                    </div>
                    <div className="content_blog">
                    <div className="content_right">
                        <h3>
                        <a
                            href
                            title="Nhập khẩu rau quả vượt mốc 1 tỷ USD, Thái Lan chiếm 60% thị phần"
                        >
                            Nhập khẩu rau quả vượt mốc 1 tỷ USD, Thái Lan chiếm 60%
                            thị phần
                        </a>
                        </h3>
                    </div>
                    <div className="summary_item_blog">
                        <p>
                        {" "}
                        Theo báo cáo từ Bộ NN&amp;PTNT, giá trị xuất khẩu hàng rau
                        quả tháng 9 năm 2017 ước đ...
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-12 col-lg-4 my_blog">
                <div className="blog_index">
                    <div className="image_my_blog">
                    <a className="img-blog" href>
                        <img
                        className="lazyload loaded"
                        src="./img/img_blog1.jpg"
                        />
                    </a>
                    <div className="date_blog">
                        <i className="far fa-calendar" />
                        <b className="color_main">27/03/2019</b> &nbsp;Đăng bởi:{" "}
                        <b className="color_main">Maque Team</b>
                    </div>
                    </div>
                    <div className="content_blog">
                    <div className="content_right">
                        <h3>
                        <a
                            href
                            title="Nhập khẩu rau quả vượt mốc 1 tỷ USD, Thái Lan chiếm 60% thị phần"
                        >
                            Bí quyết bảo quản nho đen trong tủ lạnh tươi lâu hơn
                        </a>
                        </h3>
                    </div>
                    <div className="summary_item_blog">
                        <p>
                        {" "}
                        Bí quyết lựa chọn và bảo quản nho tươi – Nho rất ngon và
                        tốt cho sức khỏe, tuy nh...
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
  }
}

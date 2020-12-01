import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
        <section className="about">
            <div className="container">
            <div className="row uti_content_top">
                <div className="col-lg-12 col-xs-12">
                <div className="title_brand heading">
                    <h2 title="Về chúng tôi">
                    <span className="text_gradient">Về chúng tôi</span>
                    </h2>
                    <p>
                    Hiện tại vùng nguyên liệu của chúng tôi có thể cung cấp các
                    thực tập tươi sạch với số lượng lớn vì đang vào vụ mùa thu
                    hoạch nên chúng tôi có thể cung ứng cho tất cả các đối tác
                    xuất khẩu nông sản trên cả nước.
                    </p>
                </div>
                </div>
            </div>
            <div className="row uti_content_bottom">
                <div className="col-lg-3 col-sm-6">
                <div className="uti_body">
                    <span className="icon">
                    <img src="./img/icon_uti_1.png" alt="" />
                    </span>
                    <div className="content">
                    <h4 className="title">Trang trại hữu cơ</h4>
                    <span className="sum">
                        Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất
                    </span>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                <div className="uti_body">
                    <span className="icon">
                    <img src="./img/icon_uti_2.png" alt="" />
                    </span>
                    <div className="content">
                    <h4 className="title">Thực vật sạch</h4>
                    <span className="sum">
                        Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất
                    </span>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                <div className="uti_body">
                    <span className="icon">
                    <img src="./img/icon_uti_3.png" alt="" />
                    </span>
                    <div className="content">
                    <h4 className="title">An toàn sinh học</h4>
                    <span className="sum">
                        Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất
                    </span>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                <div className="uti_body">
                    <span className="icon">
                    <img src="./img/icon_uti_4.png" alt="" />
                    </span>
                    <div className="content">
                    <h4 className="title">Đa dạng sinh học</h4>
                    <span className="sum">
                        Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất
                    </span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
  }
}

import React, { Component } from "react";
import { NavLink} from "react-router-dom";
export default class Description extends Component {
  render() {
    return (
      <section className="description">
        <div className="row row-noGutter">
          <div
            className="col-lg-3 col-md-6 banner_content banner_content1"
            style={{ backgroundImage: "url(./img/col_1.png)" }}
          >
            <div className="col_content">
              <div className="content_info">
                <h3 className="banner-title">
                  <NavLink to="/" title="Rau quả tươi">
                    Rau quả tươi
                  </NavLink>
                </h3>
                <span>
                  Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ
                  ràng, sạch, an toàn và đảm bảo chất lượng ngon nhất giao đến
                  tận tay người tiêu dùng, để san sẻ sự vất vả của các mẹ, các
                  chị
                </span>
                <NavLink to="/" className="btn btn_xem" title="Thực phẩm tươi">
                  Xem ngay
                </NavLink>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 banner_content banner_content2"
            style={{ backgroundImage: "url(./img/col_2.png)" }}
          >
            <div className="col_content">
              <div className="content_info" style={{}}>
                <h3 className="banner-title" style={{}}>
                  <NavLink to="/" title="Sinh tố hoa quả">
                    Sinh tố hoa quả
                  </NavLink>
                </h3>
                <span style={{}}>
                  Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ
                  ràng, sạch, an toàn và đảm bảo chất lượng ngon nhất giao đến
                  tận tay người tiêu dùng, để san sẻ sự vất vả của các mẹ, các
                  chị
                </span>
                <NavLink to="/" className="btn btn_xem" title="Thực phẩm tươi">
                  Xem ngay
                </NavLink>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 banner_content banner_content3"
            style={{ backgroundImage: "url(./img/col_3.png)" }}
          >
            <div className="col_content">
              <div className="content_info">
                <h3 className="banner-title">
                  <NavLink to="/" title="Thực phẩm tươi">
                    Thực phẩm tươi
                  </NavLink>
                </h3>
                <span>
                  Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ
                  ràng, sạch, an toàn và đảm bảo chất lượng ngon nhất giao đến
                  tận tay người tiêu dùng, để san sẻ sự vất vả của các mẹ, các
                  chị
                </span>
                <NavLink to="/" className="btn btn_xem" title="Thực phẩm tươi">
                  Xem ngay
                </NavLink>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 banner_content banner_content4"
            style={{ backgroundImage: "url(./img/col_4.png)" }}
          >
            <div className="col_content">
              <div className="content_info">
                <h3 className="banner-title">
                  <NavLink to="/" title="Hoa quả tươi mát">
                    Hoa quả tươi mát
                  </NavLink>
                </h3>
                <span>
                  Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ
                  ràng, sạch, an toàn và đảm bảo chất lượng ngon nhất giao đến
                  tận tay người tiêu dùng, để san sẻ sự vất vả của các mẹ, các
                  chị
                </span>
                <NavLink to="/" className="btn btn_xem" title="Thực phẩm tươi">
                  Xem ngay
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

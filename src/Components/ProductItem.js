import React, { Component } from 'react'
import NumberFormat from "react-number-format";
import { NavLink, withRouter } from "react-router-dom";


export default class ProductItem extends Component {

    render() {
        let{product} = this.props;
        console.log("Log anh: ");
        console.log(product.hinhanh);

        return (
          <>
            {/*products */}
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
              <div className="item wrp_item_small product-col">
                <div className="product-box-h product-base">
                  <div className="product-thumbnail">
                    <NavLink
                      className="image_link display_flex"
                      to={`/detail-product/${product.idsp}`}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        className="lazyload loaded "
                        // src="./img/chanh_tuoi.jpg"
                        // src="file:///C:/Users/nhathuy/Desktop/vegetshop3/VegetableShop/VegetableShop/uploads/muc.jpg"
                        src = {`./img/${product.idsp}.jpg`}
                      />
                    </NavLink>
                    <div className="product-action">
                      <form
                        action
                        method="post"
                        className="variants form-nut-grid"
                      >
                        <div className="group_action">
                          <input
                            className="hidden"
                            type="hidden"
                            name="variantId"
                          />
                          <button
                            className="btn btn-cart"
                            title="Tùy chọn"
                            type="button"
                          >
                            <span className="fas fa-shopping-basket" />
                          </button>
                          <a
                            title="Xem nhanh"
                            href
                            className="xem_nhanh btn-circle btn_view btn"
                            data-toggle="modal"
                            // data-target="#quick-view-product"
                            data-target={`#sp${product.idsp}`}
                          >
                            <span className="fas fa-search" />
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="product-info a-left">
                    <h3 className="product-name">
                      <a href title="Chanh tươi">
                        {product.tensp}
                      </a>
                    </h3>
                    <div className="product-hideoff">
                      <div className="product-hide">
                        <div className="price-box">
                          <div className="special-price">
                            <span className="price product-price">
                              <NumberFormat
                                value={product.giasp}
                                displayType={"text"}
                                thousandSeparator={true}
                              />
                              đ
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* modal */}
            <div
              id={`sp${product.idsp}`}
              // id="quick-view-product"
              className="modal quick-view-product"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="quick-view-product"
              aria-hidden="true"
            >
              <div className="quickview-overlay fancybox-overlay fancybox-overlay-fixed" />
              <div className="quick-view-product">
                <div className="block-quickview primary_block row details-product">
                  <div className="product-left-column col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="clearfix image-block">
                      <span className="view_full_size">
                        <a className="img-product a_flex_logo" title href="#">
                          <img
                            id="product-featured-image-quickview"
                            className="img-responsive product-featured-image-quickview"
                            src="./img/chanh_tuoi.jpg"
                            alt="quickview"
                          />
                        </a>
                      </span>
                      <div
                        className="loading-imgquickview"
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                  <div
                    className="product-center-column product-info product-item col-xs-6 col-sm-6 col-md-6 col-lg-6 details-pro"
                    id
                  >
                    <h3 className="qwp-name title-product">
                      <a className="text2line" title={product.tensp}>
                        {product.tensp}
                      </a>
                    </h3>
                    <div className="left_vend">
                      <span className="vendor_">
                        <span>Thương hiệu: </span>
                        {product.thuonghieu}
                      </span>
                      <span className="line">|</span>
                      Tình trạng:{" "}
                      <span className="soluong1">{product.tinhtrang}</span>
                    </div>
                    <div className="prices price-box">
                      <span className="price product-price sale-price">
                        <NumberFormat
                          value={product.giasp}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                        đ
                      </span>
                    </div>
                    <div className="product-description product-summary">
                      <div className="rte">
                        <p>Nguồn gốc: {product.nguongoc}</p>
                        <p>Khối lượng: {product.khoiluong}</p>
                        <p style={{ textAlign: "justify" }}>
                          {product.chitiet}
                        </p>
                      </div>
                    </div>
                    <form
                      action
                      method="post"
                      encType="multipart/form-data"
                      className="quick_option variants form-ajaxtocart form-product"
                      id
                    >
                      <div className="quantity_wanted_p">
                        <div className="button_actions clearfix">
                          <button
                            type="submit"
                            className="button_gradient btn btn_base"
                          >
                            <span className="btn-content">
                              Thêm vào giỏ hàng
                            </span>
                          </button>
                        </div>
                      </div>
                      <input type="hidden" name="id" defaultValue={14084699} />
                      <input
                        type="hidden"
                        name="variantId"
                        defaultValue={23813702}
                      />
                    </form>
                    <div className="call_phone_buy f-left w_100">
                      <div>
                        <span>
                          Gọi đặt mua: <a href="tel:0359329688">0359329688</a>{" "}
                          để nhanh chóng đặt hàng
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  title="Close"
                  className="quickview-close close-window"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fas fa-times" />
                </a>
              </div>
            </div>
          </>
        );
    }
}

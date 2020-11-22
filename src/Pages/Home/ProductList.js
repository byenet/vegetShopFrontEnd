import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    return (
      <section className="products">
        <div className="container product_content">
          <div className="row">
            <div className="col-lg-12 col-xs-12">
              <div className="title_head heading">
                <h2 title="Danh mục sản phẩm">
                  <a href className="text_gradient">
                    Danh mục sản phẩm
                  </a>
                </h2>
              </div>
            </div>
          </div>
          {/* tab_link_modue products*/}
          <div className="row tab_link_module">
            <ul className="ul_link link_tab_check_click">
              <li className="li_tabs li_h">
                <button className="head-tabs head-tab1 active">Rau củ</button>
              </li>
              <li className="li_tabs li_h">
                <button className="head-tabs head-tab2">Hoa quả</button>
              </li>
              <li className="li_tabs li_h">
                <button className="head-tabs head-tab3">Hải sản</button>
              </li>
              <li className="li_tabs li_h">
                <button className="head-tabs head-tab4">Các loại hạt</button>
              </li>
              <li className="li_tabs li_h">
                <button className="head-tabs head-tab5">
                  Thực phẩm tươi sống
                </button>
              </li>
            </ul>
          </div>
          {/* Products */}
          <div className="row products_view_grid" id="myTabContent">
            {/* Rau củ products */}
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
              <div className="item wrp_item_small product-col">
                <div className="product-box-h product-base">
                  <div className="product-thumbnail">
                    <a
                      className="image_link display_flex"
                      href
                      title="Chanh tươi"
                    >
                      <img
                        className="lazyload loaded "
                        src="./img/chanh_tuoi.jpg"
                      />
                    </a>
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
                            data-target="#quick-view-product"
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
                        Chanh tươi
                      </a>
                    </h3>
                    <div className="product-hideoff">
                      <div className="product-hide">
                        <div className="price-box">
                          <div className="special-price">
                            <span className="price product-price">30.000₫</span>
                          </div>
                          <div className="old-price">
                            <span className="price product-price-old">
                              45.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
              <div className="item wrp_item_small product-col">
                <div className="product-box-h product-base">
                  <div className="product-thumbnail">
                    <a
                      className="image_link display_flex"
                      href
                      title="Quả óc chó"
                    >
                      <img
                        className="lazyload loaded "
                        src="./img/qua_oc_cho.jpg"
                      />
                    </a>
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
                            data-target="#quick-view-product"
                          >
                            <span className="fas fa-search" />
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="product-info a-left">
                    <h3 className="product-name">
                      <a href title="Quả óc chó">
                        Quả óc chó
                      </a>
                    </h3>
                    <div className="product-hideoff">
                      <div className="product-hide">
                        <div className="price-box">
                          <div className="special-price">
                            <span className="price product-price">
                              430.000₫
                            </span>
                          </div>
                          <div className="old-price">
                            <span className="price product-price-old">
                              450.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
              <div className="item wrp_item_small product-col">
                <div className="product-box-h product-base">
                  <div className="product-thumbnail">
                    <a
                      className="image_link display_flex"
                      href
                      title="Hạt dẻ cười"
                    >
                      <img
                        className="lazyload loaded "
                        src="./img/hat_de_cuoi.jpg"
                      />
                    </a>
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
                            data-target="#quick-view-product"
                          >
                            <span className="fas fa-search" />
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="product-info a-left">
                    <h3 className="product-name">
                      <a href title="Hạt dẻ cười">
                        Hạt dẻ cười
                      </a>
                    </h3>
                    <div className="product-hideoff">
                      <div className="product-hide">
                        <div className="price-box">
                          <div className="special-price">
                            <span className="price product-price">
                              280.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
              <div className="item wrp_item_small product-col">
                <div className="product-box-h product-base">
                  <div className="product-thumbnail">
                    <a
                      className="image_link display_flex"
                      href
                      title="Hành tây đặc biệt"
                    >
                      <img
                        className="lazyload loaded "
                        src="./img/hanh_tay.jpg"
                      />
                    </a>
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
                            data-target="#quick-view-product"
                          >
                            <span className="fas fa-search" />
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="product-info a-left">
                    <h3 className="product-name">
                      <a href title="Hành tây đặc biệt">
                        Hành tây đặc biệt
                      </a>
                    </h3>
                    <div className="product-hideoff">
                      <div className="product-hide">
                        <div className="price-box">
                          <div className="special-price">
                            <span className="price product-price">55.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
              <div className="item wrp_item_small product-col">
                <div className="product-box-h product-base">
                  <div className="product-thumbnail">
                    <a
                      className="image_link display_flex"
                      href
                      title="Súp lơ trắng"
                    >
                      <img
                        className="lazyload loaded "
                        src="./img/sup_lo.jpg"
                      />
                    </a>
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
                            data-target="#quick-view-product"
                          >
                            <span className="fas fa-search" />
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="product-info a-left">
                    <h3 className="product-name">
                      <a href title="Súp lơ trắng">
                        Súp lơ trắng
                      </a>
                    </h3>
                    <div className="product-hideoff">
                      <div className="product-hide">
                        <div className="price-box">
                          <div className="special-price">
                            <span className="price product-price">20.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
              <div className="item wrp_item_small product-col">
                <div className="product-box-h product-base">
                  <div className="product-thumbnail">
                    <a
                      className="image_link display_flex"
                      href
                      title="Nho mỹ nhập khẩu"
                    >
                      <img
                        className="lazyload loaded "
                        src="./img/anh_nho.jpg"
                      />
                    </a>
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
                            data-target="#quick-view-product"
                          >
                            <span className="fas fa-search" />
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="product-info a-left">
                    <h3 className="product-name">
                      <a href title="Nho mỹ nhập khẩu">
                        Nho mỹ nhập khẩu
                      </a>
                    </h3>
                    <div className="product-hideoff">
                      <div className="product-hide">
                        <div className="price-box">
                          <div className="special-price">
                            <span className="price product-price">
                              235.000₫
                            </span>
                          </div>
                          <div className="old-price">
                            <span className="price product-price-old">
                              265.000₫
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
              <div className="item wrp_item_small product-col">
                <div className="product-box-h product-base">
                  <div className="product-thumbnail">
                    <a
                      className="image_link display_flex"
                      href
                      title="Rau cải bẹ xanh non"
                    >
                      <img
                        className="lazyload loaded "
                        src="./img/rau_cai.jpg"
                      />
                    </a>
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
                            data-target="#quick-view-product"
                          >
                            <span className="fas fa-search" />
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="product-info a-left">
                    <h3 className="product-name">
                      <a href title="Rau cải bẹ xanh non">
                        Rau cải bẹ xanh non
                      </a>
                    </h3>
                    <div className="product-hideoff">
                      <div className="product-hide">
                        <div className="price-box">
                          <div className="special-price">
                            <span className="price product-price">20.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
              <div className="item wrp_item_small product-col">
                <div className="product-box-h product-base">
                  <div className="product-thumbnail">
                    <a
                      className="image_link display_flex"
                      href
                      title="Dưa lưới nhập khẩu Thái Lan"
                    >
                      <img
                        className="lazyload loaded "
                        src="./img/dua_luoi.jpg"
                      />
                    </a>
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
                            data-target="#quick-view-product"
                          >
                            <span className="fas fa-search" />
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="product-info a-left">
                    <h3 className="product-name">
                      <a href title="Dưa lưới nhập khẩu Thái Lan">
                        Dưa lưới nhập khẩu Thái Lan
                      </a>
                    </h3>
                    <div className="product-hideoff">
                      <div className="product-hide">
                        <div className="price-box">
                          <div className="special-price">
                            <span className="price product-price">90.000₫</span>
                          </div>
                          <div className="old-price">
                            <span className="price product-price-old">
                              190.000₫
                            </span>
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

        <div
          id="quick-view-product"
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
                  <a
                    className="text2line"
                    href="/chanh-tuoi"
                    title="Chanh tươi"
                  >
                    Chanh tươi
                  </a>
                </h3>
                <div className="left_vend">
                  <span className="vendor_">
                    <span>Thương hiệu: </span>Đang cập nhật
                  </span>
                  <span className="line">|</span>
                  Tình trạng: <span className="soluong1">Còn hàng</span>
                </div>
                <div className="prices price-box">
                  <span className="price product-price sale-price">
                    30.000₫
                  </span>
                  <del className="old-price">45.000₫</del>
                </div>
                <div className="product-description product-summary">
                  <div className="rte">
                    <p>Nguồn gốc: Việt Nam</p>
                    <p>Khối lượng: 1kg/ hộp</p>
                    <p style={{ textAlign: "justify" }}>
                      Các chuyên gia dinh dưỡng khuyên rằng mỗi ngày bạn hãy
                      uống 1 ly nước chanh tươi ấm pha với mật ong để không
                      ngừng nâng cao sức đề kháng, tăng cường hệ thống miễn dịch
                      và bảo vệ sức khỏe
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
                    <div className="soluong_qv form-group form_product_content">
                      <div className="input_qty_qv_ soluong">
                        <span className="header_qv label_sl">Số lượng: </span>
                        <div className="input_qty_qvs input_number_product custom-btn-number">
                          <button className="btn_num num_1 button button_qty">
                            -
                          </button>
                          <input
                            type="text"
                            id="quantity-detail"
                            name="quantity"
                            defaultValue={1}
                            maxLength={2}
                            className="form-control prd_quantity"
                          />
                          <button className="btn_num num_2 button button_qty">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="button_actions clearfix">
                      <button
                        type="submit"
                        className="button_gradient btn btn_base"
                      >
                        <span className="btn-content">Thêm vào giỏ hàng</span>
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
                      Gọi đặt mua: <a href="tel:0359329688">0359329688</a> để
                      nhanh chóng đặt hàng
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
      </section>
    );
  }
}

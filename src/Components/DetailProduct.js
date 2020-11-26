import React, { Component } from "react";
import * as actionProduct from "../Redux/Actions/productAction";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import NumberFormat from "react-number-format";

class DetailProduct extends Component {
  render() {
    let {product} = this.props
    // console.log(product);
    return (
      <>
        <div className="breadcrumb_background">
          <div className="title_full">
            <div className="container">
              <p className="title_page">{product.tensp}</p>
            </div>
          </div>
          <section className="bread-crumb">
            <div className="container">
              <div className="row">
                <div className="w-100">
                  <ul className="breadcrumb breadcrumb_ul">
                    <li className="home">
                      <NavLink to="/">
                        <span>Trang chủ</span>
                      </NavLink>
                      <span className="mr_lr">
                        &nbsp;
                        <i className="fa fa-angle-right" />
                        &nbsp;
                      </span>
                    </li>
                    <li>
                      <strong>
                        <span>{product.tensp}</span>
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* BEGIN PROCDUCT INFO */}
        <div className="container">
          <div className="row details-product">
            <div className="product-detail-left product-images col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="col_large_default large-image">
                <a href="#">
                  <img
                    className
                    src= {`../img/${product.idsp}.jpg`}
                    alt
                  />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 details-pro">
              <h1 className="title-product">{product.tensp}</h1>
              <div className="fw w_100">
                <div className="group-status">
                  <span className="first_status">
                    Thương hiệu:{" "}
                    <span className="status_name">{product.thuonghieu}</span>
                  </span>
                  <span className="first_status status_2">
                    <span className="line_tt hidden-sm">|</span> Tình trạng:
                    <span className="status_name availabel">
                      {product.tinhtrang}
                    </span>
                  </span>
                </div>
                <div className="reviews_details_product">
                  <div className="bizweb-product-reviews-badge" />
                </div>
                <div className="price-box">
                  <span className="special-price">
                    <span className="price product-price">
                      <NumberFormat
                        value={product.giasp}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                      đ
                    </span>
                  </span>
                  {/* Giá Khuyến mại */}
                </div>
              </div>
              <div className="product-summary product_description">
                <div className="rte description  rte-summary">
                  <p>Nguồn gốc: {product.nguongoc}</p>
                  <p>Khối lượng: {product.khoiluong}</p>
                  <p style={{ textAlign: "justify" }}>{product.chitiet}</p>
                </div>
              </div>
              <div className="form-product">
                <form id="add-to-cart-form" className="form-inline">
                  <div className="form-group form_button_details ">
                    <div className="form_product_content f-left w_100 ">
                      <div className="count_btn_style">
                        <div className="button_actions">
                          <button
                            type="submit"
                            className="button_gradient btn btn_add_cart btn-cart add_to_cart btn_base"
                          >
                            <span className="btn-image"></span>
                            <span className="btn-content">
                              Thêm vào giỏ hàng
                            </span>
                          </button>
                        </div>
                      </div>
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  componentDidMount(){
    // console.log(this.props.match.params.id);
    const idParams = this.props.match.params.id;
    this.props.getDetailProduct(idParams);
  }

}

const mapStateToProps = state => {
  return {
    product: state.productReducer.product
  };
}

const mapDispatchToProps = dispatch => {
  return { 
    getDetailProduct: id => {
      dispatch(actionProduct.actGetDetailProduct(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailProduct)
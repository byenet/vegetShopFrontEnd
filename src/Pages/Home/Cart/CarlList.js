import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import * as action from "../../../Redux/Actions/cardActions"
import { connect } from "react-redux";
import CartItem from "./CartItem";
import NumberFormat from "react-number-format";

class CarlList extends Component {

  renderCart = () => {
    let {cart} = this.props;
    // console.log(cart);
    return cart.map((item, index) => {
      return <CartItem key={index} cart={item}/>
    })
  }

  render() {
    // console.log(this.props.cart);
    let {cart} = this.props
    return (
      <div>
        {/* Begin Background bottom */}
        <div className="breadcrumb_background">
          <div className="title_full">
            <div className="container">
              <p className="title_page">Giỏ hàng</p>
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
                        <span>Giỏ hàng</span>
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* End Background bottom */}

        <section className="main-cart-page main-container">
          <div className="main container">
            {/* tite */}
            <div className="row header-cart">
              <h1 className="title_cart" title="Giỏ hàng của bạn">
                <p>
                  Giỏ hàng của bạn{" "}
                  <span>
                    (
                    <span className="cart-popup-count">
                      {cart.reduce((tongSoLuong, cartItem) => {
                        return (tongSoLuong += cartItem.soluong);
                      }, 0)}
                    </span>{" "}
                    sản phẩm)
                  </span>
                </p>
              </h1>
            </div>
            <div className="row col-main cart_desktop_page cart-page">
              {this.renderCart()}
            </div>
            <div className="col-sm-12 col-md-12 col-xs-12">
              <div className="totals">
                <div className="inner">
                  <table
                    className="table shopping-cart-table-total"
                    id="shopping-cart-totals-table"
                  >
                    <tfoot>
                      <tr>
                        <td className="a-right" style={{ border: "none" }}>
                          <span className="tt">Thành tiền:</span>
                          <strong>
                            <span className="totals_price price">
                              <NumberFormat
                                value={ parseInt(cart.reduce((tongGia, cartItem) => {
                                  return (tongGia += cartItem.tonggia);
                                }, 0))}
                                displayType={"text"}
                                thousandSeparator={true}
                              />
                              đ
                            </span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  <div className="checkout">
                    <div>
                      <button
                        className="btn btn-primary button btn-proceed-checkout button_gradient"
                        title="Tiến hành đặt hàng"
                        type="button"
                      >
                        <span>Đặt hàng ngay</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart,
  };
}

export default connect(mapStateToProps)(CarlList)
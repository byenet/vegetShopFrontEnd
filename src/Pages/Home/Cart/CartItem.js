import React, { Component } from 'react';
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import {cartService} from "../../../Services/";
import * as actionCart from "../../../Redux/Actions/cardActions";
// import Swal from "sweetalert2";

class CartItem extends Component {
  handleReductionCart = () => {
      if(this.props.cart.soluong > 1){
        cartService
          .reductionCart(
            this.props.user.idtk,
            this.props.cart.idsp,
            this.props.user.token
          )
          .then((result) => {
            console.log("reduceCart success");
          })
          .then(() => {
            this.props.getListCart(this.props.user.idtk, this.props.user.token);
          })
          .catch((err) => {
            console.log(err);
          });
      }
  }

  handleIncreaseCart = () => {
    // console.log(this.props.user.idtk);
    // console.log(this.props.cart.idsp);
    cartService
      .increaseCart(
        this.props.user.idtk,
        this.props.cart.idsp,
        this.props.user.token
      )
      .then((result) => {
        console.log("increaseCart success");
      })
      .then(() => {
        this.props.getListCart(this.props.user.idtk, this.props.user.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleDeleteCart = () => {
    cartService
      .removeCart(this.props.cart.idcart, this.props.user.token)
      .then((result) => {
        console.log(" xoa thanh cong");
      })
      .then(() => {
        this.props.getListCart(this.props.user.idtk, this.props.user.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    // console.log(this.props.user);
    let { cart } = this.props;
    let linkAnh = cart.hinhanh.slice(
      cart.hinhanh.lastIndexOf("\\"),
      cart.hinhanh.length
    );
    // console.log(cart);
    return (
      <div className="cart-tbody col-sm-12 col-md-12 col-xs-12 d-flex">
        <div className="item-cart">
          <div className="image cart1">
            <a className="product-image">
              <img className="w-100" alt="" src={`./img${linkAnh}`} />
            </a>
          </div>
          <div className="info cart2">
            <h2 className="product-name">
              <p style={{ display: "inline" }}>{cart.tensp}</p>
            </h2>
            <span className="item-price">
              <span className="price pricechange">
                <NumberFormat
                  value={cart.giasp}
                  displayType={"text"}
                  thousandSeparator={true}
                />
                đ
              </span>
            </span>
          </div>
          <div className="cart_sl">
            <div className="input_number_product custom-btn-number">
              <button
                className="btn_num num_1 button button_qty"
                onClick={this.handleReductionCart}
              >
                -
              </button>
              <input
                type="text"
                id="quantity-detail"
                name="quantity"
                value={cart.soluong}
                className="form-control prd_quantity"
              />
              <button
                className="btn_num num_2 button button_qty"
                onClick={this.handleIncreaseCart}
              >
                +
              </button>
            </div>
          </div>
          <div className="cart6">
            <span className="tongtien">Tổng tiền:</span>
            <span className="cart-price">
              <span className="price">
                <NumberFormat
                  value={parseInt(cart.tonggia)}
                  displayType={"text"}
                  thousandSeparator={true}
                />
                đ
              </span>
            </span>
            <a
              style={{ cursor: "pointer" }}
              className="button remove-item remove-item-cart"
              title="Xóa"
              onClick={this.handleDeleteCart}
            >
              <span>
                <i className="fas fa-trash" />
              </span>
              Xóa
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getListCart: (id, token) => {
      dispatch(actionCart.actGetListCart(id, token))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
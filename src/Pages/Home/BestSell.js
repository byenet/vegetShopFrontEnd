import React, { Component } from 'react'

export default class BestSell extends Component {
    render() {
        return (
            <section className="best_sell">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-xs-12">
                    <div className="title_head heading">
                        <h2 title="Sản phấm bán chạy">
                        <a href className="text_gradient">
                            Sản phẩm bán chạy
                        </a>
                        </h2>
                    </div>
                    </div>
                </div>
                {/* Products */}
                <div className="row products_view_grid products_best_sell_grid ">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                    <div className="item wrp_item_small product-col">
                        <div className="product-box-h product-base">
                        <div className="product-thumbnail">
                            <a
                            className="image_link display_flex"
                            href
                            title="Vải thiều Thanh Hà"
                            >
                            <img
                                className="lazyload loaded "
                                src="./img/anh_vai.jpg"
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
                                    href="#"
                                    className="xem_nhanh btn-circle btn_view btn"
                                >
                                    <span className="fas fa-search" />
                                </a>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="product-info a-left">
                            <h3 className="product-name">
                            <a href title="Vải thiều Thanh Hà">
                                Vải thiều Thanh Hà
                            </a>
                            </h3>
                            <div className="product-hideoff">
                            <div className="product-hide">
                                <div className="price-box">
                                <div className="special-price">
                                    <span className="price product-price">
                                    40.000₫
                                    </span>
                                </div>
                                <div className="old-price">
                                    <span className="price product-price-old">
                                    79.000₫
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
                            title="Đào đảo Mỹ"
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
                                    href = "#"
                                    className="xem_nhanh btn-circle btn_view btn"
                                >
                                    <span className="fas fa-search" />
                                </a>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="product-info a-left">
                            <h3 className="product-name">
                            <a href title="Đào đảo Mỹ">
                                Đào đảo Mỹ
                            </a>
                            </h3>
                            <div className="product-hideoff">
                            <div className="product-hide">
                                <div className="price-box">
                                <div className="special-price">
                                    <span className="price product-price">
                                    31.000₫
                                    </span>
                                </div>
                                <div className="old-price">
                                    <span className="price product-price-old">
                                    39.000₫
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
                            title="Dâu tây Đà Lạt"
                            >
                            <img
                                className="lazyload loaded "
                                src="./img/dau_tay.jpg"
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
                                    href = "#"
                                    className="xem_nhanh btn-circle btn_view btn"
                                >
                                    <span className="fas fa-search" />
                                </a>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="product-info a-left">
                            <h3 className="product-name">
                            <a href title="Dâu tây Đà Lạt">
                                Dâu tây Đà Lạt
                            </a>
                            </h3>
                            <div className="product-hideoff">
                            <div className="product-hide">
                                <div className="price-box">
                                <div className="special-price">
                                    <span className="price product-price">
                                    350.000₫
                                    </span>
                                </div>
                                <div className="old-price">
                                    <span className="price product-price-old">
                                    380.000₫
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
                            title="Táo xanh Mỹ"
                            >
                            <img
                                className="lazyload loaded "
                                src="./img/anh_tao.jpg"
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
                                    href = "#"
                                    className="xem_nhanh btn-circle btn_view btn"
                                >
                                    <span className="fas fa-search" />
                                </a>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="product-info a-left">
                            <h3 className="product-name">
                            <a href title="Táo xanh Mỹ">
                                Táo xanh Mỹ
                            </a>
                            </h3>
                            <div className="product-hideoff">
                            <div className="product-hide">
                                <div className="price-box">
                                <div className="special-price">
                                    <span className="price product-price">
                                    160.000₫
                                    </span>
                                </div>
                                <div className="old-price">
                                    <span className="price product-price-old">
                                    220.000₫
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
            </section>
        );
    }
}

import React, { Component } from "react";

export default class Brand extends Component {
  render() {
    return (
        <section className="top_brand">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 col-xs-12">
                <div className="title_head heading">
                    <h2 title="Top thương hiệu">
                    <a href className="text_gradient">
                        Top thương hiệu
                    </a>
                    </h2>
                </div>
                </div>
            </div>
            <div className="row item_fix_brand">
                <div className="col-sm-4 col-md-2">
                <div className="item_brand">
                    <a className="img_" href="#">
                    <img src="./img/brand_1.png" alt />
                    </a>
                </div>
                </div>
                <div className="col-sm-4 col-md-2">
                <div className="item_brand">
                    <a className="img_" href="#">
                    <img src="./img/brand_2.png" alt />
                    </a>
                </div>
                </div>
                <div className="col-sm-4 col-md-2">
                <div className="item_brand">
                    <a className="img_" href="#">
                    <img src="./img/brand_3.png" alt />
                    </a>
                </div>
                </div>
                <div className="col-sm-4 col-md-2">
                <div className="item_brand">
                    <a className="img_" href="#">
                    <img src="./img/brand_4.png" alt />
                    </a>
                </div>
                </div>
                <div className="col-sm-4 col-md-2">
                <div className="item_brand">
                    <a className="img_" href="#">
                    <img src="./img/brand_5.png" alt />
                    </a>
                </div>
                </div>
                <div className="col-sm-4 col-md-2">
                <div className="item_brand">
                    <a className="img_" href="#">
                    <img src="./img/brand_1.png" alt />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
  }
}

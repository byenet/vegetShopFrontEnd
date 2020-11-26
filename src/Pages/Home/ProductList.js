import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../Redux/Actions/productAction"
import ProductItem from "../../Components/ProductItem";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "raucu",
    };
  }

   
  renderTab = (name) => {
    switch (name) {
      case "raucu":
        this.setState({
          tab: "raucu",
        });
        this.props.switchListRender(this.props.listRauCuSP);
        break;
      case "hoaqua":
        this.setState({
          tab: "hoaqua",
        });
        this.props.switchListRender(this.props.listHoaQuaSP);
        break;
      case "haisan":
        this.setState({
          tab: "haisan",
        });
        this.props.switchListRender(this.props.listHaiSanSP);
        break;
      case "hat":
        this.setState({
          tab: "hat",
        });
        this.props.switchListRender(this.props.listHatSP);
        break;
      case "tptuoi":
        this.setState({
          tab: "tptuoi",
        });
        this.props.switchListRender(this.props.listTuoiSP);
        break;
      default:
        break;
    }
  }


  renderProduct = () => {
    let {listRender} = this.props;
    return listRender.map((item, index) => {
      return <ProductItem key={index} product={item} />;
    })
  }

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
            <ul
              className="ul_link link_tab_check_click tabs nav"
              role="tablist"
            >
              <li className="li_tabs li_h nav-item">
                {/* <button class="head-tabs head-tab1 active">Rau củ</button> */}
                <a
                  className="nav-link active head-tabs head-tab1"
                  href="#rauCu"
                  role="tab"
                  data-toggle="tab"
                  onClick={() => {
                    this.renderTab("raucu");
                  }}
                >
                  Rau củ
                </a>
              </li>
              <li className="li_tabs li_h nav-item">
                {/* <button class="head-tabs head-tab2">Hoa quả</button> */}
                <a
                  className="nav-link head-tabs head-tab1"
                  href="#hoaqua"
                  role="tab"
                  data-toggle="tab"
                  onClick={() => {
                    this.renderTab("hoaqua");
                  }}
                >
                  Hoa quả
                </a>
              </li>
              <li className="li_tabs li_h nav-item">
                {/* <button class="head-tabs head-tab3">Hải sản</button> */}
                <a
                  className="nav-link head-tabs head-tab1"
                  href="#haiSan"
                  role="tab"
                  data-toggle="tab"
                  onClick={() => {
                    this.renderTab("haisan");
                  }}
                >
                  Hải sản
                </a>
              </li>
              <li className="li_tabs li_h nav-item">
                {/* <button class="head-tabs head-tab4">Các loại hạt</button> */}
                <a
                  className="nav-link head-tabs head-tab1"
                  href="#hat"
                  role="tab"
                  data-toggle="tab"
                  onClick={() => {
                    this.renderTab("hat");
                  }}
                >
                  Các loại hạt
                </a>
              </li>
              <li className="li_tabs li_h nav-item">
                {/* <button class="head-tabs head-tab5">Thực phẩm tươi sống</button> */}
                <a
                  className="nav-link head-tabs head-tab1"
                  href="#tpTuoi"
                  role="tab"
                  data-toggle="tab"
                  onClick={() => {
                    this.renderTab("tptuoi");
                  }}
                >
                  Thực phẩm tươi sống
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content products_view_grid" id="myTabContent">
            <div
              role="tabpanel"
              className="row tab-pane active"
              id={this.state.tab}
            >
              {this.renderProduct()}
            </div>
          </div>
        </div>
      </section>
    );
  }

  componentDidMount() {
    this.props.getListAllProducts();
    this.props.getListRauCuProducts();
    this.props.getListHoaQuaProducts();
    this.props.getListHaiSanProducts();
    this.props.getListHatProducts();
    this.props.getListTuoiProducts();
  }
}

  


const mapStateToProps = state => {
  return {
    listAllSP: state.productReducer.listAllSP,
    listRauCuSP: state.productReducer.listRauCuSP,
    listHoaQuaSP: state.productReducer.listHoaQuaSP,
    listHaiSanSP: state.productReducer.listHaiSanSP,
    listHatSP: state.productReducer.listHatSP,
    listTuoiSP: state.productReducer.listTuoiSP,
    listRender: state.productReducer.listRender
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getListAllProducts: () => {
      dispatch(action.actGetListAllProducts())
    },
    getListRauCuProducts: () => {
      dispatch(action.actGetListRauCuSP())
    },
    getListHoaQuaProducts: () => {
      dispatch(action.actGetListHoaQuaSP())
    },
    getListHaiSanProducts: () => {
      dispatch(action.actGetListHaiSanSP())
    },
    getListHatProducts: () => {
      dispatch(action.actGetListHatSP())
    },
    getListTuoiProducts: () => {
      dispatch(action.actGetListTuoiSP())
    },
    switchListRender: (list) => {
      dispatch(action.actSwitchListRender(list))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductList);
import React, { Component } from "react";
import Carousel from "./Carousel";
import Navbar from "../../Components/Navbar";
import Description from "./Description";
import About from "./About";
import ProductList from "./ProductList";
import Hotline from "./Hotline";
import BestSell from "./BestSell";
import News from "./News";
import Brand from "./Brand";
import Footer from "../../Components/Footer";

export default class Home extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <Description/>
            <About/>
            <ProductList/>
            <Hotline/>
            <BestSell/>
            <News/>
            <Brand/>
            <Footer/>
        </div>
    );
  }
}

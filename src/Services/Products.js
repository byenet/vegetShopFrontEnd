import Axios from "axios";

class ProductService {
  getListAllProducts = () => {
    return Axios({
      method: "GET",
      url: "/sanpham",
    });
  };

  getListSPRauCu = () => {
    return Axios({
      method: "GET",
      url: "/sanphamloai1",
    });
  };

  getListSPHoaQua = () => {
    return Axios({
      method: "GET",
      url: "/sanphamloai2",
    });
  };

  getListSPHaiSan = () => {
    return Axios({
      method: "GET",
      url: "/sanphamloai3",
    });
  };

  getListSPHat = () => {
    return Axios({
      method: "GET",
      url: "/sanphamloai4",
    });
  };

  getListSPTuoiSong = () => {
    return Axios({
      method: "GET",
      url: "/sanphamloai5",
    });
  };

  getDetailProduct = (id) => {
    return Axios({
      method: "GET",
      url: `/sanpham=${id}`,
    });
  };

  
}

export default ProductService;


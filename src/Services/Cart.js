import Axios from "axios";

class CartService {
  getListCards = (id, token) => {
    return Axios({
      method: "GET",
      url: "/cartbyidtk",
      params: {
        idtk: id,
      },
      headers: { Authorization: "Bearer " + token },
    });
  };

  addCart = (idtk, idsp, token) => {
    return Axios({
      method: "post",
      url: "/cart",
      data: {
        idtk: idtk,
        idsp: idsp,
        soluong: 1,
      },
      headers: { Authorization: "Bearer " + token },
    });
  };

  removeCart = (idCart, token) => {
    return Axios({
      method: "DELETE",
      url: `/cart=${idCart}`,
      headers: { Authorization: "Bearer " + token },
    });
  };

  increaseCart = (idtk, idsp, token) => {
    return Axios({
      method: "POST",
      url: "/increasecart",
      params: {
        idtk: idtk,
        idsp: idsp,
      },
      headers: { Authorization: "Bearer " + token },
    });
  };

  reductionCart = (idtk, idsp, token) => {
    return Axios({
      method: "POST",
      url: "/reductioncart",
      params: {
        idtk: idtk,
        idsp: idsp,
      },
      headers: { Authorization: "Bearer " + token },
    });
  };

  billCart = (idtk, token) => {
    return Axios({
      method: "POST",
      url: "/hoadon",
      data: {
        idtk: idtk,
      },
      headers: { Authorization: "Bearer " + token },
    });
  };
}

    

export default CartService;
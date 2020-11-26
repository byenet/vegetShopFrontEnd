import DetailProduct from "../Components/DetailProduct";
import Login from "../Pages/Home/user/Login";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Home/user/Register";
import LoginAdmin from "../Pages/Admin/LoginAdmin";
import Dashboard from "../Pages/Admin/Dashboard";



const routersHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/login",
    exact: false,
    component: Login
  },
  {
    path: "/register",
    exact: false,
    component: Register
  },
  {
    path: "/detail-product/:id",
    exact: false,
    component: DetailProduct
  },
  
  
];

const routesAdmin = [
  {
    path: "/dashboard",
    exact: false,
    component: Dashboard,
  },
];

export {routersHome, routesAdmin}
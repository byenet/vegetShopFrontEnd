import Login from "../Components/Login";
import Home from "../Pages/Home/Home";



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
];

export {routersHome}
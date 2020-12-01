import CartService from './Cart';
import CookieService from './CookieService';
import ProductService from './Products';
import UserService from './User';


export const productService = new ProductService();
export const userService = new UserService();
export const cookieService  = new CookieService();
export const cartService = new CartService();
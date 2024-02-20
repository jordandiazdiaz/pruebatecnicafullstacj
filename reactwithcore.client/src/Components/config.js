// config.js
const REACT_APP_UPLOAD_IMAGE_URL = "http://localhost:5125/product/uploadfile";
const REACT_APP_ADD_NEW_PRODUCT_URL = "http://localhost:5125/product/addnewproduct";
const REACT_APP_LIST_PRODUCT = "http://localhost:5125/product/listofproducts";
const REACT_APP_ADD_CART = "http://localhost:5125/product/addtocart";
const REACT_APP_UPDATE_PRODUCT = "http://localhost:5125/product/updateproduct";
const REACT_APP_CARTS_PRODUCTS = "http://localhost:5125/product/listofcartproducts";
export const API_BASE_URL = "http://localhost:5125";


export const config = {
    REACT_APP_UPLOAD_IMAGE_URL,
    REACT_APP_ADD_NEW_PRODUCT_URL,
    REACT_APP_LIST_PRODUCT,
    REACT_APP_ADD_CART,
    REACT_APP_UPDATE_PRODUCT,
    REACT_APP_CARTS_PRODUCTS,
    getProductById: `${API_BASE_URL}/product/GetProductById`,
    deleteProduct: `${API_BASE_URL}/product/deleteproduct`,
    uploadfile: `${API_BASE_URL}/product/uploadfile`,
    deletecartproduct: `${API_BASE_URL}/product/deletecartproduct`,
};

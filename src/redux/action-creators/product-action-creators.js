const setProducts = (products) => {
    return {
        type: "SET_PRODUCTS",
        payload: products
    }
}


const selectProduct = (product) => {
    return {
        type: "SELECT_PRODUCT",
        payload: product
    }
}

const fetchProducts = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://fakestoreapi.com/products");
        const products = await res.json();
        dispatch(setProducts(products));
    }
}


const fetchProductById=(productId)=>{
    return async (dispatch,getState) => {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await res.json();
        dispatch(selectProduct(product));

    }
}

const clearSelectedProduct=()=>{
  return {
    type:"CLEAR_SELECTED_PRODUCT",
  }
}
export { setProducts, selectProduct,fetchProducts,fetchProductById,clearSelectedProduct };
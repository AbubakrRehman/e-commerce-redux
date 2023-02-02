const initialState = {
    selectedProduct: {}
};

const selectProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_PRODUCT":
            return { ...state, selectedProduct: action.payload };
        case "CLEAR_SELECTED_PRODUCT":
            return { ...state, selectedProduct: {} };
        default:
            return state;
    }
}

export default selectProductReducer;
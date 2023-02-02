const initialState={
    selectedProduct:{}
}
const clearSelectedProductReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "CLEAR_SELECTED_PRODUCT":
            return {...state,selectedProduct:{}};
        default:
          return state;
    }
}

export default clearSelectedProductReducer;
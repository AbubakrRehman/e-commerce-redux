import { combineReducers } from 'redux';
import clearSelectedProductReducer from './clearSelectedProductReducer';
import selectProductReducer from './selectProductReducer';
import setProductsReducer from './setProductsReducer';

const rootReducer=combineReducers({
    setProductsReducer: setProductsReducer,
    selectProductReducer:selectProductReducer,
    clearSelectedProductReducer:clearSelectedProductReducer
});

export {rootReducer};
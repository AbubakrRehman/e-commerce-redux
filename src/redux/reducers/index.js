import { combineReducers } from 'redux';
import selectProductReducer from './selectProductReducer';
import setProductsReducer from './setProductsReducer';

const rootReducer=combineReducers({
    setProductsReducer: setProductsReducer,
    selectProductReducer:selectProductReducer
});

export {rootReducer};
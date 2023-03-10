import {applyMiddleware, createStore,compose} from 'redux';
import { rootReducer } from './reducers';
import thunk from "redux-thunk";
import { configure } from '@testing-library/react';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export default store;


import {applyMiddleware, createStore} from 'redux';
import { rootReducer } from './reducers';
import thunk from "redux-thunk";
import { configure } from '@testing-library/react';

const store=createStore(rootReducer,applyMiddleware(thunk));

export default store;


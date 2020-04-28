import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer.js';

const middlewares = [logger]; // add any additional middleware to this array

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store; // put this in provider
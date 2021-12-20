import reducer from "./reducer";
import {createStore,combineReducers } from 'redux';
const store=createStore(combineReducers({reducer}),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store;
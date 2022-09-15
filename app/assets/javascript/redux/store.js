import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import greetingReducer from '../reducer/reducer';
import { fetchGreeting } from '../reducer/reducer';

const store = configureStore({
    reducer: { greetingReducer },
    middleware: [thunk],
});

store.dispatch(fetchGreeting());

export default store;
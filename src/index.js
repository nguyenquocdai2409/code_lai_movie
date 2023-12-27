import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
import { reducer } from "./redux/reducer/reducer";
import { spinnerReducer } from "./redux/reducer/Spinner";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
const root = ReactDOM.createRoot(document.getElementById("root"));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let rootReducer = combineReducers({
  reducer,
  spinnerReducer,
});

// let store = createStore(
//   combineReducers({ reducer, spinnerReducer }),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

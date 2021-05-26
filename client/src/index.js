import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import loanReducer from "./store/reducers/loanReducer";
import userReducer from "./store/reducers/userReducer";
import applicationReducer from "./store/reducers/applicationReducer";

const reducers = combineReducers({
  loans: loanReducer,
  user: userReducer,
  application: applicationReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

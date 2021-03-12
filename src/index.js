// External
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { config } from "dotenv";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { setLocale, loadTranslations, syncTranslationWithStore } from "react-redux-i18n";

// Ours
import rootReducer from "./DataManagement/Redux/reducers/root";
import translations from "./Assets/l10n/translations";
import Root from "./root";

// Styles
import "./Styles/global.scss";

// Setup call needed for ENV stuff
config();

const startState = {

};

// Setup Common Redux Store
const store = createStore(
  rootReducer,
  startState,
  applyMiddleware(thunk, createSagaMiddleware()));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale("en"));

try {
  if ((navigator.language || navigator.userLanguage).startsWith("fr")) {
    store.dispatch(setLocale("fr"));
  }
} catch {}

// The store can raise events whenever there is a change, which lets us do some pretty powerful stuff.
store.subscribe(() => {
  // Log State Changes in Dev for Debugging Easyness
  if (process.env.NODE_ENV === "development") {
    console.log(store.getState());
  }
});

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

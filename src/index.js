import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Route } from "react-router-dom";
import App from './App'
import 'antd/dist/antd.css'
import { Provider } from "react-redux";
import store from './app/store'
ReactDOM.render(
  <Route>
    <Provider store={store}>
      <App />
    </Provider>
  </Route>,

  document.getElementById('root')
);
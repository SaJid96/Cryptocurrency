import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Route } from "react-router-dom";
import App from './App'
import 'antd/dist/antd.css'

ReactDOM.render(
  <Route>
    <App />
  </Route>,

  document.getElementById('root')
);
import React from "react";
import ReactDom from "react-dom"
import {createRoot} from  'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux"

import App from "./App";
import store from "./app/store";
import "./App.css"


const root = 

createRoot(
    document.getElementById('root')
    ); 
 root.render(
    <Router>
      <Provider store={store}>
 <App/>
 </Provider>
 </Router>
 );


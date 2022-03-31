import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Edit from './store/editcontext';

ReactDOM.render(
  <Edit>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Edit>
    
  ,document.getElementById('root')
);


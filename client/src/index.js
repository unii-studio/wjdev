import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();

import React from 'react';
import { render } from 'react-dom';
import App from './routes/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();

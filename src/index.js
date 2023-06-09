import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app/App';
import './app/styles/index.scss';
import {BrowserRouter} from "react-router-dom";
import "./shared/config/i18n/i18n";

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

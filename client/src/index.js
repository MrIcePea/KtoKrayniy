import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import storeR from './Redux/store';

// для того, что бы созадавались хуки при работе бэка и фронта на одной машине
axios.defaults.withCredentials = true;
// что бы сервер отправлял запросы в направслении - файл .env
axios.defaults.baseURL = process.env.REACT_APP_URL;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={storeR}>
      <App />
      ,
    </Provider>
  </BrowserRouter>,
);

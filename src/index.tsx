import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/store';
import Header from './UI/header';
import Cart from './UI/pages/cart/cart';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
      <Provider store={store}>
            <BrowserRouter>
                  <div className="wrapper">
                        <Header />
                        <Routes>
                              <Route path="/pizzas" element={<App />}></Route>
                              <Route path="cart" element={<Cart />} />
                        </Routes>
                  </div>
            </BrowserRouter>
      </Provider>
);

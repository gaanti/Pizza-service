import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/store';
import Cart from './UI/pages/cart/cart';
import Header from './UI/header';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
      <React.StrictMode>
            <Provider store={store}>
                  <BrowserRouter>
                        <div className="wrapper" id="main-page">
                              <div>
                                    <Header />
                                    <Routes>
                                          <Route path="/" element={<App />}></Route>
                                          <Route path="/cart" element={<Cart />} />
                                    </Routes>
                              </div>
                        </div>
                  </BrowserRouter>
            </Provider>
      </React.StrictMode>
);

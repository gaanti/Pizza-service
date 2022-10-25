import React from 'react';
import './styles/App.scss';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Cart from './UI/pages/user/cart/cart';
import Header from './UI/cross-page-components/header/header';
import FooterWithButton from './UI/cross-page-components/footer/footer-with-button';
import MainPage from './UI/pages/user/main-page/main-page';
import AdminLogin from './UI/pages/admin/login/admin-login';

function App() {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<Wrapper />}>
                              <Route element={<UserAppWrapper />}>
                                    <Route index element={<MainPage />} />
                                    <Route path="cart" element={<Cart />} />
                              </Route>
                              <Route path="/application-administration" element={<AdminAppWrapper />}>
                                    <Route index element={<AdminLogin />} />
                                    <Route path="cart" element={<Cart />} />
                              </Route>
                              <Route path="*" element={<div>ERROR PAGE NOT FOUND</div>} />
                        </Route>
                  </Routes>
            </BrowserRouter>
      );
}

function Wrapper() {
      return (
            <div className="app-wrapper" id="main-page">
                  <Outlet />
            </div>
      );
}

function UserAppWrapper() {
      return (
            <div>
                  <Header />
                  <Outlet />
                  <FooterWithButton />
            </div>
      );
}

function AdminAppWrapper() {
      return (
            <>
                  <Outlet />
            </>
      );
}

export default App;

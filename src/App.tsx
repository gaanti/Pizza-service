import React from 'react';
import './styles/App.scss';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Cart from './UI/pages/user/cart/cart';
import Header from './UI/cross-page-components/header/header';
import FooterWithButton from './UI/cross-page-components/footer/footer-with-button';
import MainPage from './UI/pages/user/main-page/main-page';
import AdminLogin from './UI/pages/admin/login/admin-login';
import AdminNavBar from './UI/pages/admin/navbar/adminNavBar';
import { ThemeProvider } from '@material-ui/core';
// import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';

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
                              </Route>
                              <Route path="*" element={<div>ERROR PAGE NOT FOUND</div>} />
                        </Route>
                  </Routes>
            </BrowserRouter>
      );
}

function Wrapper() {
      return (
            <ThemeProvider theme={theme}>
                  <script
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8893380620489182"
                        crossOrigin="anonymous"
                  />
                  <div className="app-wrapper" id="main-page">
                        <div className="background-color">
                              <Outlet />
                        </div>
                  </div>
            </ThemeProvider>
      );
}

function UserAppWrapper() {
      return (
            <div style={{ width: '100%' }}>
                  <Header />
                  <Outlet />
                  <FooterWithButton />
            </div>
      );
}

function AdminAppWrapper() {
      return (
            <div className="admin-app-wrapper">
                  <AdminNavBar />
                  <Outlet />
            </div>
      );
}

export default App;

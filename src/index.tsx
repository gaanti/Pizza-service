import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { store } from "./redux/store";
import Cart from "./UI/pages/cart/cart";
import Header from "./UI/header";
import Landing from "./Landinx";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/pizzas" element={<Wrapper />}>
            <Route index element={<App />}></Route>
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<div>ERROR PAGE NOT FOUND</div>} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

function Wrapper() {
  return (
    <div className="app-wrapper" id="main-page">
      <Header />
      <Outlet />
    </div>
  );
}
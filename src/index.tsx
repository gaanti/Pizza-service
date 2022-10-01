import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { store } from "./redux/store";
import Cart from "./UI/pages/cart/cart";
import Header from "./UI/header";
import Landing from "./UI/pages/landing/Landinx";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Footer from "./UI/pages/landing/Footer";

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
  const [displayFooter, changeDisplayFooter] = useState(false);

  return (
    <div className="app-wrapper" id="main-page">
      <Header />
      <Outlet />
      <div className="CENTRED_ITEM ROW_GAP">
        <div className="pizza-block__configure_button" onClick={() => changeDisplayFooter(!displayFooter)}>
          {!displayFooter ? <div><AiOutlineArrowDown />&nbsp; Show more datails &nbsp;<AiOutlineArrowDown /></div> :
            <div><AiOutlineArrowUp />
              &nbsp; Hide &nbsp;<AiOutlineArrowUp /></div>}
        </div>
      </div>
      {displayFooter && <Footer />}
    </div>
  );
}
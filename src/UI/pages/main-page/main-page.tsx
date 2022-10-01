import React, { useState } from "react";
import Pizzas from "../../components/pizzas";
import Categories from "../../components/pizza-parameters/categories";
import Sort from "../../components/pizza-parameters/sort";
import Search from "../../components/pizza-parameters/search";
import Pagination from "../../components/pizza-parameters/pagination";

function MainPage() {
  return (
    <div className="content">
      <div className="container">
        <div className="main_page_filters">
          <h2 className="content__title">
            <div className="title">Pizzas</div>
            <Search />
          </h2>
          <div className="content__top">
            <Categories />
          </div>
          <Sort />
        </div>

        <div className="content__items">
          <Pizzas />
        </div>
      </div>
      <Pagination />
    </div>
  );
}

export default React.memo(MainPage);

import React from 'react';
import Pizzas from './pizza-block/pizzas';
import Categories from './pizza-parameters/categories';
import Sort from './pizza-parameters/sort';
import Search from './pizza-parameters/search';
import Pagination from './pizza-parameters/pagination';

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

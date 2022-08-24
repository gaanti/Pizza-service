import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pizzas } from '../../components/pizzas';
import Categories from '../../components/pizza-parameters/categories';
import Sort from '../../components/pizza-parameters/sort';
import { RootState, useAppDispatch } from '../../../redux/store';
import Search from '../../components/pizza-parameters/search';
import qs from 'qs';
import { setCurrentPage, setGetParams } from '../../../redux/slices/slice';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../components/pizza-parameters/pagination';
import { fetchPizzas } from '../../../redux/slices/pizza';

function MainPage() {
      const sortBy = useSelector((state: RootState) => state.params.sortBy);
      const filterByCategory = useSelector((state: RootState) => state.params.filterCategory);
      const currentPage = useSelector((state: RootState) => state.params.currentPageIndex);
      const filterTitle = useSelector((state: RootState) => state.params.filterTitle);
      const total_pageas_qty = useSelector((state: RootState) => state.pizza.total_pageas_qty);

      const [nextStep, doNextStep] = useState(false);

      const nav2 = useNavigate();
      const dispatch = useAppDispatch();
      //set params from address
      React.useEffect(() => {
            const params = qs.parse(window.location.search.substring(1));
            dispatch(setGetParams(params));
            doNextStep((val) => !val);
      }, []);

      //get request definition
      const UseCallback1 = useCallback(async () => {
            dispatch(fetchPizzas({ sortBy, filterByCategory, currentPage, filterTitle }));
      }, [sortBy, filterByCategory, currentPage, filterTitle]);

      //do get request after fetch, on params change
      React.useEffect(() => {
            UseCallback1();
            if (currentPage + 1 > total_pageas_qty && currentPage !== 0) {
                  dispatch(setCurrentPage(total_pageas_qty - 1));
            }
      }, [nextStep, sortBy, filterByCategory, currentPage, filterTitle]);

      //change the address link
      React.useEffect(() => {
            const filterByTitle = filterTitle ? `&filterByTitle=${filterTitle}` : '';
            nav2(`?sortBy=${sortBy}&filterByCategory=${filterByCategory}&currentPage=${currentPage}${filterByTitle}`);
      }, [sortBy, filterByCategory, currentPage, filterTitle]);

      return (
            <div className="content">
                  <div className="container">
                        <div className="content__top">
                              <h2 className="content__title">
                                    <div className="title">All pizzas</div>
                                    <Search />
                              </h2>
                              <Categories />
                              <Sort />
                        </div>
                        <div className="content__items">
                              <Pizzas />
                        </div>
                  </div>
                  <Pagination currentPage={currentPage} />
            </div>
      );
}

export default MainPage;

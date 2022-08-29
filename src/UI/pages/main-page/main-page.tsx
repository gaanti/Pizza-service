import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Pizzas } from '../../components/pizzas';
import Categories from '../../components/pizza-parameters/categories';
import Sort from '../../components/pizza-parameters/sort';
import { RootState, useAppDispatch } from '../../../redux/store';
import Search from '../../components/pizza-parameters/search';
import qs from 'qs';
import { setGetParams } from '../../../redux/slices/slice';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../components/pizza-parameters/pagination';
import { fetchPizzas, setCurrentPage } from '../../../redux/slices/pizza';

function MainPage() {
      const sortBy = useSelector((state: RootState) => state.params.sortBy);
      const filterByCategory = useSelector((state: RootState) => state.params.filterCategory);
      const currentPage = useSelector((state: RootState) => state.pizza.current_page_index);
      const filterTitle = useSelector((state: RootState) => state.params.filterTitle);
      const [nextStep, doNextStep] = useState(false);
      const nav2 = useNavigate();
      const dispatch = useAppDispatch();

      //set params from address
      React.useEffect(() => {
            const params = qs.parse(window.location.search.substring(1)) as any;
            dispatch(setGetParams(params));
            dispatch(setCurrentPage(params.currentPage));
            doNextStep((val) => !val);
      }, []);

      //do get request after fetch, on params change
      React.useEffect(() => {
            dispatch(fetchPizzas({ sortBy, filterByCategory, currentPage, filterTitle }));
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
                          {/*@ts-ignore*/}
                          <Pizzas />
                    </div>
              </div>
              <Pagination />
        </div>
      );
}

export default MainPage;

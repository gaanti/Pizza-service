import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pizzas } from './pizza-block';
import Categories from './categories';
import Sort from './sort';
import axios from 'axios';
import { RootState } from '../redux/store';
import Search from './search';
import qs from 'qs';
import { setCurrentPage, setGetParams, setOverallPagesQuantity, setFilterByTitle } from '../redux/slices/slice';
import { useNavigate } from 'react-router-dom';
import Pagination from './pagination';

function MainPage() {
      const sortBy = useSelector((state: RootState) => state.slice.sortBy);
      const filterByCategory = useSelector((state: RootState) => state.slice.filterCategory);
      const currentPage = useSelector((state: RootState) => state.slice.currentPageIndex);
      const filterTitle = useSelector((state: RootState) => state.slice.filterTitle);
      const [nextStep, doNextStep] = useState(false);

      let REALcurrentPage: any = useRef().current;
      useSelector((state: RootState) => {
            REALcurrentPage = state.slice.currentPageIndex;
      });
      let overallPagesQuantity: any = useRef().current;
      useSelector((state: RootState) => {
            overallPagesQuantity = state.slice.overallPagesQuantity;
      });

      const nav2 = useNavigate();
      const [pizzas, setPizzas] = useState<pizza[]>();
      type pizza = {
            title: String;
            image: string;
            doughType: string;
            size: string;
            price: Number;
            category: String;
            rank: Number;
      };
      const dispatch = useDispatch();

      React.useEffect(() => {
            console.log(`Lol, that's working`);

            const params = qs.parse(window.location.search.substring(1));
            dispatch(setGetParams(params));
            doNextStep((val) => !val);
      }, []);

      const fetchPizzas = useCallback(async () => {
            console.log('fetchPizzas...');
		const filterByTitle = filterTitle?`&filterByTitle=${filterTitle}`:''
            return await axios
                  .get(
                        `http://localhost:8080/pizzas?sortBy=${sortBy}&filterByCategory=${filterByCategory}&currentPage=${REALcurrentPage}${filterByTitle}`
                  )
                  .then((res) => res.data)
                  .finally(() => console.log('fetched!'));
      }, [sortBy, filterByCategory, currentPage, filterTitle]);

      React.useEffect(() => {
            console.log('useMemo POWER!...');

            fetchPizzas().then((res) => {
                  dispatch(setOverallPagesQuantity(res.totalPages));
                  if (currentPage + 1 > res.totalPages && currentPage !=0) {
                        dispatch(setCurrentPage(res.totalPages - 1));
                  } else setPizzas(res.content);
            });
      }, [nextStep, sortBy, filterByCategory, currentPage, filterTitle]);

      React.useEffect(() => {
            const filterByTitle = filterTitle?`&filterByTitle=${filterTitle}`:''
            nav2(`?sortBy=${sortBy}&filterByCategory=${filterByCategory}&currentPage=${currentPage}${filterByTitle}`);
      }, [sortBy, filterByCategory, currentPage, filterTitle]);

      const pagesQty = [];
      for (let i = 0; i < overallPagesQuantity; i++) {
            pagesQty.push(i + 1);
      }

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
                              <Pizzas pizzas={pizzas} />
                        </div>
                  </div>
                  <Pagination overallPagesQuantity={overallPagesQuantity as number} currentPage={currentPage} />
            </div>
      );
}

export default MainPage;

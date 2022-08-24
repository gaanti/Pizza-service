import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pizzas } from '../../components/pizzas';
import Categories from '../../components/pizza-parameters/categories';
import Sort from '../../components/pizza-parameters/sort';
import axios from 'axios';
import { RootState } from '../../../redux/store';
import Search from '../../components/pizza-parameters/search';
import qs from 'qs';
import { setCurrentPage, setGetParams, setOverallPagesQuantity } from '../../../redux/slices/slice';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../components/pizza-parameters/pagination';

function MainPage() {
      const sortBy = useSelector((state: RootState) => state.params.sortBy);
      const filterByCategory = useSelector((state: RootState) => state.params.filterCategory);
      const currentPage = useSelector((state: RootState) => state.params.currentPageIndex);
      const filterTitle = useSelector((state: RootState) => state.params.filterTitle);
      const [nextStep, doNextStep] = useState(false);

      let REALcurrentPage: any = useRef().current;
      useSelector((state: RootState) => {
            REALcurrentPage = state.params.currentPageIndex;
      });
      let overallPagesQuantity: any = useRef().current;
      useSelector((state: RootState) => {
            overallPagesQuantity = state.params.overallPagesQuantity;
      });

      const nav2 = useNavigate();
      const [pizzas, setPizzas] = useState<pizza[]>();
      let RealPizzas: any = useRef().current;
      RealPizzas=pizzas

      type pizza = {
            title: string;
            image: string;
            doughType: string[];
            size: number[];
            price: number;
            category: string;
            rank: number;
      };
      const dispatch = useDispatch();
      //set params from address
      React.useEffect(() => {
            const params = qs.parse(window.location.search.substring(1));
            dispatch(setGetParams(params));
            doNextStep((val) => !val);
      }, []);
      //get request definition
      const fetchPizzas = useCallback(async () => {
            const filterByTitle = filterTitle ? `&filterByTitle=${filterTitle}` : '';
            return await axios
                  .get(
                        `http://localhost:8080/pizzas?sortBy=${sortBy}&filterByCategory=${filterByCategory}&currentPage=${REALcurrentPage}${filterByTitle}`
                  )
                  .then((res) => res.data);
      }, [sortBy, filterByCategory, currentPage, filterTitle]);
      //do get request after fetch, on params change
      React.useEffect(() => {
            fetchPizzas().then((res) => {
                  dispatch(setOverallPagesQuantity(res.totalPages));
                  if (currentPage + 1 > res.totalPages && currentPage !== 0) {
                        dispatch(setCurrentPage(res.totalPages - 1));
                  } else {
                        setPizzas( RealPizzas = res.content);
                        // @ts-ignore
                        RealPizzas.forEach((e: any) => {
                              e.doughType = JSON.parse(e.doughType);
                              e.size = JSON.parse(e.size)
                        })
                  }
            });
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
                              <Pizzas pizzas={pizzas} />
                        </div>
                  </div>
                  <Pagination overallPagesQuantity={overallPagesQuantity as number} currentPage={currentPage} />
            </div>
      );
}

export default MainPage;

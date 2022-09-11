import React from 'react';
import { useSelector } from 'react-redux';
import  Pizzas  from '../../components/pizzas';
import Categories from '../../components/pizza-parameters/categories';
import Sort from '../../components/pizza-parameters/sort';
import { RootState, useAppDispatch } from '../../../redux/store';
import Search from '../../components/pizza-parameters/search';
import qs from 'qs';
import { setGetParams } from '../../../redux/slices/filtering_params';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../components/pizza-parameters/pagination';
import { current_page_indexSelect } from '../../../redux/slices/pizzas';

function MainPage() {
      const sortBy = useSelector((state: RootState) => state.params.sortBy);
      const filterByCategoryId = useSelector((state: RootState) => state.params.filterCategoryId);
      const currentPage = useSelector(current_page_indexSelect);
      const filterTitle = useSelector((state: RootState) => state.params.filterTitle);
      const nav2 = useNavigate();
      const dispatch = useAppDispatch();
      /*const Pagination = React.lazy(() => import('../../components/pizza-parameters/pagination'))*/

      React.useEffect(() => {
            const params = qs.parse(window.location.search.substring(1)) as any;
            if (!params) {
                  console.log('params are null');
            }
            dispatch(setGetParams(params));
      }, []);

      //change the address link
      React.useEffect(() => {
            const filterByTitle = filterTitle ? `&filterByTitle=${filterTitle}` : '';
            nav2(`?sortBy=${sortBy}&filterByCategoryId=${filterByCategoryId}&currentPage=${currentPage}${filterByTitle}`);
      }, [sortBy, filterByCategoryId, currentPage, filterTitle]);

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
                              {/*@ts-ignore*/}
                              <Pizzas />
                        </div>
                  </div>
                  <Pagination />
            </div>
      );
}

export default React.memo(MainPage);

import React, { useEffect } from 'react';
import Skeleton from './skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { useGetPizzasQuery } from '../../../../../redux/services/pizza';
import { current_page_indexSelect, setTotalPagesQuantity, statusSelect } from '../../../../../redux/slices/business/pizzas';
import { filteringParams } from '../../../../../redux/slices/business/filtering_params';
import PizzaBlock from './pizza-block';

function Pizzas() {
      const { sortBy, filterCategoryId, filterTitle, sortDirection } = useSelector(filteringParams);
      const currentPage = useSelector(current_page_indexSelect);
      const status = useSelector(statusSelect);
      const dispatch = useDispatch();

      const { data } = useGetPizzasQuery({
            sortBy: sortBy,
            filterByCategory: filterCategoryId,
            currentPage: currentPage,
            filterTitle: filterTitle ? filterTitle : '',
            sortDirection
      });
      useEffect(() => {
            if (data) {
                  dispatch(setTotalPagesQuantity(data.pizzas.totalPages));
            }
      }, [data]);

      if (status === 'success' && data) {
            return (
                  <>
                        {data.pizzas.content.map((element, index) => {
                              return <PizzaBlock element={element} index={index} key={index} />;
                        })}
                  </>
            );
      } else {
            return <Skeleton />;
      }
}

export default React.memo(Pizzas);

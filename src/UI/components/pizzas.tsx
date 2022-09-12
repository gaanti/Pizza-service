import React, { useEffect } from 'react';
import PizzaBlock from './pizza-block';
import Skeleton from './skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetPizzasQuery } from '../../redux/services/pizza';
import { current_page_indexSelect, setTotalPagesQuantity, statusSelect } from '../../redux/slices/pizzas';

function Pizzas() {
      const sortBy = useSelector((state: RootState) => state.params.sortBy);
      const filterByCategory = useSelector((state: RootState) => state.params.filterCategoryId);
      const currentPage = useSelector(current_page_indexSelect);
      const filterTitle = useSelector((state: RootState) => state.params.filterTitle);
      const dispatch = useDispatch();
      //const total_pages_qty = useSelector((state: RootState) => state.pizza.total_pages_qty);

      const { data } = useGetPizzasQuery({
            sortBy: sortBy,
            filterByCategory: filterByCategory,
            currentPage: currentPage,
            filterTitle: filterTitle ? filterTitle : ''
      });
      useEffect(() => {
            if (data) {
                  dispatch(setTotalPagesQuantity(data.pizzas.totalPages));
            }
      }, [data]);

      const status = useSelector(statusSelect);

      if (status === 'success' && data) {
            return data.pizzas.content.map((element, index) => {
                  return <PizzaBlock element={element} key={index} />;
            });
      } else if (status === 'loading') {
            return <Skeleton />;
      } else return <div>'Something bad happened'</div>;
}
export default Pizzas;

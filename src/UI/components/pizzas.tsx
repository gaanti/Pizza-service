import React from 'react';
import PizzaBlock from './pizza-block';
import Skeleton from './skeleton';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetPizzasQuery } from '../../redux/services/pizza';

export function Pizzas() {
      const sortBy = useSelector((state: RootState) => state.params.sortBy);
      const filterByCategory = useSelector((state: RootState) => state.params.filterCategory);
      const currentPage = useSelector((state: RootState) => state.pizza.current_page_index);
      const filterTitle = useSelector((state: RootState) => state.params.filterTitle);
      const { data } = useGetPizzasQuery({
            sortBy: sortBy,
            filterByCategory: filterByCategory,
            currentPage: currentPage,
            filterTitle: filterTitle
      });

      const status = useSelector((state: RootState) => state.pizza.status);

      if (status === 'success' && data) {
            return data.content.map((element, index) => {
                  return <PizzaBlock element={element} key={index} />;
            });
      } else if (status === 'loading') {
            return <Skeleton />;
      } else return 'Something bad happened';
}

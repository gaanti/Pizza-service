import React, { useEffect } from "react";
import PizzaBlock from './pizza-block';
import Skeleton from './skeleton';
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../../redux/store";
import { useGetPizzasQuery } from '../../redux/services/pizza';
import { setTotalPagesQuantity } from "../../redux/slices/pizza";

export function Pizzas() {
      const sortBy = useSelector((state: RootState) => state.params.sortBy);
      const filterByCategory = useSelector((state: RootState) => state.params.filterCategoryId);
      const currentPage = useSelector((state: RootState) => state.pizza.current_page_index);
      const totalPagesQty = useSelector((state: RootState) => state.pizza.total_pages_qty);
      const filterTitle = useSelector((state: RootState) => state.params.filterTitle);
      const dispatch = useDispatch()
      //const total_pages_qty = useSelector((state: RootState) => state.pizza.total_pages_qty);

      const { data } = useGetPizzasQuery({
            sortBy: sortBy,
            filterByCategory: filterByCategory,
            currentPage: currentPage,
            filterTitle: filterTitle ? filterTitle : ''
      });
      useEffect(() => {
            if (data) {
                  console.log("ALOha");
                  dispatch(setTotalPagesQuantity(data.pizzas.totalPages));
            }
      }, [data])

      const status = useSelector((state: RootState) => state.pizza.status);

      if (status === 'success' && data) {
            return data.pizzas.content.map((element, index) => {
                  return <PizzaBlock element={element} key={index} />;
            });
      } else if (status === 'loading') {
            return <Skeleton />;
      } else return 'Something bad happened';
}

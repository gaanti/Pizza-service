import React from 'react';
import PizzaBlock from './pizza-block';
import Skeleton from './skeleton';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export function Pizzas() {
      const status = useSelector((state: RootState) => state.pizza.status);

      const pizArr = useSelector((state: RootState) => state.pizza.pizzas);

      if (status === 'success') {
            return pizArr.map((element) => {
                  return <PizzaBlock element={element} />;
            })
      } else if (status === 'loading') {
            return <Skeleton />
      } else return "Something bad happened"
}

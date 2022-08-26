import React from 'react';
import PizzaBlock from './pizza-block';
import Skeleton from './skeleton';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export function Pizzas() {
      const status = useSelector((state: RootState) => state.pizza.status);

      const pizArr = useSelector((state: RootState) => state.pizza.pizzas);

      return status === "success" ? (
            pizArr.map((element) => {
                  return <PizzaBlock element={element} />;
            })
      ) : (
            <Skeleton />
      );
}

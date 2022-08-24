import React from 'react';
import PizzaBlock from './pizza-block';
import { pizza } from '../../redux/slices/pizza';
import Skeleton from './skeleton';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export function Pizzas() {
      const pizArr = useSelector((state: RootState) => state.pizza.pizzas);

      return pizArr ? (
            pizArr.map((element: pizza[]) => {
                  // @ts-ignore
                  return <PizzaBlock element={element} />;
            })
      ) : (
            <Skeleton />
      );
}

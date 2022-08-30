import React, { useCallback, useEffect, useState } from 'react';
import { addItemOrIncreaseQuantity } from '../../redux/slices/cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { pizza } from "../../redux/types";

function PizzaBlock(props: { element: pizza }) {
      const dispatch = useDispatch();
      const [doughType, setDoughType] = useState<string>(props.element.doughType[0]);
      const [size, setSize] = useState<number>(props.element.size[0]);
      const cartPizzas = useSelector((state: RootState) => state.cart.items);
      const fetchedPizzas = useSelector((state: RootState) => state.pizza.pizzas);

      const [qty, setQty] = useState(0);

      const findAllPizzasByConstantParameters = useCallback(() => {
            return cartPizzas.filter((elem: any[0]) => elem.price === props.element.price && elem.title === props.element.title);
      }, [cartPizzas]);

      const increaseQty = () => {
            dispatch(
                  addItemOrIncreaseQuantity({
                        title: props.element.title,
                        image: props.element.image,
                        price: props.element.price,
                        doughType: doughType as string,
                        size: size as number,
                        quantity: 1
                  })
            );
      };
      useEffect(() => {
            const pizArr = findAllPizzasByConstantParameters();
            // @ts-ignore
            if (pizArr !== []) {
                  let bbb = 0;
                  for (let i = 0; i < pizArr.length; i++) {
                        bbb += pizArr[i].quantity;
                  }
                  if (bbb) {
                        setQty(bbb);
                  } else setQty(0);
            }
      }, [increaseQty, fetchedPizzas]);

      return (
            <div>
                  <div className="pizza-block">
                        <img
                              className="pizza-block__image"
                              src={'data:image/jpg;base64,' + props.element.image}
                              alt="Pizza"
                              /*onClick={() => changeOpenPop_up(!openPop_up)}*/
                        />
                        <h4 className="pizza-block__title">{props.element.title}</h4>
                        {/*{openPop_up &&
                          <div className="pizza-block__description">

                                <ul>
                                      Ingredients:
                                      <li>tomato</li>
                                      <li>cucumber</li>
                                      <li>potato</li>
                                      <li>sausages</li>
                                </ul>
                                <p>description</p>
                          </div>
                        }*/}

                        <div className="pizza-block__selector">
                              <ul>
                                    {props.element.doughType.map((e: string) => {
                                          return (
                                                <li className={e === doughType ? 'active' : ''} onClick={() => setDoughType(e)} key={e}>
                                                      {e}
                                                </li>
                                          );
                                    })}
                              </ul>
                              <ul>
                                    {props.element.size.map((e: number) => {
                                          return (
                                                <li className={e === size ? 'active' : ''} onClick={() => setSize(e)} key={e}>
                                                      {e} см.
                                                </li>
                                          );
                                    })}
                              </ul>
                        </div>
                        <div className="pizza-block__bottom">
                              {/*@ts-ignore*/}
                              <div className="pizza-block__price">${props.element.price}</div>
                              <div
                                    className="button button--outline button--add"
                                    onClick={() => {
                                          increaseQty();
                                    }}>
                                    <span>Add to cart</span>
                                    {qty ? <i>{qty}</i> : ''}
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default React.memo(PizzaBlock);

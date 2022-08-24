import React, { useCallback, useEffect, useState } from 'react';
import { addItemOrIncreaseQuantity } from '../../redux/slices/cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { pizza } from '../../redux/slices/pizza';

function PizzaBlock(props: { element: pizza }) {
      const dispatch = useDispatch();
      const [doughType, setDoughType] = useState<string>(props.element.doughType[0]);
      const [size, setSize] = useState<number>(props.element.size[0]);
      const pizzas = useSelector((state: RootState) => state.cart.items);
      const pizzzzzzasFROMBUSINESSSS = useSelector((state: RootState) => state.pizza.pizzas);

      const currentPizzaItem = useSelector((state: RootState) =>
            state.cart.items.find((elem: any) => elem.price === props.element.price && elem.title === props.element.title)
      );
      const [qty, setQty] = useState(0);

      const findAllPizzasByConstantParameters = useCallback(() => {
            return pizzas.filter((elem: any[0]) => elem.price === props.element.price && elem.title === props.element.title);
      }, [pizzas]);

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
            if (pizArr !== []) {
                  debugger
                  let bbb = 0;
                  for (let i = 0; i < pizArr.length; i++) {
                        bbb += pizArr[i].quantity;
                  }

                  const rnd = pizzas.find((item) => item.title === currentPizzaItem?.title);
                  console.log(rnd);
                  if (rnd) {
                        console.log("{PP");
                        debugger
                        setQty(rnd.quantity);
                  } else if (rnd === undefined) setQty(0);
            }
      }, [increaseQty, pizzzzzzasFROMBUSINESSSS]);

      return (
            <div>
                  <div className="pizza-block">
                        <img className="pizza-block__image" src={'data:image/jpg;base64,' + props.element.image} alt="Pizza" />
                        <h4 className="pizza-block__title">{props.element.title}</h4>
                        <div className="pizza-block__selector">
                              <ul>
                                    {props.element.doughType.map((e: string) => {
                                          return (
                                                <li className={e === doughType ? 'active' : ''} onClick={() => setDoughType(e)}>
                                                      {e}
                                                </li>
                                          );
                                    })}
                              </ul>
                              <ul>
                                    {props.element.size.map((e: number) => {
                                          return (
                                                <li className={e === size ? 'active' : ''} onClick={() => setSize(e)}>
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
                                    {qty?<i>{qty}</i>:''}
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default PizzaBlock;

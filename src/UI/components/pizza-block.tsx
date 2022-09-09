import React, { useCallback, useEffect, useRef, useState } from 'react';
import { addItemOrIncreaseQuantity } from '../../redux/slices/cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { pizza } from '../../redux/types';
import Configure from './pizza-parameters/configure';

function PizzaBlock(props: { element: pizza }) {
      const dispatch = useDispatch();

      const cartPizzas = useSelector((state: RootState) => state.cart.items);
      const fetchedPizzas = useSelector((state: RootState) => state.pizzas.pizzas);
      const dough_radius = useSelector((state: RootState) => state.pizzas.dough_radius);
      const dough_widths = useSelector((state: RootState) => state.pizzas.dough_widths);

      const [qtyOfItemsInCart, setQtyOfItemsInCart] = useState(0);
      const [doughRadius, setDoughRadius] = useState(dough_radius[0].radius);
      const [doughWidth, setDoughWidth] = useState(dough_widths[0].doughWidthTitle);
      const [configureTab, setConfigureTab] = useState(false);

      const findAllPizzasByConstantParameters = useCallback(() => {
            if (cartPizzas) {
                  return cartPizzas.filter((elem: any[0]) => elem.price === props.element.price && elem.title === props.element.title);
            }
      }, [cartPizzas]);

      const increaseQty = () => {
            dispatch(
                  addItemOrIncreaseQuantity({
                        title: props.element.title,
                        image: props.element.image,
                        price: props.element.price,
                        doughRadius: doughRadius as number,
                        doughWidth: doughWidth as string,
                        quantity: 1
                  })
            );
      };
      let func = useRef().current;
      func = () => increaseQty();
      useEffect(() => {
            const pizArr = findAllPizzasByConstantParameters();
            // @ts-ignore
            if (pizArr) {
                  let bbb = 0;
                  for (let i = 0; i < pizArr.length; i++) {
                        bbb += pizArr[i].quantity;
                  }
                  if (bbb) {
                        setQtyOfItemsInCart(bbb);
                  } else setQtyOfItemsInCart(0);
            }
      }, [increaseQty, fetchedPizzas]);

      return (
            <div className="pizza-block__wrapper">
                  <div className="pizza-block">
                        <img className="pizza-block__image" src={'data:image/jpg;base64,' + props.element.image} alt="Pizza" />
                        <h4 className="pizza-block__title">{props.element.title}</h4>
                        {configureTab ? (
                              <Configure
                                    setConfigureTab={setConfigureTab}
                                    configureTab={configureTab}
                                    imageSRC={`data:image/jpg;base64,${props.element.image}`}
                                    title={props.element.title}
                                    setDoughRadius={setDoughRadius}
                                    setDoughWidth={setDoughWidth}
                                    doughRadius={doughRadius}
                                    doughWidth={doughWidth}
                                    increaseQty={func}
                                    qtyOfItemsInCart={qtyOfItemsInCart}
                              />
                        ) : (
                              <div>
                                    <div className="pizza-block__selector">
                                          <div className="pizza-block__description_and_params">
                                                <p>
                                                      The term originally referred to messages sent using the Short Message Service (SMS).
                                                      It has grown
                                                </p>
                                                <div>
                                                      <h5>
                                                            Ingredients: <div> sausages, tomatoes, mayo, green, cheese, eggs</div>
                                                      </h5>
                                                      <h5>
                                                            Dough:{' '}
                                                            <div>
                                                                  width: {doughWidth}, radius: {doughRadius} ️
                                                            </div>
                                                      </h5>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="pizza-block__bottom">
                                          <div className="pizza-block__price">${props.element.price}</div>
                                          <div className="DIRECTION_ROW_WITHOUT_GAP">
                                                <div
                                                      className="pizza-block__configure_button"
                                                      onClick={() => setConfigureTab(!configureTab)}>
                                                      Configure
                                                </div>
                                                <div
                                                      className="button button--outline button--add"
                                                      onClick={() => {increaseQty();
                                                      }}>
                                                      <span>Add to cart</span>
                                                      {qtyOfItemsInCart ? <i>{qtyOfItemsInCart}</i> : ''}
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        )}
                  </div>
            </div>
      );
}

export default React.memo(PizzaBlock);

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { addItemOrIncreaseQuantity } from '../../../../redux/slices/business/cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { pizza } from '../../../../redux/types';
import Configure from './configure';
import { dough_radiusSelect, dough_widthsSelect } from '../../../../redux/slices/business/pizzas';

function PizzaBlock(props: { element: pizza; index: number }) {
      const dispatch = useDispatch();

      const cartPizzas = useSelector((state: RootState) => state.cart.items);
      const dough_radius = useSelector(dough_radiusSelect);
      const dough_widths = useSelector(dough_widthsSelect);

      const mapped_ingredients = props.element.ingredients.map((v) => {
            return v.ingredientName;
      });
      const [ingredients, setIngredients] = useState(mapped_ingredients);
      const [parent, rerenderParent] = useState(false);
      const [qtyOfItemsInCart, setQtyOfItemsInCart] = useState(0);
      const [doughRadius, setDoughRadius] = useState(dough_radius[0].radius);
      const [doughWidth, setDoughWidth] = useState(dough_widths[0].doughWidthTitle);
      const resetPizzaParams = () => {
            setIngredients(mapped_ingredients);
            setDoughRadius(dough_radius[0].radius);
            setDoughWidth(dough_widths[0].doughWidthTitle);
      };
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
                        /*@ts-ignore*/
                        ingredients: ingredients,
                        quantity: 1
                  })
            );
      };
      useEffect(() => {
            const pizArr = findAllPizzasByConstantParameters();
            if (pizArr) {
                  let itemsInCart = 0;
                  for (let i = 0; i < pizArr.length; i++) {
                        itemsInCart += pizArr[i].quantity;
                  }
                  if (itemsInCart) {
                        setQtyOfItemsInCart(itemsInCart);
                  } else setQtyOfItemsInCart(0);
            }
      }, [increaseQty]);
      const refference = useRef<HTMLDivElement>(null);

      return (
            <div className="pizza-block__wrapper">
                  <div className="pizza-block">
                        <img className="pizza-block__image" src={'data:image/jpg;base64,' + props.element.image} alt="Pizza" />
                        <h4 className="pizza-block__title">{props.element.title}</h4>
                        <div style={{ position: 'relative' }}>
                              {
                                    <div className="pizza-block__selector">
                                          <div className="pizza-block__description_and_params">
                                                <div>
                                                      <h5>
                                                            Ingredients:
                                                            <div>{ingredients.join(', ')}</div>
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
                              }
                              <div className="pizza-block__bottom">
                                    <div className="pizza-block__price">${props.element.price}</div>
                                    <div className="DIRECTION_ROW_WITHOUT_GAP pizza-block__interact_pannel">
                                          <div ref={refference}>
                                                <Configure
                                                      imageSRC={`data:image/jpg;base64,${props.element.image}`}
                                                      title={props.element.title}
                                                      setDoughRadius={setDoughRadius}
                                                      setDoughWidth={setDoughWidth}
                                                      doughRadius={doughRadius}
                                                      doughWidth={doughWidth}
                                                      increaseQty={increaseQty}
                                                      qtyOfItemsInCart={qtyOfItemsInCart}
                                                      ingredients={ingredients}
                                                      setIngredients={setIngredients}
                                                      parent={parent}
                                                      rerenderParent={rerenderParent}
                                                      resetPizzaParams={resetPizzaParams}
                                                      refference={refference}
                                                />
                                          </div>
                                          <div
                                                className="button button--outline button--add"
                                                onClick={() => {
                                                      increaseQty();
                                                }}>
                                                <span>Add to cart</span>
                                                {qtyOfItemsInCart ? <i>{qtyOfItemsInCart}</i> : ''}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default React.memo(PizzaBlock);

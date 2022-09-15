import React, { createRef, forwardRef, memo, useEffect, useState } from 'react';
import DoughParams from '../doughParams';
import isequal from 'lodash.isequal';
import differencewith from 'lodash.differencewith';
import { useSelector } from 'react-redux';
import { ingredientsSelect } from '../../../redux/slices/pizzas';

function Configure(props: {
      imageSRC: string;
      title: string;
      setDoughRadius: React.Dispatch<React.SetStateAction<number>>;
      setDoughWidth: React.Dispatch<React.SetStateAction<string>>;
      doughWidth: string;
      doughRadius: number;
      increaseQty: any;
      qtyOfItemsInCart: number;
      setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
      ingredients: string[];
      rerenderParent: any;
      parent: boolean;
      resetPizzaParams: any;
      refference: any;
}) {
      const ref = createRef<HTMLDivElement>();
      const [configureTab, setConfigureTab] = useState(false);
      useEffect(() => console.log(ref, props.refference.current), [props.refference.current]);

      return (
            <div ref={ref}>
                  <div className="pizza-block__configure_button" onClick={() => setConfigureTab(!configureTab)}>
                        Configure
                  </div>
                  {configureTab && (
                        <PopUp
                              configureTab={configureTab}
                              setConfigureTab={setConfigureTab}
                              imageSRC={`data:image/jpg;base64,${props.imageSRC}`}
                              title={props.title}
                              setDoughRadius={props.setDoughRadius}
                              setDoughWidth={props.setDoughWidth}
                              doughRadius={props.doughRadius}
                              doughWidth={props.doughWidth}
                              increaseQty={props.increaseQty}
                              qtyOfItemsInCart={props.qtyOfItemsInCart}
                              ingredients={props.ingredients}
                              setIngredients={props.setIngredients}
                              parent={props.parent}
                              rerenderParent={props.rerenderParent}
                              resetPizzaParams={props.resetPizzaParams}
                              ref={ref}
                              refference={props.refference.current}
                        />
                  )}
            </div>
      );
}

/*TODO replace forwardRef*/
function PopUp(props: {
      setConfigureTab: React.Dispatch<React.SetStateAction<boolean>>;
      configureTab: boolean;
      imageSRC: string;
      title: string;
      setDoughRadius: React.Dispatch<React.SetStateAction<number>>;
      setDoughWidth: React.Dispatch<React.SetStateAction<string>>;
      doughWidth: string;
      doughRadius: number;
      increaseQty: any;
      qtyOfItemsInCart: number;
      setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
      ingredients: string[];
      rerenderParent: any;
      parent: boolean;
      resetPizzaParams: any;
      refference: any;
}) {
      const selected = useSelector(ingredientsSelect);
      const [searchIngredientArray, setSearchIngredientArray] = useState([] as string[]);
      const [searchIngredient, setSearchIngredient] = useState('');
      const ingredients = structuredClone(selected).map((e: { ingredientName: any }) => e.ingredientName);

      useEffect(() => {
            popo();
            const popop = differencewith(ingredients, props.ingredients, isequal);
            return searchIngredient.trim() != '' && searchIngredient.trim() != null
                  ? setSearchIngredientArray(popop.filter((value) => value.includes(searchIngredient)))
                  : setSearchIngredientArray([]);
      }, [props.ingredients, searchIngredient]);

      function popo() {
            for (let i = 0; i < props.ingredients.length; i++) {
                  for (let j = 0; j < ingredients.length; j++) {
                        if (ingredients[j].ingredientName === props.ingredients[i]) {
                              ingredients.splice(j, 1);
                        }
                  }
            }
      }

      const AreThereIngredients = !isequal(props.ingredients, []);
      useEffect(() => {
            const click = (event: any) => {
                  if (!event.composedPath().includes(props.refference) && props.refference != null) {
                        props.setConfigureTab(false);
                  } else props.setConfigureTab(true);
            };
            document.body.addEventListener('click', click);
            return () => document.body.removeEventListener('click', click);
      }, []);

      function setIngredient(toSet: string[]) {
            props.setIngredients(toSet);
            props.rerenderParent(!props.parent);
      }
      return (
            <div className="pizza-block__configure_window DIRECTION_COLUMN">
                  <div className="DIRECTION_COLUMN">
                        <div style={{ backgroundColor: 'white' }}>
                              <h4 className="DIRECTION_ROW" style={{ whiteSpace: 'nowrap' }}>
                                    Add ingredient{' '}
                                    <input
                                          type="text"
                                          placeholder="Ingredient"
                                          value={searchIngredient}
                                          onChange={(e) => {
                                                setSearchIngredient(e.target.value);
                                          }}
                                    />
                              </h4>
                              {!isequal(searchIngredientArray, []) && (
                                    <ul className="pizza-block__configure_window-add-ingredient">
                                          {searchIngredientArray.map((v) => {
                                                return (
                                                      <li>
                                                            <div>{v}</div>
                                                            {/*PLUS from rotated cancel 45deg*/}
                                                            <img
                                                                  src="cancel.svg"
                                                                  onClick={() => {
                                                                        setIngredient([...props.ingredients, v]);
                                                                  }}
                                                                  alt="add ingredient"
                                                            />
                                                      </li>
                                                );
                                          })}
                                    </ul>
                              )}
                        </div>
                        <ul
                              className="pizza-block__configure_window-ingredients-table"
                              style={
                                    AreThereIngredients
                                          ? {
                                                  display: 'grid',
                                                  gridTemplateColumns: '1fr 1fr',
                                                  justifyContent: 'space-between'
                                            }
                                          : { display: 'block' }
                              }>
                              {AreThereIngredients ? (
                                    props.ingredients.map((v, index) => {
                                          return (
                                                <div style={{ display: 'flex', justifyContent: 'flex-start' }} key={index}>
                                                      <img
                                                            src="cancel.svg"
                                                            style={{ width: '24px', height: '24px' }}
                                                            onClick={() => {
                                                                  let temp = props.ingredients;
                                                                  temp.splice(props.ingredients.indexOf(v), 1);
                                                                  setIngredient(temp);
                                                            }}
                                                            alt="remove ingredient"
                                                      />
                                                      <li key={index}>{v}</li>
                                                </div>
                                          );
                                    })
                              ) : (
                                    <div>Wtf?! Dude, you are going to order dough 🤪.</div>
                              )}
                        </ul>
                  </div>
                  <DoughParams
                        setDoughRadius={props.setDoughRadius}
                        setDoughWidth={props.setDoughWidth}
                        doughRadius={props.doughRadius}
                        doughWidth={props.doughWidth}
                  />

                  <div className="DIRECTION_COLUMN">
                        <div className="DIRECTION_ROW_WITHOUT_GAP" style={{ width: '100%' }}>
                              <div className="pizza-block__configure_button" onClick={() => props.resetPizzaParams()}>
                                    Reset
                              </div>
                              <div
                                    className="button button--outline button--add"
                                    onClick={() => {
                                          props.rerenderParent(!props.parent);
                                          props.increaseQty();
                                    }}>
                                    <span>Add to cart</span>
                                    {props.qtyOfItemsInCart ? <i>{props.qtyOfItemsInCart}</i> : ''}
                              </div>
                              <div className="pizza-block__configure_button" onClick={() => props.setConfigureTab(!props.configureTab)}>
                                    Save & close
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default memo(Configure);

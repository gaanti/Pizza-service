import React, { useEffect, useState } from 'react';
import DoughParams from '../doughParams';
import isequal from 'lodash.isequal';
import differencewith from 'lodash.differencewith';
import { ingredient, pizza } from '../../../redux/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

function Configure(props: {
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
      fetchedPizzas: pizza;
}) {
      const selected = useSelector((state: RootState) => state.pizzas.ingredients);
      const [searchIngredientArray, setSearchIngredientArray] = useState([] as ingredient[]);
      const [searchIngredient, setSearchIngredient] = useState('');
      const ingredients = structuredClone(selected).map((e) => e.ingredientName);

      useEffect(() => {
            popo();
            const popop = differencewith(ingredients, props.ingredients, isequal);
            debugger;
            return searchIngredient.trim() != '' && searchIngredient.trim() != null
                  ? setSearchIngredientArray(popop.filter((value) => value.includes(searchIngredient)))
                  : /*? setSearchIngredientArray( differencewith(ingredients, props.ingredients, isequal))*/
                    setSearchIngredientArray([]);
      }, [props.ingredients, searchIngredient]);

      function popo() {
            for (let i = 0; i < props.ingredients.length; i++) {
                  for (let j = 0; j < ingredients.length; j++) {
                        if (ingredients[j].ingredientName === props.ingredients[i]) {
                              debugger;
                              console.log(
                                    ingredients[j].ingredientName === props.ingredients[i],
                                    ingredients[j].ingredientName,
                                    props.ingredients[i]
                              );
                              ingredients.splice(j, 1);
                        }
                  }
            }
            /*setSearchIngredientArray(ingredients)*/
      }

      const AreThereIngredients = !isequal(props.ingredients, []);

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
                                                                        props.setIngredients([...props.ingredients, v]);
                                                                        props.rerenderParent(!props.parent);
                                                                  }}
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
                                                                  props.ingredients.splice(props.ingredients.indexOf(v), 1);
                                                                  props.rerenderParent(!props.parent);
                                                                  props.setIngredients(props.ingredients);
                                                            }}
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

export default Configure;

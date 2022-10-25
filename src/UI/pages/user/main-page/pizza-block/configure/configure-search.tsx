import React from 'react';
import isequal from 'lodash.isequal';
import { BsPlusSquareFill } from 'react-icons/bs';

function ConfigureSearch(props: {
      searchIngredient: string;
      searchIngredientArray: string[];
      setSearchIngredient: React.Dispatch<React.SetStateAction<string>>;
      setIngredient(toSet: string[]): void;
      ingredients: string[];
}) {
      return (
            <div className="pizza-block__search-block">
                  <h4 className="DIRECTION_ROW ">
                        Add ingredient{' '}
                        <input
                              type="text"
                              placeholder="Ingredient"
                              value={props.searchIngredient}
                              onChange={(e) => {
                                    props.setSearchIngredient(e.target.value);
                              }}
                        />
                  </h4>
                  {!isequal(props.searchIngredientArray, []) && (
                        <ul className="pizza-block__configure_window-add-ingredient ">
                              {props.searchIngredientArray.map((v) => {
                                    return (
                                          <li key={v}>
                                                <div>{v}</div>
                                                {/*PLUS from rotated cancel 45deg*/}
                                                <BsPlusSquareFill
                                                      onClick={() => {
                                                            props.setIngredient([...props.ingredients, v]);
                                                      }}
                                                      className="onHover-scale"
                                                />
                                          </li>
                                    );
                              })}
                        </ul>
                  )}
            </div>
      );
}

export default React.memo(ConfigureSearch);

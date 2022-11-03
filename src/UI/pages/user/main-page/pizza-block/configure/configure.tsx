import React, { memo, useEffect, useState } from 'react';
import DoughParams from '../doughParams';
import isequal from 'lodash.isequal';
import differencewith from 'lodash.differencewith';
import { useSelector } from 'react-redux';
import { ingredientsSelect } from '../../../../../../redux/slices/business/pizzas';
import { AiFillSetting } from 'react-icons/ai';
import ConfigureSearch from './configure-search';
import ConfigureButtons from './configure-buttons';
import ConfigureIngredients from './configure-ingredients';

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
      const [configureTab, setConfigureTab] = useState(false);

      return (
            <div>
                  <div className="pizza-block__configure_button" onClick={() => setConfigureTab(!configureTab)}>
                        <AiFillSetting></AiFillSetting>
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
                              refference={props.refference.current}
                        />
                  )}
            </div>
      );
}

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
            setNotAddedIngredients();
            const notAddedIngredients = differencewith(ingredients, props.ingredients, isequal);
            return searchIngredient.trim() != '' && searchIngredient.trim() != null
                  ? setSearchIngredientArray(notAddedIngredients.filter((value) => value.includes(searchIngredient)))
                  : setSearchIngredientArray([]);
      }, [props.ingredients, searchIngredient]);

      function setNotAddedIngredients() {
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
                        <ConfigureSearch
                              searchIngredient={searchIngredient}
                              setSearchIngredient={setSearchIngredient}
                              ingredients={props.ingredients}
                              searchIngredientArray={searchIngredientArray}
                              setIngredient={setIngredient}
                        />
                        <ConfigureIngredients
                              AreThereIngredients={AreThereIngredients}
                              ingredients={props.ingredients}
                              setIngredient={setIngredient}
                        />
                  </div>
                  <DoughParams
                        setDoughRadius={props.setDoughRadius}
                        setDoughWidth={props.setDoughWidth}
                        doughRadius={props.doughRadius}
                        doughWidth={props.doughWidth}
                  />
                  <ConfigureButtons
                        resetPizzaParams={props.resetPizzaParams}
                        rerenderParent={props.rerenderParent}
                        increaseQty={props.increaseQty}
                        qtyOfItemsInCart={props.qtyOfItemsInCart}
                        setConfigureTab={props.setConfigureTab}
                  />
            </div>
      );
}

export default memo(Configure);

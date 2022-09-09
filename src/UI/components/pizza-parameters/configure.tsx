import React from "react";
import DoughParams from "../doughParams";
import isequal from "lodash.isequal";
import { pagedPizzas } from "../../../redux/types";

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
  fetchedPizzas: pagedPizzas;
}) {
  const AreThereIngredients = !isequal(props.ingredients, []);
  //TODO search ingredients
  const searchIngredient = () => props.fetchedPizzas.ingredients
  return (
    <div className="pizza-block__configure_window DIRECTION_COLUMN">
      <div className="DIRECTION_COLUMN">
        <h4 className="DIRECTION_ROW" style={{ whiteSpace: "nowrap" }}>
          Add ingredient <input type="search" placeholder="Ingredient" />
        </h4>
        <ul
          style={
            AreThereIngredients
              ? {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                justifyContent: "space-between"
              }
              : { display: "block" }
          }>
          {AreThereIngredients ? (
            props.ingredients.map((v, index) => {
              return (
                <div style={{ display: "flex", justifyContent: "flex-start" }} key={index}>
                  <img
                    src="cancel.svg"
                    style={{ width: "24px", height: "24px" }}
                    onClick={() => {
                      const popo = [...props.ingredients];
                      popo.splice(popo.indexOf(v), 1);
                      props.rerenderParent(!props.parent);
                      props.setIngredients(popo);
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
        <div className="DIRECTION_ROW_WITHOUT_GAP" style={{ width: "100%" }}>
          <div className="pizza-block__configure_button" onClick={() => props.resetPizzaParams()}>
            Reset
          </div>
          <div
            className="button button--outline button--add"
            onClick={() => {
              props.increaseQty();
            }}>
            <span>Add to cart</span>
            {props.qtyOfItemsInCart ? <i>{props.qtyOfItemsInCart}</i> : ""}
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

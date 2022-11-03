import React from 'react';
import { MdCancel } from 'react-icons/md';

function ConfigureIngredients(props: { AreThereIngredients: boolean; ingredients: string[]; setIngredient(toSet: string[]): void }) {
      return (
            <ul
                  className="pizza-block__configure_window-ingredients-table"
                  style={
                        props.AreThereIngredients
                              ? {
                                      display: 'grid',
                                      gridTemplateColumns: '1fr 1fr',
                                      justifyContent: 'space-between'
                                }
                              : { display: 'block' }
                  }>
                  {props.AreThereIngredients ? (
                        props.ingredients.map((v, index) => {
                              return (
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} key={index}>
                                          <MdCancel
                                                className="onHover-scale"
                                                onClick={() => {
                                                      const temp = [...props.ingredients];
                                                      temp.splice(temp.indexOf(v), 1);
                                                      props.setIngredient(temp);
                                                }}></MdCancel>
                                          <li key={index}>{v}</li>
                                    </div>
                              );
                        })
                  ) : (
                        <div>Just dough... Good choice 👍</div>
                  )}
            </ul>
      );
}

export default React.memo(ConfigureIngredients);

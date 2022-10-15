import React from 'react';

function IngredientsList(props: { ingredients: string[]; doughWidth: string; doughRadius: number }) {
      return (
            <div className="pizza-block__selector">
                  <div className="pizza-block__description_and_params">
                        <div>
                              <h5>
                                    Ingredients:
                                    <div>{props.ingredients.join(', ')}</div>
                              </h5>
                              <h5>
                                    Dough:{' '}
                                    <div>
                                          width: {props.doughWidth}, radius: {props.doughRadius} ️
                                    </div>
                              </h5>
                        </div>
                  </div>
            </div>
      );
}

export default React.memo(IngredientsList);

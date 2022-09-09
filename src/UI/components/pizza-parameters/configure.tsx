import React from 'react';
import DoughParams from '../doughParams';

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
}) {
      const Ingredients = ['sausages', 'mayo', 'fish', 'lobster', 'lemon', 'olive', 'bread', 'cheese'];
      return (
            <div className="pizza-block__configure_window DIRECTION_COLUMN">
                  <div className="DIRECTION_COLUMN">
                        <h4 className="DIRECTION_ROW" style={{ whiteSpace: 'nowrap' }}>
                              Add ingredient <input type="search" placeholder="Ingredient"/>
                        </h4>
                        <ul
                              style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'max-content min-content',
                                    justifyContent: 'space-between'
                              }}>
                              {Ingredients.map((v) => {
                                    return (
                                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <li>{v}</li>
                                                <img src="cancel.svg" />
                                          </div>
                                    );
                              })}
                        </ul>
                  </div>
                  <div className="DIRECTION_COLUMN">
                        <DoughParams
                              setDoughRadius={props.setDoughRadius}
                              setDoughWidth={props.setDoughWidth}
                              doughRadius={props.doughRadius}
                              doughWidth={props.doughWidth}
                        />

                        <div className="DIRECTION_COLUMN">
                              <div className="DIRECTION_ROW_WITHOUT_GAP" style={{ width: '100%' }}>
                                    <div
                                          className="pizza-block__configure_button"
                                          onClick={() => props.setConfigureTab(!props.configureTab)}>
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
                                    <div
                                          className="pizza-block__configure_button"
                                          onClick={() => props.setConfigureTab(!props.configureTab)}>
                                          Save & close
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Configure;

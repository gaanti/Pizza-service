import React from 'react';

function ConfigureButtons(props: {
      resetPizzaParams: () => void;
      rerenderParent: () => void;
      increaseQty: () => void;
      qtyOfItemsInCart: number;
      setConfigureTab: React.Dispatch<React.SetStateAction<boolean>>
}) {
      return (
            <div className="DIRECTION_COLUMN">
                  <div className="DIRECTION_ROW" style={{ width: '100%' }}>
                        <div className="pizza-block__configure_button" onClick={() => props.resetPizzaParams()}>
                              Reset
                        </div>
                        <div
                              className="button button--outline button--add"
                              onClick={() => {
                                    props.rerenderParent();
                                    props.increaseQty();
                              }}>
                              <span>Add to cart</span>
                              {props.qtyOfItemsInCart ? <i>{props.qtyOfItemsInCart}</i> : ''}
                        </div>
                        <div className="pizza-block__configure_button" onClick={() => props.setConfigureTab(prevState => !prevState)}>
                              Save & close
                        </div>
                  </div>
            </div>
      );
}

export default React.memo(ConfigureButtons);
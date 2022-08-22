import React from 'react';

function CartItem() {
      return (
            <>
                  <div className="cart__item">
                        <div className="cart__item-img">
                              <img
                                    className="pizza-block__image"
                                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                                    alt="Pizza"
                              />
                        </div>
                        <div className="cart__item-info">
                              <h3>Cheesy Chicken</h3>
                              <p>thin crust, 26 cm.</p>
                        </div>
                        <div className="cart__item-count">
                              <div className="button button--outline button--circle cart__item-count-minus-plus">
                                    <img src="plus.svg" />
                              </div>
                              <div>
                                    <b>2</b>
                                    <h6>$666/per</h6>
                              </div>
                              <div className="button button--outline button--circle cart__item-count-minus-plus">
                                    <img src="plus.svg" />
                              </div>
                        </div>
                        <div className="cart__item-pizza-cost">
                              <div className="cart__item-pizza-cost-price">
                                    <b>$770</b>
                              </div>
                              <div className="cart__item-pizza-cost-remove">
                                    <div>
                                          <img src="cancel.svg" />
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default CartItem;
import React from 'react';
import { Link } from 'react-router-dom';

function CartEmpty() {
      return (
        <div className="wrapper">
              <div className="content">
                    <div className="container container--cart">
                          <div className="cart--empty">
                                <h2>Cart is empty 😕</h2>
                                <p>
                                      Probably, you haven't added pizza yet.
                                      <br />
                                      To choose the pizza go to the main page.
                                </p>
                                <Link to={'/'} className="button button--black">
                                      <span>Back to homepage</span>
                                </Link>
                          </div>
                    </div>
              </div>
        </div>
      );
}

export default CartEmpty;
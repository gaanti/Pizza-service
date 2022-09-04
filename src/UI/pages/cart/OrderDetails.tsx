import React, { useState } from 'react';
import '../../../styles/components/__input.scss'
import '../../../styles/_variables.scss'

function OrderDetails() {
      const d = new Date();

      const tempDay = d.getDate();
      const tempMonth = d.getMonth();

      const maxDay = tempDay + 7 < 10 ? `0${tempDay + 7}` : tempDay + 7;
      const minDay = tempDay < 10 ? `0${tempDay}` : tempDay;

      const minMonth = tempMonth < 10 ? `0${tempMonth}` : tempMonth;
      const maxMonth = tempMonth + 1 < 10 ? `0${tempMonth + 1}` : tempMonth + 1;

      const hours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
      const minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();

      const now = `2022-${minMonth}-${minDay}T${hours}:${minutes}`;

      const minDate = `2022-${minMonth}-${minDay}T00:00`;
      const maxDate = `2022-${maxMonth}-${maxDay}T00:00`;

      const [value, setValue] = useState(now);

      return (
            /*<div className="cart___user__data_order">
  <h3> Cart order details</h3>
  <div className="cart___user__data_order-input-wrapper">
        <div className="cart___user__data_order-input-radio">
              I want to
              <div className="direction-column">
                    <div>
                          <input type="radio" name="popo" id="delivery" />
                          <label htmlFor="delivery">Order delivery</label>
                    </div>
                    <div>
                          <input type="radio" name="popo" id="pickup"></input>
                          <label htmlFor="pickup">Pickup on my own</label>
                    </div>
              </div>
        </div>
        <div className="cart___user__data_order-input-text">
              <div className="direction-column">
                    <label htmlFor="Address">Address</label>
                    <input className="cart___user__data_order-input" id="Address" />
              </div>
              <div className="direction-column">
                    <label htmlFor="Contact_person">Contact person</label>
                    <input className="cart___user__data_order-input" id="Contact_person" />
              </div>
              <div className="direction-column">
                    <label htmlFor="Contact_method">Contact method</label>
                    <input className="cart___user__data_order-input" id="Contact_method" />
              </div>
              <div className="direction-column">
                    <label htmlFor="Contact_method">Delivery time</label>
                    <input
                          className="cart___user__data_order-input"
                          id="Contact_method"
                          type="datetime-local"
                          onChange={(e) => setValue(e.target.value)}
                          value={value}
                          min={minDate}
                          max={maxDate}
                    />
              </div>
        </div>
  </div>
</div>*/
            <div className="order_details">
                  <article className="l-design-widht">
                        <h1>Enter your data to order the pizza 😋</h1>

                        <p>Most of the projects I work on have about <mark>3</mark> important colors: Main- , Accent-
                              and Background-Color. Naturally tons of other colors are used in a typical Project, but
                              they are mostly used within specific components.
                        </p>

                        <p>I find it useful to set those 3 colors as vars on the root and change them in specific
                              contexts. It turns out that the complexity of the components I build is dramatically cut
                              down by this. And also gives me a lot of control over the cascade.</p>
                        <div className="card card--inverted">
                              <h2>
                                    <svg className="icon" aria-hidden="true">
                                          <use xlinkHref="#icon-coffee" href="#icon-coffee" />
                                    </svg>
                                    Inverted
                              </h2>
                              <label className="input">
                                    <input className="input__field" type="text" placeholder=" "
                                           value="Valuable value" />
                                    <span className="input__label">Some Fancy Label</span>
                              </label>

                              <div className="button-group">
                                    <button>Send</button>
                                    <button type="reset">Reset</button>
                              </div>
                        </div>
                        /////
                  </article>

                  <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
                        <symbol id="icon-coffee" viewBox="0 0 20 20">
                              <title>icon-coffee</title>
                              <path fill="currentColor"
                                    d="M15,17H14V9h3a3,3,0,0,1,3,3h0A5,5,0,0,1,15,17Zm1-6v3.83A3,3,0,0,0,18,12a1,1,0,0,0-1-1Z" />
                              <rect fill="currentColor" x="1" y="7" width="15" height="12" rx="3" ry="3" />
                              <path fill="var(--color-accent)"
                                    d="M7.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,0,1-1.79.89Z" />
                              <path fill="var(--color-accent)"
                                    d="M3.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z" />
                              <path fill="var(--color-accent)"
                                    d="M11.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z" />
                        </symbol>
                  </svg></div>
      );
}

      export default OrderDetails;
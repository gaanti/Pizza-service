import React, { useState } from 'react';
import '../../../styles/components/__input.scss';
import '../../../styles/_variables.scss';

function OrderDetails() {
      const d = new Date();

      const tempDay = d.getDate();
      const tempMonth = d.getMonth();

      const maxDay = tempDay + 7 < 10 ? `0${tempDay + 7}` : tempDay + 7;
      const minDay = tempDay < 10 ? `0${tempDay}` : tempDay;

      const minMonth = tempMonth < 10 ? `0${tempMonth}` : tempMonth;
      const maxMonth = tempMonth + 1 < 10 ? `0${tempMonth + 1}` : tempMonth + 1;

      const hours = d.getHours() < 10 ? `0${d.getHours() + 1}` : d.getHours() + 1;
      const minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();

      const now = `2022-${minMonth}-${minDay}T${hours}:${minutes}`;

      const minDate = `2022-${minMonth}-${minDay}T00:00`;
      const maxDate = `2022-${maxMonth}-${maxDay}T00:00`;

      const [value, setValue] = useState(now);
      const [DeliveryOrPickup, setDeliveryOrPickup] = useState('Pickup');
      const [contactMethod, setcontactMethod] = useState('Telegram');
      const handleChange = (event: any) => {
            setcontactMethod(event.target.value);
      };

      return (
            <div className="order_details">
                  <article className="l-design-widht">
                        {/*<h1>Enter your data to order the pizza 😋</h1>*/}
                        <p>
                              Choose one of two order options:{' '}
                              <div
                                    onClick={() => setDeliveryOrPickup('Delivery')}
                                    className={`chooseOpt ${DeliveryOrPickup == 'Delivery' ? 'active' : ''}`}>
                                    Delivery
                              </div>{' '}
                              or{' '}
                              <div onClick={() => setDeliveryOrPickup('Pickup')} className={`chooseOpt ${DeliveryOrPickup == 'Pickup' ? 'active' : ''}`}>
                                    Pickup
                              </div>{' '}
                              and the date when you want to get its.
                        </p>
                        <hr />
                        <p>Your pizza will be ready exactly when you want!</p>
                        {/*<p>Most of the projects I work on have about <mark>3</mark> important colors: Main- , Accent-
                              and Background-Color. Naturally tons of other colors are used in a typical Project, but
                              they are mostly used within specific components.
                        </p>

                        <p>I find it useful to set those 3 colors as vars on the root and change them in specific
                              contexts. It turns out that the complexity of the components I build is dramatically cut
                              down by this. And also gives me a lot of control over the cascade.</p>*/}
                        <div className="card card--inverted">
                              <h2>
                                    <svg className="icon" aria-hidden="true">
                                          <use xlinkHref="#icon-coffee" href="#icon-coffee" />
                                    </svg>
                                    Order datails
                              </h2>
                              <label className="input">
                                    <input
                                          className="input__field"
                                          id="Contact_method"
                                          type="datetime-local"
                                          onChange={(e) => setValue(e.target.value)}
                                          value={value}
                                          min={minDate}
                                          max={maxDate}
                                    />
                                    <div className="input__label">
                                          {DeliveryOrPickup
                                                ? DeliveryOrPickup === 'Delivery'
                                                      ? 'Delivery'
                                                      : DeliveryOrPickup === 'Pickup'
                                                      ? 'Pickup'
                                                      : ''
                                                : ''}{' '}
                                          date
                                    </div>
                              </label>
                              <label className="input">
                                    <input className="input__field" type="text" placeholder="Gaanti" spellCheck="false" />
                                    <div className="input__label">Contact person</div>
                              </label>
                              {/* <label className="input">
                                    <div className="input__label direction-row">Phone number or telegram tag</div>
                                    <input className="input__field" type="text" property="alol" />
                              </label>*/}

                              {DeliveryOrPickup == 'Delivery' && (
                                    <>
                                          <label className="input">
                                                <div className="input__label direction-row">City</div>
                                                <input className="input__field" type="text" />
                                          </label>
                                          <label className="input">
                                                <div className="input__label direction-row">Street</div>
                                                <input className="input__field" type="text" property="alol" />
                                          </label>
                                    </>
                              )}

                              <div className="contact-method_wrapper">
                                    How can we notify you?
                                    <div className="contact-method">
                                          <div>
                                                <input
                                                      type="radio"
                                                      id="contactChoice1"
                                                      name="contact"
                                                      value="Telegram"
                                                      onChange={handleChange}
                                                      checked={contactMethod === 'Telegram'}
                                                />
                                                <label htmlFor="contactChoice1">Telegram</label>
                                          </div>
                                          <div>
                                                <input
                                                      type="radio"
                                                      id="contactChoice2"
                                                      name="contact"
                                                      value="Phone"
                                                      onChange={handleChange}
                                                />
                                                <label htmlFor="contactChoice2">Phone</label>
                                          </div>
                                          <div>
                                                <input
                                                      type="radio"
                                                      id="contactChoice3"
                                                      name="contact"
                                                      value="Nothing"
                                                      onChange={handleChange}
                                                />
                                                <label htmlFor="contactChoice3">Nothing</label>
                                          </div>
                                          {}
                                    </div>
                              </div>
                              {contactMethod !== 'Nothing' && (
                                    <label className="input">
                                          <div className="input__label direction-row">{contactMethod}</div>

                                          <input
                                                className="input__field"
                                                type="text"
                                                property="alol"
                                                placeholder={
                                                      contactMethod
                                                            ? contactMethod === 'Telegram'
                                                                  ? '@Anton_Gaskevich'
                                                                  : contactMethod === 'Phone'
                                                                  ? '+380 99 377 4647'
                                                                  : ''
                                                            : ''
                                                }
                                          />
                                    </label>
                              )}

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
                              <path
                                    fill="currentColor"
                                    d="M15,17H14V9h3a3,3,0,0,1,3,3h0A5,5,0,0,1,15,17Zm1-6v3.83A3,3,0,0,0,18,12a1,1,0,0,0-1-1Z"
                              />
                              <rect fill="currentColor" x="1" y="7" width="15" height="12" rx="3" ry="3" />
                              <path
                                    fill="var(--color-accent)"
                                    d="M7.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,0,1-1.79.89Z"
                              />
                              <path
                                    fill="var(--color-accent)"
                                    d="M3.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z"
                              />
                              <path
                                    fill="var(--color-accent)"
                                    d="M11.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z"
                              />
                        </symbol>
                  </svg>
            </div>
      );
}

export default OrderDetails;

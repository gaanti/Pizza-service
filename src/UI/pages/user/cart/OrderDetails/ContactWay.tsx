import React, { useState } from 'react';
import { notifyMethod } from '../../../../../redux/types/order.types';

interface props {
      contactMethod: notifyMethod;
      setcontactMethod: React.Dispatch<React.SetStateAction<notifyMethod>>;
      handleChange: (event: any) => void;
      contactProvidedByUser: string;
      setContactProvidedByUser: (contact: string) => void;
}

const ContactWay = (props: {
      contactMethod: notifyMethod;
      setcontactMethod: React.Dispatch<React.SetStateAction<notifyMethod>>;
      handleChange: (event: any) => void;
      contactProvidedByUser: string;
      setContactProvidedByUser: (contact: string) => void;
}) => {
      return (
            <div>
                  <div className="contact-method_wrapper">
                        How can we notify you?
                        <div className="contact-method">
                              <div>
                                    <input
                                          type="radio"
                                          id="contactChoice1"
                                          name="contact"
                                          value="Telegram"
                                          onChange={props.handleChange}
                                          checked={props.contactMethod === notifyMethod.Telegram}
                                    />
                                    <label htmlFor="contactChoice1">Telegram</label>
                              </div>
                              <div>
                                    <input
                                          type="radio"
                                          id="contactChoice2"
                                          name="contact"
                                          value="Phone"
                                          onChange={props.handleChange}
                                          checked={props.contactMethod === notifyMethod.Phone}
                                    />
                                    <label htmlFor="contactChoice2">Phone</label>
                              </div>
                              <div>
                                    <input
                                          type="radio"
                                          id="contactChoice3"
                                          name="contact"
                                          value="Nothing"
                                          onChange={props.handleChange}
                                          checked={props.contactMethod === notifyMethod.Nothing}
                                    />
                                    <label htmlFor="contactChoice3">Nothing</label>
                              </div>
                              {}
                        </div>
                  </div>
                  {props.contactMethod !== notifyMethod.Nothing && (
                        <label className="input">
                              <div className="input__label direction-row">{props.contactMethod}</div>
                              <input
                                    className="input__field"
                                    type="text"
                                    property="alol"
                                    placeholder={
                                          props.contactMethod && props.contactMethod === notifyMethod.Telegram
                                                ? '@Anton_Gaskevich'
                                                : props.contactMethod === notifyMethod.Phone
                                                ? '+380 99 377 4647'
                                                : ''
                                    }
                                    value={props.contactProvidedByUser}
                                    onChange={(event) => props.setContactProvidedByUser(event.target.value)}
                                    //TODO form validation and inactive checkout button until all fields are filled
                              />
                        </label>
                  )}
            </div>
      );
};

export default ContactWay;

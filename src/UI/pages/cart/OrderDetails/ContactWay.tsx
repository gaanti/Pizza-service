import React, { useState } from 'react';

function ContactWay() {
      const [contactMethod, setcontactMethod] = useState('Telegram');
      const handleChange = (event: any) => {
            setcontactMethod(event.target.value);
      };
      const [contactProvidedByUser, setContactProvidedByUser] = useState('' as string);
      const [readyToCheckout, setReadyToCheckout] = useState([
            { DeliveryOrPickup: false },
            { contactMethod: false },
            { getDate: false },
            { contactPerson: false }
      ]);

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
                                          onChange={handleChange}
                                          checked={contactMethod === 'Telegram'}
                                    />
                                    <label htmlFor="contactChoice1">Telegram</label>
                              </div>
                              <div>
                                    <input type="radio" id="contactChoice2" name="contact" value="Phone" onChange={handleChange} />
                                    <label htmlFor="contactChoice2">Phone</label>
                              </div>
                              <div>
                                    <input type="radio" id="contactChoice3" name="contact" value="Nothing" onChange={handleChange} />
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
                                    value={contactProvidedByUser}
                                    //TODO form validation and inactive checkout button until all fields are filled
                                    onChange={(e) => {
                                          const val = e.target.value;
                                          const pattern = /.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/;
                                          setContactProvidedByUser(val);

                                          if (pattern.test(val)) {
                                                readyToCheckout.find((e) => e.contactPerson)
                                                      ? console.log('succes')
                                                      : console.log('failed');
                                                readyToCheckout.push({ contactPerson: true });
                                                setReadyToCheckout(readyToCheckout);
                                          } else;
                                    }}
                              />
                        </label>
                  )}
            </div>
      );
}

export default React.memo(ContactWay);

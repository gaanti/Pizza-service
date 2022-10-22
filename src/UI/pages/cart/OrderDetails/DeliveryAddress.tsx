import React from 'react';

function DeliveryAddress(props: {
      DeliveryOrPickup: string;
      city: string;
      street: string;
      setCity: (city: string) => void;
      setStreet: (city: string) => void;
}) {
      if (props.DeliveryOrPickup === 'Delivery') {
            return (
                  <>
                        <label className="input">
                              <div className="input__label direction-row">City</div>
                              <input
                                    className="input__field"
                                    type="text"
                                    placeholder="Brazilia"
                                    value={props.city}
                                    onChange={(e) => props.setCity(e.target.value)}
                              />
                        </label>
                        <label className="input">
                              <div className="input__label direction-row">Street</div>
                              <input
                                    className="input__field"
                                    type="text"
                                    property="alol"
                                    placeholder="Fancy mushrooms 48"
                                    value={props.street}
                                    onChange={(e) => props.setStreet(e.target.value)}
                              />
                        </label>
                  </>
            );
      } else return <div></div>;
}

export default React.memo(DeliveryAddress);

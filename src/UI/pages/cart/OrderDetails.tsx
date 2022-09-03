import React from 'react';

function OrderDetails() {
      return (
            <div className="cart___user__data_order">
                  <h3> Cart order details</h3>
                  <div className="cart___user__data_order-input-wrapper">
                        <div className="cart___user__data_order-input-radio">
                              <div>
                                    <input type="radio" name="popo" id="delivery"></input>
                                    <label htmlFor="delivery">Huey</label>
                              </div>
                              <div>
                                    <input type="radio" name="popo" id="pickup"></input>
                                    <label htmlFor="pickup">Huey</label>
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
                        </div>
                  </div>
            </div>
      );
}

export default OrderDetails;
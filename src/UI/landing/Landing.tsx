import React from 'react';
import GoShoppingButton from '../components/landing/go-shopping-button';

function Landing() {
      return (
            <div className="TWOrows">
                  <div className="m-scroll">
                        <div className="m-scroll__title">
                              <div>
                                    <h1>REACT PIZZA &nbsp; REACT PIZZA &nbsp;</h1>
                                    <h1>REACT PIZZA &nbsp; REACT PIZZA &nbsp;</h1>
                              </div>
                        </div>
                  </div>
                  <div className="landing">
                        <div></div>
                        <div className="main-content">
                              <div>
                                    <GoShoppingButton />
                                    <div className="landing_title">Something, you have never tried before</div>
                              </div>
                              <div>
                                    <div className="landing_image">
                                          <img src="landing_image.png" alt="landing_image.png" />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Landing;

import React from 'react';
import { footerVisibilitySelector, setSwitchVisibility } from '../redux/slices/footer';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import Footer from './landing/Footer';
import './footer-with-button.scss';
import { useDispatch, useSelector } from 'react-redux';

const FooterWithButton = () => {
      const displayFooter = useSelector(footerVisibilitySelector);
      const dispatch = useDispatch();
      return (
            <div className="CENTRED_ITEM">
                  <div
                        className="pizza-block__configure_button show-hide-button"
                        onClick={() => dispatch(setSwitchVisibility(''))}
                        id="footer">
                        {displayFooter ? (
                              <div>
                                    <AiOutlineArrowDown />
                                    &nbsp; Hide &nbsp;
                                    <AiOutlineArrowDown />
                              </div>
                        ) : (
                              <div>
                                    <AiOutlineArrowUp />
                                    &nbsp; Show more datails &nbsp;
                                    <AiOutlineArrowUp />
                              </div>
                        )}
                  </div>
                  {displayFooter && <Footer />}
            </div>
      );
};

export default FooterWithButton;

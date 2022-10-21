import React, { useState } from 'react';
import './burger-navigation.scss';
import HeaderPointToFooter from '../header-point-to-footer';
import { useDispatch, useSelector } from 'react-redux';
import { footerPointsTitlesSelector, setNavigatedItemSelector, setVisibility } from '../../../../redux/slices/UI/footer';

function BurgerNavigation() {
      const dispatch = useDispatch();
      const [navigation, setNavigation] = useState(true);
      const navigateToFooter = (item: string) => {
            dispatch(setNavigatedItemSelector(item));
            dispatch(setVisibility(true));
            setNavigation(!navigation);
      };
      const RightPnts = useSelector(footerPointsTitlesSelector);

      return (
            <div className={`burger-container ${navigation ? 'CENTRED_ITEM' : ''}`}>
                  <div className={`burger-wrapper ${navigation ? 'burger-menu-closed' : 'burger-menu-opened'}`}>
                        <div className="make-burger-middle">
                              <div
                                    className={'burger-open-button ' + `${navigation ? 'scale-center-down' : 'spin'}`}
                                    onClick={() => setNavigation(!navigation)}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                              </div>
                        </div>
                        {!navigation && (
                              <div className="burger-menu">
                                    {RightPnts.map((point) => {
                                          return (
                                                <a
                                                  key={point}
                                                      href="#footer"
                                                      className="hover"
                                                      onClick={() => {
                                                            navigateToFooter(point);
                                                      }}>
                                                      <HeaderPointToFooter>{point}</HeaderPointToFooter>
                                                </a>
                                          );
                                    })}
                              </div>
                        )}
                  </div>
            </div>
      );
}

export default BurgerNavigation;

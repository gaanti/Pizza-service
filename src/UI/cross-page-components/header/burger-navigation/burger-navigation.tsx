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
                  <div className={`burger-menu ${navigation ? 'burger-menu-closed' : 'burger-menu-opened'}`}>
                        <div className="make-burger-middle">
                              <div
                                    className={'burger-navigation ' + `${navigation ? 'scale-center-down' : 'spin'}`}
                                    onClick={() => setNavigation(!navigation)}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                              </div>
                        </div>
                        <div>
                              {!navigation &&
                                    RightPnts.map((point) => {
                                          return (
                                                <a
                                                      href="src/UI/cross-page-components/header/burger-navigation/burger-navigation#footer"
                                                      className="hover"
                                                      onClick={() => {
                                                            navigateToFooter(point);
                                                      }}>
                                                      <div>
                                                            <HeaderPointToFooter>{point}</HeaderPointToFooter>
                                                      </div>
                                                </a>
                                          );
                                    })}
                        </div>
                  </div>
            </div>
      );
}

export default BurgerNavigation;

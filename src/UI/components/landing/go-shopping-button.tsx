import React from 'react';
import './go-shopping-button.scss';

function GoShoppingButton() {
      const Header = () => {
            return (
                  <div className="header__logo">
                        {/*<div className="firstDiv">
          <div className="secondDiv ">
            <div className="logo_">
              <div>
                <img src="power.svg" alt="power.svg" />
              </div></div>
          </div>
        </div>
*/}
                        {/*<Link to="/pizzas">
                              <div className="landing_anchor">
                                    <img src="power.svg" alt="power.svg" />
                              </div>
                        </Link>*/}

                        <div className="header__logo___textNsubText">
                              <h1> Parametrize it any way you want! </h1>
                        </div>
                  </div>
            );
      };
      const MemorizedHeader = React.memo(Header);

      return (
            <div className="header" style={{ position: 'relative' }}>
                  <div className="header__container">
                        <MemorizedHeader />
                  </div>
            </div>
      );
}

export default GoShoppingButton;

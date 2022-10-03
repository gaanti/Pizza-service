import React, { useState } from "react";
import "./burger-navigation.scss";
import HeaderPointToFooter from "../../landing/header-point-to-footer";
import HeaderPoint from "../../landing/header-point";
import { useDispatch, useSelector } from "react-redux";
import {
  footerPointsTitlesSelector,
  setNavigatedItemSelector,
  setVisibility
} from "../../../redux/slices/footer";

function BurgerNavigation() {
  const dispatch = useDispatch()
  const [navigation, setNavigation] = useState(true);
  const navigateToFooter = (item:string) => {
    dispatch(setNavigatedItemSelector(item))
    dispatch(setVisibility(true))
    setNavigation(!navigation)
  }
  const RightPnts = useSelector(footerPointsTitlesSelector)

  return (
    <div className={`burger-container ${navigation?"CENTRED_ITEM":""}`}>
      <div className={`burger-menu ${navigation?"burger-menu-closed":"burger-menu-opened"}`}>
        <div className="make-burger-middle">
          <div className={"burger-navigation " + `${navigation ? "scale-center-down" : "spin"}`}
               onClick={() => setNavigation(!navigation)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          {!navigation && RightPnts.map((point) => {
            return (
              <a href="#footer" className="hover" onClick={() => {
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
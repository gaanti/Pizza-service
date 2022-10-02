import React, { useState } from "react";
import "./burger-navigation.scss";
import { LeftPoints } from "../../landing/Landinx";
import HeaderPointToFooter from "../../landing/header-point-to-footer";
import HeaderPoint from "../../landing/header-point";
import { useDispatch, useSelector } from "react-redux";
import {
  footerPointsTitlesSelector,
  setNavigatedItemSelector,
  setVisibility,
} from "../../../redux/slices/footer";

function BurgerNavigation() {
  const dispatch = useDispatch()
  const pickFooterPoint = (item:string) =>{
    dispatch(setNavigatedItemSelector(item))
  }
  const [navigation, setNavigation] = useState(true);
  const navigateToFooter = () => {
    dispatch(setVisibility(true))
    setNavigation(!navigation)
  }
  const RightPnts = useSelector(footerPointsTitlesSelector)
  let LeftPnts = { ...LeftPoints };

  return (
    <div className="burger-container">
      <div className="opened-burger-menu">
        <div className="make-burger-middle">
          <div className={"burger-navigation " + `${navigation ? "scale-center-down" : "spin"}`}
               onClick={() => setNavigation(!navigation)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {!navigation && LeftPnts.points.map((point) => {
          console.log(point);
          return (
            <div className="hover">
              <HeaderPoint>{point}</HeaderPoint>
            </div>
          );
        })}
        {!navigation && RightPnts.map((point) => {
          console.log(point);
          return (
            <a href="#footer">
              <div className="hover" onClick={() => {
                pickFooterPoint(point)
                navigateToFooter();
              }}>
                <HeaderPointToFooter>{point}</HeaderPointToFooter>
              </div>
            </a>
        );
      })}
      </div>
    </div>
  );
}

export default BurgerNavigation;
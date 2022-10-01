import React, { useState } from "react";
import "./burger-navigation.scss";

function BurgerNavigation() {
  const [navigation, setNavigation] = useState(false);
  return (
    <div>
      <div className="make-burger-middle">
        <div className={"burger-navigation " + `${navigation ? "scale-center-down" : "spin"}`}
             onClick={() => setNavigation(!navigation)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default BurgerNavigation;
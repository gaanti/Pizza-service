import React from "react";
import './Header.scss'

function Header() {
  return (
    <div className="moving-text">
      <div id="rssBlock">
        <p className="cnnContents">
          <span className="marqueeStyle">|&nbsp;REACT PIZZA | REACT PIZZA | REACT PIZZA | REACT PIZZA | REACT PIZZA |&nbsp;</span>
          <span
            className="marqueeStyle2">|&nbsp;REACT PIZZA | REACT PIZZA | REACT PIZZA | REACT PIZZA | REACT PIZZA |&nbsp;</span>
        </p>
      </div>
    </div>

  );
}

export default Header;
import React from "react";
import './Header.scss'

function Header() {
  return (
    <div className="moving-text">
      <div id="rssBlock">
        <p className="cnnContents">
          <span className="marqueeStyle">&nbsp;continuous infinite text loop 1 continuous infinite text loop 2 </span>
          <span
            className="marqueeStyle2">&nbsp;continuous infinite text loop 3 continuous infinite text loop 4&nbsp;</span>
        </p>
      </div>
    </div>

  );
}

export default Header;
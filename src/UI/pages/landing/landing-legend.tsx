import React, { useState } from "react";
import "./landing-legend.scss";
import { Link } from "react-router-dom";

function LandingLegend() {
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
  }, 4000);
  return (
    <div>

      <h2>
        <div className="landing-legend DIRECTION_ROW">
          <img
            src="https://media0.giphy.com/media/5ZZbMGV6EQANO/giphy.gif?cid=ecf05e47rv7lmx7qabgi83iog4pm2wacscn7jf32l888ticv&rid=giphy.gif&ct=g"
            alt="asd"
            style={{ display: "inline-block" }} />
          <div className="DIRECTION_COLUMN">
            <div className="landing-legend-text">
              <span>Once&nbsp;</span> <span>upon&nbsp;</span> <span>a&nbsp;</span> <span>time,&nbsp;</span> <span>there&nbsp;</span>
              <span>was&nbsp;</span> <span>a&nbsp;</span> <span>hungry...&nbsp;</span> <span>Very&nbsp;</span> <span>hungry&nbsp;</span>
              <span>person,&nbsp;</span> <span>who&nbsp;</span> <span>was&nbsp;</span> <span>saved&nbsp;</span> <span>by&nbsp;</span> <br />
              <span>REACT</span> <span>PIZZA</span>
            </div>
            <div className={"landing-legend-button " + `${show ? "hidden" : ""}`}>
              <Link to="pizzas" style={{ display: "inline-block" }}>
                <button style={{ display: "inline-block" }}>Become not hungry</button>
              </Link>
              <img
                src="https://media0.giphy.com/media/u98zWbe3jgJoI/giphy.gif?cid=ecf05e47cifhu4ytrhxwo2d7xli0c5n7we9e2w50lckzdyn5&rid=giphy.gif&ct=g"
                alt="asd" style={{ display: "inline-block" }} />
            </div>
          </div>
        </div>

      </h2>
    </div>
  );
}

export default LandingLegend;
import React from "react";
import "./landing.scss";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="wrapper">
      <div className="landing">
        <div className="landing-block-1">
          <div className="landing-header">
            <h2>Reactive speed, molecular taste</h2>
            <h2>Nobody has time to waste it, especially if you're hungry 🤷</h2>
            <Link to="pizzas">
              <button>Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
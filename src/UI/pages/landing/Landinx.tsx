import React from "react";
import "./landing.scss";
import { Link } from "react-router-dom";
import LandingSideHeader from "./landing-side-header";
import Header from "./Header";
import Footer from "./Footer";
import LandingLegend from "./landing-legend";

function Landing() {
  const LeftPoints = {
    side: "left", points: ["Delivery time", "Personnel", "What ingredients we use"
    ]
  };
  const RightPoints = {
    side: "right", points: ["Media", "Working hours", "Our address", "Contact us"
    ]
  };
  return (
    //TODO make design responsive
    <div className="lading-wrapper">
      <Header />
      <div className="lading-wrapper-main-content">
        <LandingSideHeader points={LeftPoints} />
        <div className="landing">
          <div className="landing-block-1">
            <div className="landing-header">
              <div>
                {/*<h2>Reactive speed, molecular taste</h2>
                <h2>Nobody has time to waste it, especially if you're hungry 🤷</h2>*/}
                <LandingLegend></LandingLegend>
                {/*<div className="landing-buy-block">

                  <Link to="pizzas">
                    <button>Become not hungry</button>
                  </Link>
                  <img
                    src="https://media0.giphy.com/media/u98zWbe3jgJoI/giphy.gif?cid=ecf05e47cifhu4ytrhxwo2d7xli0c5n7we9e2w50lckzdyn5&rid=giphy.gif&ct=g"
                    alt="asd" />
                </div>*/}
              </div>
            </div>
          </div>
        </div>
        <LandingSideHeader points={RightPoints} />
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
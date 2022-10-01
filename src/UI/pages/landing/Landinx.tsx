import React from "react";
import "./landing.scss";
import { Link } from "react-router-dom";
import LandingSideHeader from "./landing-side-header";
import Header from "./Header";
import Footer from "./Footer";

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
                <h2>Reactive speed, molecular taste</h2>
                <h2>Nobody has time to waste it, especially if you're hungry 🤷</h2>

                <div className="landing-buy-block">
                  <img
                    src="https://media.tenor.com/uVwa6hZQ3kYAAAAC/pizza-steve-pixel-steve.gif"
                    alt="asd" />
                  <Link to="pizzas">
                    <button>Become not hungry</button>
                  </Link>
                </div>
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
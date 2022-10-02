import React from "react";
import "./landing-side-header.tsx.scss";
import HeaderPoint from "./header-point";
import HeaderPointToFooter from "./header-point-to-footer";

function LandingSideHeader(props: { points: { side: string, points: string[] } }) {

  return (

    <div className="point-wrapper">
      {props.points.side === "left" ? props.points.points.map((point) => {
        return (
          <HeaderPoint>{point}</HeaderPoint>
        );
      }) : props.points.points.map((point) => {
        return (
          <HeaderPointToFooter>{point}</HeaderPointToFooter>
        );
      })}
    </div>
  );
}

export default LandingSideHeader;
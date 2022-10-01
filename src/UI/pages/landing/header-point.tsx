import React from "react";
import './header-point.tsx.scss'

function HeaderPoint(props: { children: any }) {
  return (
    <div className="header-point">{props.children}</div>
  );
}

export default HeaderPoint;
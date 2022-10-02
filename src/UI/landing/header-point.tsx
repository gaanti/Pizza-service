import React from "react";
import './header-point.tsx.scss'

function HeaderPoint(props: { children: any }) {
  return (
    <div className="header-point header-point-to-page">{props.children}</div>
  );
}

export default HeaderPoint;
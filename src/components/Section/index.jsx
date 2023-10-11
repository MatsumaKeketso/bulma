import React from "react";
import "./style.scss";
function Section({ children }) {
  return <div className="section-padding">{children}</div>;
}

export default Section;

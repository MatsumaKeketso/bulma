import React from "react";
import { Typography } from "../Typography";
import "./style.scss";
function WhatWeDoCard({ icon, heading, text }) {
  return (
    <div className="what-we-do-card--main">
      <div className="icon">{icon}</div>
      <div className="heading">
        <Typography.Heading variant="is-4">{heading}</Typography.Heading>
      </div>
      <div className="text">
        <Typography.Body size="20">{text}</Typography.Body>
      </div>
    </div>
  );
}

export default WhatWeDoCard;

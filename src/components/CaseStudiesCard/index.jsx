import React from "react";
import "./style.scss";
import { Typography } from "../Typography";
function CaseStudiesCard({ image, title, text }) {
  return (
    <div
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="case-study-card--main"
    >
      <div className="content">
        <Typography.Heading variant="is-3" color="white">
          {title}
        </Typography.Heading>
        <Typography.Body color="white"> {text}</Typography.Body>
      </div>
    </div>
  );
}

export default CaseStudiesCard;

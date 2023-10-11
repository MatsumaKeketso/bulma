import React from "react";
import { Typography } from "../Typography";
import "./style.scss";
function HeadingTag({ label, color }) {
  return (
    <div className="heading-tag--main">
      <Typography.Subtitle variant="is-4" color={color}>
        {label}
      </Typography.Subtitle>
    </div>
  );
}

export default HeadingTag;

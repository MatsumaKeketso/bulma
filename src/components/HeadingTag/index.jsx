import React from "react";
import "./style.scss";
import { Typography } from "../Typography";
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

import React from "react";
import { Typography } from "../Typography";
import "./style.scss";
import { Colours } from "../../assets/Colors";
/**
 *
 * @param {string} children text to be displayed  (passed between open and closing tag)
 * @param {ReactElement} startIcon start icon
 * @param {ReactElement} endIcon end icon
 * @param {Event} onClick click event
 * @param {string} color primary || link || info || success || warning || danger || white
 * @returns
 */
const Button = ({
  children,
  startIcon,
  endIcon,
  onClick,
  color = "primary",
}) => {
  const dynamicFontColor = (color) => {
    if (color === "warning") {
      return Colours.shades.black;
    } else if (color === "white") {
      return Colours.primary.main;
    } else {
      return Colours.shades.white;
    }
  };
  return (
    <button className={`button--main ${color}`} onClick={onClick}>
      <Typography.Body size="12" bold color={dynamicFontColor(color)}>
        {startIcon}
        {children}
        {endIcon}
      </Typography.Body>
    </button>
  );
};

export default Button;

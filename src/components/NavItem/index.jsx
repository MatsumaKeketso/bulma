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
const NavItem = ({ children, startIcon, endIcon, href, color = "primary" }) => {
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
    <a className={`navitem--main ${color}`} href={href}>
      <Typography.Body size="12" bold color={dynamicFontColor(color)}>
        {startIcon}
        {children}
        {endIcon}
      </Typography.Body>
    </a>
  );
};

export default NavItem;

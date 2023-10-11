import React from "react";
import "./style.scss";
import Container from "../Container";
import { ReactComponent as Logo } from "./../../assets/images/logo/logo.svg";
import { ReactComponent as MenuIcon } from "./../../assets/images/icons/menu-icon.svg";
import Button from "../Button";
import NavItem from "../NavItem";
const Navbar = () => {
  return (
    <div className="navbar--main">
      <Container>
        <div className="wrapper">
          <div className="start-section">
            <Logo />
          </div>
          <div className="center-section">
            <NavItem>Services</NavItem>
            <NavItem>Industries</NavItem>
            <NavItem>Cases</NavItem>
            <NavItem>Contact</NavItem>
          </div>

          <div className="end-section">
            <NavItem color="white">Let's Talk</NavItem>
            <div className="menu">
              <Button startIcon={<MenuIcon color="white" />}></Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

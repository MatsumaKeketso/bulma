import React from "react";
import "./style.scss";
import Container from "../Container";
import { ReactComponent as Logo } from "./../../assets/images/logo/logo.svg";
import { ReactComponent as MenuIcon } from "./../../assets/images/icons/menu-icon.svg";
import Button from "../Button";
const Navbar = ({ links = [] }) => {
  return (
    <div className="navbar--main">
      <Container>
        <div className="wrapper">
          <div className="start-section">
            <Logo />
          </div>
          <div className="center-section">
            <Button>Services</Button>
            <Button>Industries</Button>
            <Button>Cases</Button>
            <Button>Contact</Button>
          </div>

          <div className="end-section">
            <Button color="white">Let's Talk</Button>
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

import React from "react";
import "./style.scss";
import { Colours } from "../../assets/Colors";
const Container = ({ children, background }) => {
  return (
    <div style={{ background: background }} className="container--main">
      {children}
    </div>
  );
};

export default Container;

import React from "react";
import "./App.scss";
import { useEffect, useState } from "react";
import { MainService } from "./services/WhatweDoService";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWedo";
import Brands from "./components/Brands";
import Section from "./components/Section";
import Footer from "./components/Footer";
import CaseStudies from "./components/CaseStudies";
const App = () => {
  return (
    <div className="app--main">
      <Navbar />
      <Hero />
      <Section>
        <WhatWeDo />
        <CaseStudies />
        <Brands />
      </Section>
      <Footer />
    </div>
  );
};

export default App;

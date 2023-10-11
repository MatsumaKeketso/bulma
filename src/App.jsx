import React from "react";
import "./App.scss";
import { useEffect, useState } from "react";
import { MainService } from "./services/WhatweDoService";
import Navbar from "./components/NavBar";

import Section from "./components/Section";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import WhatWeDo from "./sections/WhatWedo";
import CaseStudies from "./sections/CaseStudies";
import Brands from "./sections/Brands";
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

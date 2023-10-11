import React from "react";
import "./App.scss";
import Navbar from "./components/NavBar";

import Section from "./components/Section";
import Hero from "./sections/Hero";
import WhatWeDo from "./sections/WhatWedo";
import CaseStudies from "./sections/CaseStudies";
import Brands from "./sections/Brands";
import Footer from "./sections/Footer";
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

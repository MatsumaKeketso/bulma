import React, { useEffect, useState } from "react";
import "./style.scss";
import Container from "../Container";
import HeadingTag from "../HeadingTag";
import Section from "../Section";
import CaseStudiesCard from "../CaseStudiesCard";
import { MainService } from "../../services/WhatweDoService";

function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  useEffect(() => {
    // Get case studies
    MainService.getCaseStudies()
      .then((studies) => {
        setCaseStudies(studies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Container>
        <Section>
          <HeadingTag label="Case Studies" />
          <div className="cards">
            {caseStudies.map((study) => (
              <CaseStudiesCard
                image={study.imageUrl}
                text={study.description}
                title={study.title}
                key={study.title}
              />
            ))}
          </div>
        </Section>
      </Container>
    </div>
  );
}

export default CaseStudies;

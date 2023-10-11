import React, { useEffect, useState } from "react";
import "./style.scss";
import Container from "../../components/Container";
import Section from "../../components/Section";
import HeadingTag from "../../components/HeadingTag";
import CaseStudiesCard from "../../components/CaseStudiesCard";
import { MainService } from "../../services/WhatWeDoService";

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

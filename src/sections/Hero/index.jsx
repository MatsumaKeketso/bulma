import React from "react";
import "./style.scss";
import Container from "../../components/Container";
import { Typography } from "../../components/Typography";
import Button from "../../components/Button";

function Hero() {
  return (
    <div className="hero">
      <Container>
        <div className="hero-content">
          <div>
            <Typography.Heading variant="is-1" color="white">
              Live with Confidence
            </Typography.Heading>
            <Typography.Body color="white">
              José Mourinho brings confidence to pan-African Sanlam campaign.
            </Typography.Body>
            <Button>View project</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;

import React from "react";
import "./style.scss";

import { ReactComponent as WebDevIcon } from "../../assets/images/icons/Web_Dev_Icon.svg";
import { ReactComponent as AppDevIcon } from "../../assets/images/icons/App Dev Icon.svg";
import { ReactComponent as UXDevIcon } from "../../assets/images/icons/UX Icon.svg";
import { ReactComponent as BlockchainIcon } from "../../assets/images/icons/Blockhain.svg";
import Container from "../../components/Container";
import Section from "../../components/Section";
import HeadingTag from "../../components/HeadingTag";
import { Typography } from "../../components/Typography";
import WhatWeDoCard from "../../components/WhatWeDoCard";

const Services = [
  {
    icon: <WebDevIcon />,
    title: "Web development",
    text: "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.",
  },
  {
    icon: <UXDevIcon />,
    title: "User experience & design",
    text: "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.",
  },
  {
    icon: <AppDevIcon />,
    title: "Mobile app development",
    text: "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.",
  },
  {
    icon: <BlockchainIcon />,
    title: "Blockchain solutions",
    text: "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.",
  },
];
function WhatWeDo() {
  return (
    <div className="section-padding">
      <Container>
        <Section>
          <HeadingTag label={"What we do"} />
          <Typography.Heading>
            We offer a complete range of bespoke design and development services
            to help you turn your ideas into digital masterpieces
          </Typography.Heading>
          <div className="services--main">
            {Services.map((service) => (
              <WhatWeDoCard
                key={service.title}
                icon={service.icon}
                heading={service.title}
                text={service.text}
              ></WhatWeDoCard>
            ))}
          </div>
        </Section>
      </Container>
    </div>
  );
}

export default WhatWeDo;

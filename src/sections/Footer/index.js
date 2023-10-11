import React from "react";
import "./style.scss";
import Container from "../../components/Container";
import HeadingTag from "../../components/HeadingTag";
import { Typography } from "../../components/Typography";

const Footer = () => {
  const links = [
    "Terms of service",
    "Facebook",
    "Github",
    "Youtube",
    "Explore open jobs",
    "Privacy policy",
    "Instagram",
    "Linkedin",
    "Behance",
    "",
    "Impressum",
    "Twitter",
    "Teams",
    "Dribbble",
    "©2000—2023 Company Name",
  ];
  return (
    <div className="footer--main">
      <Container>
        <div className="content">
          <HeadingTag label="Contact us" color={"white"} />
          <div className="contact-us">
            <Typography.Heading variant="is-2" color="white">
              Have a project in mind? Let's make it happen
            </Typography.Heading>
            {/* Address */}
            <Typography.Body color="white">
              22 Street Name, Suburb, 8000, <br />
              Cape Town, South Africa <br />
              +27 21 431 0001 <br />
              {/* Email */}
              <Typography.Link color="white">
                enquirie@website.co.za
              </Typography.Link>
            </Typography.Body>
          </div>
          <div class="links">
            {links.map((link) => {
              return (
                <Typography.Body key={link} color="white">
                  {link}
                </Typography.Body>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

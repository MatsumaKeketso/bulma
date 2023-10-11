import React from "react";
import "./style.scss";
import HeadingTag from "../HeadingTag";
import { Typography } from "../Typography";
import Container from "../Container";
import Section from "../Section";
import { ReactComponent as VisaLogo } from "../../assets/images/brand-logos/visa-black.svg";
import { ReactComponent as TymeBankLogo } from "../../assets/images/brand-logos/tyme-bank-black.svg";
import { ReactComponent as DistelLogo } from "../../assets/images/brand-logos/distell-black 1.svg";
import { ReactComponent as SpotifyLogo } from "../../assets/images/brand-logos/spotify-black 1.svg";
import { ReactComponent as MicrosoftLogo } from "../../assets/images/brand-logos/microsoft-black 1.svg";
import { ReactComponent as EngenLogo } from "../../assets/images/brand-logos/engen-black 1.svg";
import { ReactComponent as NikeLogo } from "../../assets/images/brand-logos/nike-black 1.svg";
import { ReactComponent as WesgroLogo } from "../../assets/images/brand-logos/wesgrow-black 1.svg";
import { ReactComponent as MultichoiceLogo } from "../../assets/images/brand-logos/multichoice-black 1.svg";
import { ReactComponent as PnpLogo } from "../../assets/images/brand-logos/pnp-black 1.svg";
import { ReactComponent as LiquidLogo } from "../../assets/images/brand-logos/liquid.svg";
import { ReactComponent as TFGLogo } from "../../assets/images/brand-logos/tfg-black 1.svg";
import { ReactComponent as SanlamLogo } from "../../assets/images/brand-logos/sanlam-black 1.svg";
import { ReactComponent as SantamLogo } from "../../assets/images/brand-logos/santam-black 1.svg";
import { ReactComponent as BBCLogo } from "../../assets/images/brand-logos/bbc-black 1.svg";
const Brands = () => {
  return (
    <div>
      <Container>
        <Section>
          <HeadingTag label="You'll be in good company" />
          <Typography.Heading variant="is-1">
            Trusted by leading brands
          </Typography.Heading>
          <div className="brand-logos">
            <VisaLogo />
            <TymeBankLogo />
            <DistelLogo />
            <SpotifyLogo />
            <MicrosoftLogo />
            <EngenLogo />
            <NikeLogo />
            <WesgroLogo />
            <MultichoiceLogo />
            <PnpLogo />
            <LiquidLogo />
            <TFGLogo />
            <SanlamLogo />
            <SantamLogo />
            <BBCLogo />
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default Brands;

import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there! i'm Wathek, <br />I build things for the web.
        </SectionTitle>
        <SectionText>
          I've created this personal portfolio to showcase some of my work and
          skills, feel free to continue scrolling :).
        </SectionText>
        {/* <Button
          target="_blank"
          onClick={() => (window.location = "mailto:yourmail@gmail.com")}
        >
          Contact
        </Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;

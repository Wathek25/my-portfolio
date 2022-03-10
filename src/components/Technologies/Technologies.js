import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiBootstrap,
  DiJavascript,
  DiNodejsSmall,
  DiMongodb,
  DiMsqlServer,
} from "react-icons/di";
import { FiServer } from "react-icons/fi";
import {
  SiMicrosoftsqlserver,
  SiMaterialdesign,
  SiRedux,
} from "react-icons/si";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Front-end
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with:
            <br />
            <TiHtml5 size="2.2rem" />
            HTML5 <br />
            <TiCss3 size="2.2rem" />
            CSS3 <br />
            <DiBootstrap size="2.2rem" />
            Bootsrap5 <br />
            <SiMaterialdesign size="2rem" />
            Material UI <br />
            <DiJavascript size="2.2rem" />
            JavaScript <br />
            <DiReact size="2.2rem" />
            ReactJS <br />
            <SiRedux size="2.2rem" />
            Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FiServer size="2.8rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            <DiNodejsSmall size="2.2rem" /> NodeJS <br />
            <DiNodejsSmall size="2.2rem" /> ExpressJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with: <br />
            <DiMongodb size="2.2rem" />
            MongoDB <br />
            <SiMicrosoftsqlserver size="2.2rem" />
            Microsoft SQL Server
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

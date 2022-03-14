import React from "react";
import {
  AiFillBehanceCircle,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import { Section, SectionTitle } from "../../styles/GlobalComponents";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Section id="contact">
        <SectionTitle style={{ marginLeft: "-30px", marginTop: "-12px" }}>
          Contact
        </SectionTitle>
      </Section>
      <LinkList>
        <LinkColumn>
          <LinkTitle>PHONE</LinkTitle>
          <LinkItem>+216 54 427 262</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem>wathek.ghenimi1@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href="https://github.com/Wathek25">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            target="_blank"
            href="https://www.linkedin.com/in/wathek-ghenimi/"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            target="_blank"
            href="https://www.behance.net/wathekghen7a63"
          >
            <AiFillBehanceCircle size="3rem" />
          </SocialIcons>
          <SocialIcons
            target="_blank"
            href="https://www.instagram.com/wathekghenimi/"
          >
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

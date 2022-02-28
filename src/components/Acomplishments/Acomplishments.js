import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

// const data = [
//   {
//     title: "Full Stack JavaScript Bootcamp",
//     text: "https://learn.gomycode.co/graduation-report#certificate",
//   },
//   { title: "Google Garage", text: "https://google.com" },
// ];

const Acomplishments = () => (
  <Section id="certificates">
    <SectionTitle>Certificates</SectionTitle>
    <Boxes>
      {/* {data.map((card, index) => ( */}
      <Box>
        <BoxNum target="_blank">
          {" "}
          <a
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
            href="https://learn.gomycode.co/credentials/57d82893-4097-408b-9ed6-63e2f161a264/GYAOARMHSYYSCALOCEDEEEONI-CN-TC-O/00002439#certificate"
          >
            Full Stack JavaScript
          </a>
        </BoxNum>
        <BoxText>
          <a
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
            href="https://learn.gomycode.co/credentials/57d82893-4097-408b-9ed6-63e2f161a264/GYAOARMHSYYSCALOCEDEEEONI-CN-TC-O/00002439#certificate"
          >
            Link
            <hr />
          </a>
        </BoxText>
      </Box>
      <Box>
        <BoxNum>
          <a
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
            href="https://drive.google.com/file/d/1Yobj5ADTYgkkQ2PXV6U4mQMVVXTFRpgI/view?usp=sharing"
          >
            Google Digital Garage
          </a>
        </BoxNum>
        <BoxText>
          <a
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
            href="https://drive.google.com/file/d/1Yobj5ADTYgkkQ2PXV6U4mQMVVXTFRpgI/view?usp=sharing"
          >
            Link
            <hr />
          </a>
        </BoxText>
      </Box>
      {/* ))} */}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;

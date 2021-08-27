import React from 'react';
import { DiCodeBadge } from 'react-icons/di';
import { CgDesignmodo } from 'react-icons/cg';
import { SiAffinityphoto } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the web development field.
      From Back-end to Design.
    </SectionText>
    <List>
      <ListItem>
        <CgDesignmodo size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Vue.js, React, Bootstrap, HTML, CSS, JavaScript, GitHub, Angular.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodeBadge size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            PHP, JavaScript, and C#
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAffinityphoto size="2rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/>
            tools like Adobe Photoshop and Adobe Illustrator. 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

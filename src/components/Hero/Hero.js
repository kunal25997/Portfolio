import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        I'm a creative web developer dedicated to building highly proficient websites and provide the most robust services to my clients and customers.
      </SectionText>
      <Button onClick={() => window.location = "https://www.dropbox.com/s/uq8ggd2i0x9ked8/KunalSailor-Resume.pdf?dl=0"}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;
import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Talha!
        </SectionTitle>
        <SectionText>
          I am an ambitious front-end developer, trying to improve myself and
          write better code every single day.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

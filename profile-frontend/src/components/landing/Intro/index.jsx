
import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import heroImage from 'assets/illustrations/Header.png';
import { greeting, greetingDescription, linkedinUrl, githubUrl, KaggleUrl, cvLink, ResumeLink } from 'data/config';
import linkedinLogo from 'assets/illustrations/linkedin_logo.png';
import kagglewhite from 'assets/illustrations/kaggle_white.png';
import kaggledark from 'assets/illustrations/kaggle_white.png';
import githubLogo from 'assets/illustrations/github_logo.png';
import linkedinLogoWhite from 'assets/illustrations/linkedin_white.png';
import githubLogoWhite from 'assets/illustrations/github_white.png';

import { IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>{greeting}</h1>
          <h4>{greetingDescription}</h4>
          <div>
            <Button as={AnchorLink} href="#contact" className="hire-me">
              Hire me
            </Button>{'  '}
            <a href={ResumeLink} target="_blank" rel="noreferrer">
              <Button className="view-cv">View Resume</Button>
            </a>
          </div>
          <div className="social">
            {' '}
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              <img width="45" src={theme === 'light' ? linkedinLogo : linkedinLogoWhite} alt="Linkedin" />
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <img width="45" src={theme === 'light' ? githubLogo : githubLogoWhite} alt="GitHub" />
            </a>
            <a href={KaggleUrl} target="_blank" rel="noreferrer">
              <img width="65" height="40" src={theme === 'light' ? kaggledark : kagglewhite} alt="Kaggle" />
            </a>
          </div>
        </Details>
      </IntroWrapper>
    </div>
  );
};

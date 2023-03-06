import React from 'react';
import { Navbar } from './Navbar';
import { Container } from './styled/Container.styled';
import {
  Buttonlearn,
  FooterAttribution,
  Styledhero,
  StyledHeroimage,
  StyledIntrodropdownnav,
  Hstackclient,
  Styledclient,
  Attribution,
  AttributionA,
} from './styled/Introdropdown.styled';
import databiz from './images/client-databiz.svg';
import audiophile from './images/client-audiophile.svg';
import meet from './images/client-meet.svg';
import maker from './images/client-maker.svg';

export const IntroDropdownNav = () => {
  return (
    <Container>
      <StyledIntrodropdownnav>
        <Navbar/>
        <Styledhero>
          <h1>
            Make remote work
          </h1>
          <p id='desc'>
            Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.
          </p>
          <Buttonlearn>
            Learn more
          </Buttonlearn>
        </Styledhero>
        <Styledclient>
          <Hstackclient>
              <img src={databiz} alt='databiz' width={100} height={20} />
              <img src={audiophile} alt='audiophile' width={70} height={35} />
              <img src={meet} alt='meet' width={80} height={20} />
              <img src={maker} alt='maker' width={85} height={25} />
            </Hstackclient>
        </Styledclient>
        <StyledHeroimage/>
        <FooterAttribution>
          <footer>
            <Attribution>
              <AttributionA>
                <p>Challenge by<a href="https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Intro Dropdown Navigation.</a></p>
              </AttributionA>
              <AttributionA>
                <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
              </AttributionA>
            </Attribution>
          </footer>
        </FooterAttribution>
      </StyledIntrodropdownnav>
    </Container>
  )
}

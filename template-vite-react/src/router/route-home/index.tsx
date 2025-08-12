import {
  ReactElement,
  useState
} from 'react';
import styled, {
  keyframes
} from 'styled-components';

import logoReact from './logo-react.svg';
import logoVite from './logo-vite.svg';

const kfLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const ScRouteHome = styled.div`
  padding-top: 60px;
  text-align: center;
`;
const ScLogos = styled.div`
  a {
    display: inline-block;
  }
`;
const ScLogo = styled.img`
  padding: 1.5em;
  height: 6em;
  will-change: filter;
  transition: filter 300ms;
  
  &:hover {
    filter: drop-shadow(0 0 2em hsl(237 100% 70% / 67%));
  }
`;
const ScLogoReact = styled(ScLogo)`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${kfLogoSpin} infinite 17s linear;
  }
  
  &:hover {
    filter: drop-shadow(0 0 2em hsl(193 95% 68% / 67%));
  }
`;
const ScHeading = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
`;
const ScCard = styled.div`
  padding: 2em;
`;
const ScCounter = styled.button`
  padding: 0.6em 1.2em;
  background-color: hsl(0 0% 10%);
  border: 1px solid transparent;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.25s;
  
  &:hover {
    border-color: hsl(237 100% 70%);
  }
  
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  
  @media (prefers-color-scheme: light) {
    background-color: hsl(0 0% 98%);
  }
`;
const ScReadTheDocs = styled.p`
  color: hsl(0 0% 53%);
`;

export default function RouteHome(): ReactElement {
  const [stateCount, setStateCount] = useState(0);
  
  return <ScRouteHome>
    <ScLogos>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer"><ScLogo src={logoVite} alt="Vite logo" /></a>
      <a href="https://react.dev" target="_blank" rel="noreferrer"><ScLogoReact src={logoReact} alt="React logo" /></a>
    </ScLogos>
    <ScHeading>Vite + React</ScHeading>
    <ScCard>
      <ScCounter onClick={() => setStateCount(count => count + 1)}>Count = {stateCount}</ScCounter>
      <p>Edit <code>src/router/route-home/index.tsx</code> and save to test HMR</p>
    </ScCard>
    <ScReadTheDocs>Click on the Vite and React logos to learn more</ScReadTheDocs>
  </ScRouteHome>;
}

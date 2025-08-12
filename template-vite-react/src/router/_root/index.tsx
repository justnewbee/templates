import {
  ReactElement
} from 'react';
import styled from 'styled-components';

import ReactRouterLinkHijacker from '@kcuf/react-router-link-hijacker';

import Header from './header';
import Main from './main';

const ScRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default function Root(): ReactElement {
  return <ScRoot>
    <ReactRouterLinkHijacker />
    <Header />
    <Main />
  </ScRoot>;
}

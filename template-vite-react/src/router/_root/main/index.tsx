import {
  ReactElement
} from 'react';
import {
  Outlet
} from 'react-router';
import styled from 'styled-components';

const ScMain = styled.main`
  flex: 1;
  overflow: auto;
  box-sizing: border-box;
`;

export default function Main(): ReactElement {
  return <ScMain>
    {/* TODO ErrorBoundary Here Begin */}
    <Outlet />
    {/* TODO ErrorBoundary Here End */}
  </ScMain>;
}

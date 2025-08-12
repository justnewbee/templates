import {
  ReactElement
} from 'react';
import styled from 'styled-components';

const ScHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 60px;
`;

export default function Header(): ReactElement {
  return <ScHeader>
    <div>A Fake header</div>
    <div>
      <a href="/">Home</a>
      &nbsp;
      <a href="/setting">Setting</a>
      &nbsp;
      <a href="/not-found">404</a>
    </div>
    <div />
  </ScHeader>;
}

import {
  ReactElement
} from 'react';
import styled from 'styled-components';
import {
  useLocation
} from 'react-router';

interface IProps {
  backUrl?: string;
  backText?: string;
}

const ScError404 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  
  p {
    line-height: 2;
  }
`;

const Sc404 = styled.h1`
  position: relative;
  margin-top: 20vmin;
  font-family: 'Times New Roman', serif;
  font-size: 24vmin;
  text-align: center;
  text-shadow: 4px 4px 1px hsl(0 0% 20%);
  line-height: 28vmin;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background-image: linear-gradient(-45deg, hsl(0 0% 100%) 0%, hsl(0 0% 100%) 25%, transparent 25%, transparent 50%, hsl(0 0% 100%) 50%, hsl(0 0% 100%) 75%, transparent 75%, transparent 100%);
    background-size: 6px 6px;
  }
  
  &::after {
    content: attr(data-name);
    position: absolute;
    inset: -4px 6px 6px -2px;
    z-index: 2;
    color: hsl(0 0% 20%);
    text-shadow: 3px 3px hsl(0 0% 100%);
  }
`;

export default function Error404({
  backUrl,
  backText
}: IProps): ReactElement {
  const {
    pathname
  } = useLocation();
  
  return <ScError404>
    <Sc404 data-name="404">404</Sc404>
    <p>页面 <code>{pathname}</code> 不存在</p>
    {backUrl ? <p>
      <a href={backUrl}>{backText ?? '回到首页'}</a>
    </p> : null}
  </ScError404>;
}

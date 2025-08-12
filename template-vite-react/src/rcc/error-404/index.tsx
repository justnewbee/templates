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
  
  h1 {
    margin: 160px 0 0;
    font-size: 6em;
  }
  
  p {
    line-height: 2;
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
    <h1>404</h1>
    <p>页面 <code>{pathname}</code> 不存在</p>
    {backUrl ? <p>
      <a href={backUrl}>{backText ?? '回到首页'}</a>
    </p> : null}
  </ScError404>;
}

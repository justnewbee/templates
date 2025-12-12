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

const ScStoryTextShadowStripe = styled.div`
  --font-size-multiplier: 2;
  --text-color: hsl(0 0% 27%);
  --stripe-unit: calc(var(--font-size-multiplier) * 1px * sqrt(2));
  --stripe-color: hsl(0 0% 0%);
  --shadow-offset: -0.04em;
  
  margin-top: 20vmin;
  background: repeating-linear-gradient(45deg, var(--stripe-color) 0 var(--stripe-unit), hsl(0 0% 0% / 0%) 0 calc(2 * var(--stripe-unit))) text;
  color: transparent;
  font-family: 'Times New Roman', serif;
  font-size: 24vmin;
  text-shadow: var(--shadow-offset) var(--shadow-offset) var(--text-color);
  letter-spacing: 0.1em;
  
  .theme-dark & {
    --text-color: hsl(0 0% 100%);
    --stripe-color: hsl(0 0% 100% / 70%);
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
    <ScStoryTextShadowStripe data-name="404">404</ScStoryTextShadowStripe>
    <p>页面 <code>{pathname}</code> 不存在</p>
    {backUrl ? <p>
      <a href={backUrl}>{backText ?? '回到首页'}</a>
    </p> : null}
  </ScError404>;
}

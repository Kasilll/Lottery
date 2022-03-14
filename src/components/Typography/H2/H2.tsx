import styled from 'styled-components';

interface IH2 {
  color?: string;
  fontWeight?: number;
  marginLeft?: number;
  marginRight?: number;
  fontSize?: number;
}

const H2Styled = styled.h4<IH2>`
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '16px')};
  line-height: 22px;
  color: ${(props) => props.color || '#000'};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft}px`};
  ${(props) => props.marginLeft && `margin-right: ${props.marginRight}px`};
`;

const H2: React.FC<IH2> = (props) => {
  return <H2Styled {...props}>{props.children}</H2Styled>;
};

export default H2;

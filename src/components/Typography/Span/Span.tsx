import styled from 'styled-components';

interface ISpan {
  color?: string;
  fontWeight?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  lineHeight?: number;
  fontSize?: number;
}

const SpanStyled = styled.span<ISpan>`
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}px` : '16px')};
  ${(props) => props.marginTop && `margin-top: ${props.marginLeft}px`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginRight}px`};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft}px`};
  ${(props) => props.marginRight && `margin-right: ${props.marginRight}px`};
`;

const Span: React.FC<ISpan> = (props) => {
  return <SpanStyled {...props}>{props.children}</SpanStyled>;
};

export default Span;

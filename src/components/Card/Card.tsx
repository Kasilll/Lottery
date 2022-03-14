import React from 'react';
import styled from 'styled-components';

interface IStyledCard {
  width: number;
}

const StyledCard = styled.div<IStyledCard>`
  padding: 15px;
  width: ${(props) => props.width}px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

interface CardProps {
  width?: number;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ width = 200, children }) => {
  return <StyledCard width={width}>{children}</StyledCard>;
};

export default Card;

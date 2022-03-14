import React from 'react';
import styled from 'styled-components';

interface IButton {
  width: number;
  height: number;
}

const StyledButton = styled.button<IButton>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  color: #000;
  font-size: 14px;
  cursor: pointer;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.16);
`;

interface ButtonProps extends IButton {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, width, height, children }) => {
  return (
    <StyledButton onClick={onClick} width={width} height={height}>
      {children}
    </StyledButton>
  );
};

export default Button;

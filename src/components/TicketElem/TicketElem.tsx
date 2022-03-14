import React from 'react';
import styled from 'styled-components';

interface ITicketElem {
  isActive: boolean;
}

const StyledTicketElem = styled.div<ITicketElem>`
  width: ${(props) => (props.isActive ? `34px` : '40px')};
  height: ${(props) => (props.isActive ? `34px` : '40px')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #000;
  font-size: 14px;
  cursor: pointer;
  background: ${(props) => (props.isActive ? `#FFD205` : '#FFFFFF')};
  ${(props) => !props.isActive && 'border: 1px solid #DDDDDD;'};
`;

interface TicketElemProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TicketElem: React.FC<TicketElemProps> = ({ isActive, onClick, children }) => {
  return (
    <StyledTicketElem onClick={onClick} isActive={isActive}>
      {children}
    </StyledTicketElem>
  );
};

export default TicketElem;

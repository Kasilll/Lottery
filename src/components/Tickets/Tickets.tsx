import React from 'react';
import styled from 'styled-components';
import TicketElem from '../TicketElem';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export interface Ticket {
  isActive: boolean;
  id: number;
  value: number;
}

interface TicketProps {
  data: Ticket[];
  onClickElem: (clickTicket: Ticket) => void;
}

const Tickets: React.FC<TicketProps> = ({ data, onClickElem }) => {
  return (
    <Container>
      {data.map((ticket) => {
        return (
          <TicketElem onClick={() => onClickElem(ticket)} isActive={ticket.isActive}>
            {ticket.value}
          </TicketElem>
        );
      })}
    </Container>
  );
};

export default Tickets;

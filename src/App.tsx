import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Ticket } from './components/Tickets/Tickets';
import Tickets from './components/Tickets';
import Button from './components/Button';
import Card from './components/Card';
import H2 from './components/Typography/H2';
import Span from './components/Typography/Span';
import MagicIcon from './assets/icon/Magic';
import { rnd } from './utils/function';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getResultAction } from './store/tickets';
import { Lottery } from './utils/variables';

const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(90deg, #f598a8, #f6edb2);
`;

const StyledMagicIcon = styled.div`
  cursor: pointer;
`;

const StyledDescriptionBlock = styled.div`
  margin: 10px 0;
`;

const StyledButtonBlock = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: center;
`;

const StyledHeaderTicket = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const handleClickTicket = (
  clickTicket: Ticket,
  stateTicket: Ticket[],
  setStateTicket: React.Dispatch<React.SetStateAction<TicketsState | null>>,
  maxCount: number,
  count: number,
) => {
  if (count < maxCount || clickTicket.isActive) {
    const res = stateTicket.map((ticket) => {
      if (ticket.id === clickTicket.id) {
        return {
          ...ticket,
          isActive: !ticket.isActive,
        };
      }
      return ticket;
    });
    setStateTicket({
      maxCount,
      count: clickTicket.isActive ? count - 1 : count + 1,
      data: res,
    });
    return;
  }
  alert('вы уже выбрали максимальное кол-во элементов');
};

interface TicketsState {
  data: Ticket[];
  maxCount: number;
  count: number;
}

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const ticketsResult = useAppSelector((state) => state.tickets.ticketsResult);
  const [ticketsOneState, setTicketsOneState] = useState<TicketsState | null>(null);
  const [ticketsTwoState, setTicketsTwoState] = useState<TicketsState | null>(null);

  useEffect(() => {
    if (ticketsResult) {
      alert(ticketsResult.isTicketWon ? 'вы выиграли!!!' : 'вы проиграли');
    }
  }, [ticketsResult]);

  useEffect(() => {
    const randomValuesTicketsOne = rnd(19, Lottery.maxValue);
    const randomValuesTicketsTwo = rnd(2, Lottery.maxValue);
    const randomTicketOne = Array(19)
      .fill('')
      .map((_, index) => {
        return {
          isActive: false,
          id: index,
          value: randomValuesTicketsOne[index],
        };
      });
    const randomTicketTwo = Array(2)
      .fill('')
      .map((_, index) => {
        return {
          isActive: false,
          id: index,
          value: randomValuesTicketsTwo[index],
        };
      });

    setTicketsOneState({
      maxCount: Lottery.maxCountFirstField,
      count: 0,
      data: randomTicketOne,
    });

    setTicketsTwoState({
      maxCount: Lottery.maxCountSecondField,
      count: 0,
      data: randomTicketTwo,
    });
  }, []);

  const handleClickOneTicket = (clickTicket: Ticket) => {
    if (ticketsOneState) {
      handleClickTicket(
        clickTicket,
        ticketsOneState.data,
        setTicketsOneState,
        ticketsOneState.maxCount,
        ticketsOneState.count,
      );
    }
  };

  const handleClickTwoTicket = (clickTicket: Ticket) => {
    if (ticketsTwoState) {
      handleClickTicket(
        clickTicket,
        ticketsTwoState.data,
        setTicketsTwoState,
        ticketsTwoState.maxCount,
        ticketsTwoState.count,
      );
    }
  };

  const handleRandomGenerateTickets = () => {
    const generateRandomIndexTicketsOne = rnd(Lottery.maxCountFirstField, 19);
    const generateRandomIndexTicketsTwo = rnd(Lottery.maxCountSecondField, 2);

    const resTicketsOne = ticketsOneState?.data.map((ticket, index) => {
      return {
        ...ticket,
        isActive: generateRandomIndexTicketsOne.includes(index + 1),
      };
    });

    const resTicketsTwo = ticketsTwoState?.data.map((ticket, index) => {
      return {
        ...ticket,
        isActive: generateRandomIndexTicketsTwo.includes(index + 1),
      };
    });

    if (resTicketsOne && resTicketsTwo) {
      setTicketsOneState({
        count: Lottery.maxCountFirstField,
        maxCount: Lottery.maxCountFirstField,
        data: resTicketsOne,
      });
      setTicketsTwoState({
        count: Lottery.maxCountSecondField,
        maxCount: Lottery.maxCountFirstField,
        data: resTicketsTwo,
      });
    }
  };

  return (
    <ContainerPage>
      <Card width={300}>
        <StyledHeaderTicket>
          <H2 color="#000">Билет 1</H2>
          <StyledMagicIcon onClick={handleRandomGenerateTickets}>
            <MagicIcon />
          </StyledMagicIcon>
        </StyledHeaderTicket>
        <StyledDescriptionBlock>
          <Span fontWeight={600}>Поле 1</Span>
          <Span marginLeft={8} fontWeight={400}>
            Отметьте 8 чисел.
          </Span>
        </StyledDescriptionBlock>
        {ticketsOneState && (
          <Tickets onClickElem={handleClickOneTicket} data={ticketsOneState.data} />
        )}
        <StyledDescriptionBlock>
          <Span fontWeight={600}>Поле 2</Span>
          <Span marginLeft={8} fontWeight={400}>
            Отметьте 1 число.
          </Span>
        </StyledDescriptionBlock>
        {ticketsTwoState && (
          <Tickets onClickElem={handleClickTwoTicket} data={ticketsTwoState.data} />
        )}
        <StyledButtonBlock>
          <Button
            width={178}
            height={43}
            onClick={() => {
              if (ticketsOneState?.count === 8 && ticketsTwoState?.count === 1) {
                const res = {
                  selectedNumber: {
                    firstField: ticketsOneState?.data.reduce((acc: number[], ticket) => {
                      if (ticket.isActive) {
                        return [...acc, ticket.value];
                      }
                      return acc;
                    }, []),
                    secondField: ticketsTwoState?.data.reduce((acc: number[], ticket) => {
                      if (ticket.isActive) {
                        return [...acc, ticket.value];
                      }
                      return acc;
                    }, []),
                  },
                };
                dispatch(getResultAction(res));
                return;
              }
              alert('нужно заполнить в первом поле 8 значений и 1 во втором');
            }}
          >
            Показать результат
          </Button>
        </StyledButtonBlock>
      </Card>
    </ContainerPage>
  );
};

export default App;

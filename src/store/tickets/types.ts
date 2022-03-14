export interface TicketsAction {
  selectedNumber: {
    firstField: number[];
    secondField: number[];
  };
}

export interface TicketsResult {
  selectedNumber: {
    firstField: number[];
    secondField: number[];
  };
  isTicketWon: boolean;
}

export interface TicketsState {
  loading: boolean;
  error: string;
  ticketsResult: TicketsResult | null;
}

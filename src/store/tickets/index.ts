import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TicketsAction, TicketsResult, TicketsState } from './types';

const initialState = {
  loading: false,
  error: '',
  ticketsResult: null,
} as TicketsState;

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    getResultState(state, action: PayloadAction<TicketsResult>) {
      state.ticketsResult = action.payload;
    },
  },
});

export const getResultAction = createAction<TicketsAction>('tickets/getResult');
export const { getResultState } = ticketsSlice.actions;

export default ticketsSlice.reducer;

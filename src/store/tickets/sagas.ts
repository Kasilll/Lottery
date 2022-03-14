import { PayloadAction } from '@reduxjs/toolkit';
import { put, StrictEffect, takeLatest } from 'redux-saga/effects';
import { postTicketsService } from '../../services/tickets';
import { handleIsWon } from '../../utils/function';
import { Lottery } from '../../utils/variables';
import { getResultAction, getResultState } from './index';
import { TicketsAction } from './types';

function* handleGetResult({ payload }: PayloadAction<TicketsAction>) {
  try {
    const isWon = handleIsWon(
      payload.selectedNumber.firstField,
      payload.selectedNumber.secondField,
      Lottery.maxValue,
    );
    // @ts-ignore
    const res = yield postTicketsService({
      selectedNumber: {
        firstField: payload.selectedNumber.firstField,
        secondField: payload.selectedNumber.secondField,
      },
      isTicketWon: isWon,
    });
    console.log(res);
    yield put(getResultState(res));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetResult(): Generator<StrictEffect> {
  yield takeLatest(getResultAction.type, handleGetResult);
}

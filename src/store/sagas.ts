import { Saga } from '@redux-saga/types';
import { all, fork } from 'redux-saga/effects';
import * as ticketsSagas from './tickets/sagas';

function* sagas(): Generator<unknown, any, unknown> {
  const watchers = Object.values({
    ...ticketsSagas,
  }) as Saga[];
  yield all(watchers.map((watcher) => fork(watcher)));
}

export default sagas;

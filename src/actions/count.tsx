// import { INCREMENT, DECREMENT } from '../constants/count';

export interface IINCREMENT {
  readonly type: 'INCREMENT';
}

export interface IDECREMENT {
  readonly type: 'DECREMENT';
}

export type countAction = IINCREMENT | IDECREMENT;

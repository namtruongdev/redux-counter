import { combineReducers } from 'redux';

import countReducer from './count';

const reducer = combineReducers({
  count: countReducer,
});
export type AppState = ReturnType<typeof reducer>;
export default reducer;

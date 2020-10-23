import { countAction } from '../actions/count';

interface countState {
  count: number;
}

const initCountState: countState = {
  count: 0,
};

const countReducer = (
  state: countState = initCountState,
  action: countAction
) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'DECREMENT':
      if (state.count === 0) return state;
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default countReducer;

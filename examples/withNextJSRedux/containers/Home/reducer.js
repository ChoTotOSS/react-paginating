import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from './constants';

const initState = {
  fetching: false,
  total: 0,
  data: []
};

export default function home(state = initState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        fetching: true
      };
    }
    case FETCH_DATA_SUCCESS: {
      return {
        ...state
      };
    }
    case FETCH_DATA_FAIL: {
      return {
        ...state,
        fetching: false
      };
    }
    default:
      return state;
  }
}

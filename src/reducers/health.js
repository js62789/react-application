import { Types } from '../actions';

const defaultState = {
  isLoading: false,
  isHealthy: false
};

export default function health(state = defaultState, action) {
  switch (action.type) {
    case Types.HEALTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.HEALTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isHealthy: action.payload.healthy
      };
    case Types.HEALTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isHealthy: false,
      };
    default:
      break;
  }
  return state;
}

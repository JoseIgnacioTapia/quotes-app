import { TYPES } from '../actions/useHttpActions';

// export const defaultHttpState = {
//   status: startWithPending ? 'pending' : null,
//   status: null,
//   data: null,
//   error: null,
// };

export function httpReducer(state, action) {
  if (action.type === TYPES.SEND) {
    return {
      data: null,
      error: null,
      status: 'pending',
    };
  }

  if (action.type === TYPES.SUCCESS) {
    return {
      data: action.responseData,
      error: null,
      status: 'completed',
    };
  }

  if (action.type === TYPES.ERROR) {
    return {
      data: null,
      error: action.errorMessage,
      status: 'completed',
    };
  }

  return state;
}

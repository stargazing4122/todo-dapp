import { types } from '../types/types';

const initialState = {
  loading: false,
}
const uiReducer = ( state=initialState, action) => {
  switch (action.type) {
    case types.uiSetLoading:
      return {
        loading: true,
      }
    case types.uiRemoveLoading:
      return {
        loading: false,
      }
  
    default:
      return state;
  }
}

export default uiReducer
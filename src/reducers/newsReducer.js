import { FETCH_NEWS, SELECTED_NEWS } from '../actions/types';
const initialState = {
  news: [],
  selectedNews: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_NEWS:
      return {
        ...state,
        news: payload,
        selectedNews: null
      };
    case SELECTED_NEWS:
      return {
        ...state,
        selectedNews: payload
      };
    default:
      return state;
  }
};

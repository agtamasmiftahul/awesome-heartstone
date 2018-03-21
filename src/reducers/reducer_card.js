import { GET_CARD } from '../actions/types';

export default function(state=[], action) {

  switch (action.type) {
    case GET_CARD:
      return action.payload;

    default:
      return state;
  }

}

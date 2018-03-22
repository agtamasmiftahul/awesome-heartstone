import { GET_CARD_LIST } from '../actions/types'

export default function(state=[], action) {

  switch (action.type) {
    case GET_CARD_LIST:
      return action.payload

    default:
      return state
  }

}

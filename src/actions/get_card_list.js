import { GET_CARD_LIST } from './types'
import axios from 'axios'

export default function getCardList() {
  return dispatch => {
      axios.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/Classic`, {
        headers: {
          'X-Mashape-Key': 'lN2bpG1T3RmshWn88IrodpWtsa0Qp1GGyGsjsnNEVMi5LyyOG7',
          'Accept': 'application/json'
        }
      })
        .then(response => {
          console.log(response.data)
          dispatch(getCardListAsync(response.data))
        })
        .catch(error => {
          throw(error)
        });
  }
}

function getCardListAsync(heroes){
  return {
    type: GET_CARD_LIST,
    payload: heroes
  };
}

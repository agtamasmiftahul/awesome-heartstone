import { GET_CARD } from './types'
import axios from 'axios'

export default function getCardListByName(name) {
  return dispatch => {
      axios.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/${name}`, {
        headers: {
          'X-Mashape-Key': 'lN2bpG1T3RmshWn88IrodpWtsa0Qp1GGyGsjsnNEVMi5LyyOG7',
          'Accept': 'application/json'
        }
      })
        .then(response => {
          console.log(response.data)
          dispatch(getCardListByNameAsync(response.data))
        })
        .catch(error => {
          throw(error)
        });
  }
}

function getCardListByNameAsync(hero){
  return {
    type: GET_CARD,
    payload: hero
  };
}

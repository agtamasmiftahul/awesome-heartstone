import { combineReducers } from 'redux'
import CardListReducer from './reducer_card_list'
import CardReducer from './reducer_card'

const rootReducer = combineReducers({
  heroes: CardListReducer,
  hero: CardReducer
});

export default rootReducer

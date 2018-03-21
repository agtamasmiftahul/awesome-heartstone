import { combineReducers } from 'redux';
import CardListReducer from './reducer_card_list';

const rootReducer = combineReducers({
  heroes: CardListReducer
});

export default rootReducer;

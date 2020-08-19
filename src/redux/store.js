import { createStore } from 'redux';
import foodItemReducer from './addItem';

const store = createStore(foodItemReducer);

export default store;

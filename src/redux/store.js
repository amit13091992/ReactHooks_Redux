import { createStore } from 'redux';
import foodItemReducer from './addItemReducer';

const store = createStore(foodItemReducer);

export default store;

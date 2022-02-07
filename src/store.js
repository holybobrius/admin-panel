import { createStore } from 'redux'
import pagesReducer from './reducers/pagesReducer'

const store = createStore(pagesReducer);

export default store;
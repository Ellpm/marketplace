import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers'
import createSagaMiddleware from 'redux-saga'

import {rootSaga} from '../sagas'

const initalState = {}
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, initalState, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  localStorage.setItem("REDUX_GETDRINKS", JSON.stringify(store.getState()))
})

// Dev only !!!!!
window.store = store

export default store

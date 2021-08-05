import { createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk";
import appReducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import { runTimer } from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  appReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(runTimer)

export default store;
import { takeEvery, takeLatest } from 'redux-saga/effects'
import { LOAD_ALL_COUNTRIES, COUNTRIES_API } from './constants'
import { abstractGetDataWorker } from '../../../RootSaga'

export function* sagaCountriesWorker() {
  yield takeLatest(LOAD_ALL_COUNTRIES, getCountriesList)
}

function* getCountriesList() {
  yield abstractGetDataWorker(COUNTRIES_API, LOAD_ALL_COUNTRIES)
}

import { takeEvery } from 'redux-saga/effects'
import { LOAD_ALL_BRANDS, BRANDS_API } from './constants'
import { abstractGetDataWorker } from '../../../RootSaga'

export function* sagaBrandsWorker() {
  yield takeEvery(LOAD_ALL_BRANDS, getBrandsList)
}

function* getBrandsList() {
  yield abstractGetDataWorker(BRANDS_API, LOAD_ALL_BRANDS)
}

import { takeEvery } from 'redux-saga/effects'
import { CREATE_PROMO, LOAD_ALL_PROMOCODES } from './constants'
import { SERVER_ADDR } from '../../constants'
import { abstractGetDataWorker } from '../../RootSaga'

export function* sagaCreatePromoWorker() {
  yield takeEvery(CREATE_PROMO, createPromo)
}

function* createPromo({ payload }) {
  const uri = SERVER_ADDR + 'api/promocodes'
  yield abstractGetDataWorker(uri, CREATE_PROMO, true, payload)
  //yield console.log("SAGA CREATE PROMO", payload)
}

export function* sagaFetchPromoWorker() {
  yield takeEvery(LOAD_ALL_PROMOCODES, fetchPromo)
}

function* fetchPromo() {
  const uri = SERVER_ADDR + 'api/promocodes'
  yield abstractGetDataWorker(uri, LOAD_ALL_PROMOCODES)
}

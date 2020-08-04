import { takeEvery } from 'redux-saga/effects'
import { abstractGetDataWorker } from '../../../RootSaga'
import { GET_LLEGAL_INFO, LLEGAL_API, UPDATE_LLEGAL_DATA_BY_KEY } from '../constants'

export function* sagaGetLlegalDataWorker() {
  yield takeEvery(GET_LLEGAL_INFO, getLlegalData)
}

function* getLlegalData() {
  const uri = LLEGAL_API
  yield abstractGetDataWorker(uri, GET_LLEGAL_INFO)
}


export function* sagaUpdateDataWorker() {
  yield takeEvery(UPDATE_LLEGAL_DATA_BY_KEY, updateLlegalData)
}

function* updateLlegalData({ payload }) {
  const uri = LLEGAL_API + '/' + payload.keyname
  yield abstractGetDataWorker(uri, UPDATE_LLEGAL_DATA_BY_KEY, true, payload)
}

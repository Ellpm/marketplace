import { takeEvery } from 'redux-saga/effects'
import { LOAD_ALL_VOLUMES, VOLUMES_API } from './constants'
import { abstractGetDataWorker } from '../../../RootSaga'

export function* sagaVolumesWorker() {
  yield takeEvery(LOAD_ALL_VOLUMES, getVolumesList)
}

function* getVolumesList() {
  yield abstractGetDataWorker(VOLUMES_API, LOAD_ALL_VOLUMES)
}

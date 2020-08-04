import { takeEvery } from 'redux-saga/effects'
import { LOAD_ALL_PACKAGES, PACKAGES_API } from './constants'
import { abstractGetDataWorker } from '../../../RootSaga'

export function* sagaPackagesWorker() {
  yield takeEvery(LOAD_ALL_PACKAGES, getPackagesList)
}

function* getPackagesList() {
  yield abstractGetDataWorker(PACKAGES_API, LOAD_ALL_PACKAGES)
}

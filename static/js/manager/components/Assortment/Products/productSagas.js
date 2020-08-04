import { takeEvery } from 'redux-saga/effects'
import { abstractGetDataWorker } from '../../../RootSaga'
import { GET_PRODUCT_LIST_BY_CATEGORY__ADM, PRODUCTS_API } from './constans'

export function* sagaProductWorker() {
  yield takeEvery(GET_PRODUCT_LIST_BY_CATEGORY__ADM, getProductList)
}

function* getProductList({ payload }) {
  const uri = PRODUCTS_API + '/' + payload
  yield abstractGetDataWorker(uri, GET_PRODUCT_LIST_BY_CATEGORY__ADM)
}

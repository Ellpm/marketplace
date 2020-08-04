import { takeEvery, call, put } from 'redux-saga/effects'
import { SERVER_ADDR, START, SUCCESS, FAIL } from '../../../constants'
import { LOAD_NEW_PRICE_LIST } from './constants'

export function* sagaUpdatePricesWorker() {
  yield takeEvery(LOAD_NEW_PRICE_LIST, updatePrice)
}

function* updatePrice({ payload }) {
  yield put({ type: LOAD_NEW_PRICE_LIST + START })
  const uri = SERVER_ADDR + 'api/adm/products/updatePrice'
  const fileData = new FormData()
  fileData.append("mbcPrice", payload)
  try {
    payload = yield call(uploadFile, uri, fileData)
    console.log("SAGA", payload.status)
    yield put({ type: LOAD_NEW_PRICE_LIST + SUCCESS, payload })
  } catch(e) {
    yield put({ type: LOAD_NEW_PRICE_LIST + FAIL })
  }
}


async function uploadFile(uri, fileData) {
  const resp = await fetch(uri, {
    method: 'POST',
    body: fileData
  })
  console.log("RESP", resp)
  return await resp
}

import { put, call, all } from 'redux-saga/effects'
import { START, SUCCESS, FAIL } from './constants'

import { sagaBrandsWorker } from './components/Assortment/Brands/brandSagas'
import { sagaCountriesWorker } from './components/Assortment/Countries/countrySagas'
import { sagaPackagesWorker } from './components/Assortment/Packages/packageSagas'
import { sagaVolumesWorker } from './components/Assortment/Volumes/volumeSagas'
import { sagaProductWorker } from './components/Assortment/Products/productSagas'
import { sagaUpdatePricesWorker } from './components/Assortment/UpdateData/updateDataSagas'
import { sagaCreatePromoWorker,
         sagaFetchPromoWorker } from './components/Promo/promoSagas'
import { sagaGetLlegalDataWorker,
         sagaUpdateDataWorker } from './components/Content/Llegal/llegalSagas'

export function* admRootSaga() {
  yield all([
    sagaUpdateDataWorker(),
    sagaGetLlegalDataWorker(),
    sagaCreatePromoWorker(),
    sagaFetchPromoWorker(),
    sagaProductWorker(),
    sagaBrandsWorker(),
    sagaCountriesWorker(),
    sagaPackagesWorker(),
    sagaVolumesWorker(),
    sagaUpdatePricesWorker(),
  ])
}


export function* abstractGetDataWorker(apiUri, ACTIONConst, isPost, data) {
  yield put({ type: ACTIONConst + START })
  try {
    let payload;
    if (isPost && data) {
        payload = yield call(updateData, apiUri, data)
    } else {
        payload = yield call(getApiData, apiUri)
    }
    yield put({ type: ACTIONConst + SUCCESS, payload })
  } catch(e) {
    yield put({ type: ACTIONConst + FAIL })
  }
}



async function getApiData(uri) {
  //console.log("URI", uri)
  const responce = await fetch(uri)
  return await responce.json()
}

async function updateData(uri, data) {
  const resp = await fetch(uri, {
    method: "POST",
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data)
  })
  return await resp.status
}

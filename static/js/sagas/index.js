import {takeEvery, all, put, take, call} from 'redux-saga/effects'
import {GET_PRODUCTS_BY_CATEGORY__API, FETCH_CATEGORIES_LIST__API,
  SERVER_ADDR, START, SUCCESS, FAIL, CATEGORIES_API, PRODUCTS_API, GET_ONE_SCU_BY_PRODUCTS__API,
  GET_PICKPOINT, PICKPOINTS_API, SUBCATEGORY_BY_COUNTRY_API, GET_PRODUCTS_BY_SUBCATEGORY__API,
  SUBCATEGORY_BY_TYPE_API, GET_PRODUCTS_BY_COLLECTION__API, COLLECTIONS_API, GET_PRODUCTS_BY_RECOMENDATION__API,
  RECOMENDATION_API, FETCH_TAGS_LIST__API, TAGS_API, GET_PRODUCT_BY_TAG_NAME, GET_DETAIL_TAG} from '../constans'
//import {showLoader} from '../AC'

import { admRootSaga } from '../manager/RootSaga'

export function* rootSaga() {
  yield all([
    admRootSaga(),
    getCategoriesListWorker(),
    sagaProductsWorker(),
    sagaOneProductWorker(),
    getPickpointsListWorker(),
    sagaProductsBySubCategoryWorker(),
    sagaProductsByCollectionWorker(),
    sagaProductsByRecomendationWorker(),
    sagaTagsWorker(),
    sagaProductsByTagName(),
    sagaOneTagInfoWorker()
  ])
}


export function* sagaProductsWorker() {
  yield takeEvery(GET_PRODUCTS_BY_CATEGORY__API, getProductsByCategoryWorker)
}

export function* sagaTagsWorker() {
  yield takeEvery(FETCH_TAGS_LIST__API, getTagsBuCategoryWorker)
}

export function* sagaOneTagInfoWorker() {
  yield takeEvery(GET_DETAIL_TAG, getOneTagInformationWorker)
}

export function* sagaProductsByTagName() {
  yield takeEvery(GET_PRODUCT_BY_TAG_NAME, getProductsByTagNameWorker)
}

export function* sagaOneProductWorker() {
  yield takeEvery(GET_ONE_SCU_BY_PRODUCTS__API, getOneProduct)
}

export function* sagaProductsByCollectionWorker() {
  yield takeEvery(GET_PRODUCTS_BY_COLLECTION__API, getProductsByCollectionWorker)
}

export function* sagaPickPointsWorker() {
  yield takeEvery(GET_PICKPOINT, getPickpointsListWorker)
}

function* sagaProductsBySubCategoryWorker() {
  yield takeEvery(GET_PRODUCTS_BY_SUBCATEGORY__API, getProductsBySubCategoryWorker)
}

function* sagaProductsByRecomendationWorker() {
  yield takeEvery(GET_PRODUCTS_BY_RECOMENDATION__API, getProductsByRecomengationWorker)
}



function* getOneTagInformationWorker({ payload }) {
  const uri = TAGS_API + '/taginfo/' + payload
  yield abstractGetDataWorker(uri, GET_DETAIL_TAG)
}


function* getProductsByTagNameWorker({ payload }) {
  const uri = PRODUCTS_API + '/byTag/' + payload.category + "/" + payload.tag
  console.log("PAYLOAD", payload, uri)
  yield abstractGetDataWorker(uri, GET_PRODUCT_BY_TAG_NAME)
}

function* getTagsBuCategoryWorker({ payload }) {
  const uri = TAGS_API + "/" + payload
  console.log("URI", uri)
  yield abstractGetDataWorker(uri, FETCH_TAGS_LIST__API)
}

function* getProductsByRecomengationWorker({ payload }) {
  const uri = RECOMENDATION_API + "/" + payload.category + "/" + payload.subcategory
  yield abstractGetDataWorker(uri, GET_PRODUCTS_BY_RECOMENDATION__API)
}


function* getProductsByCollectionWorker({ payload }) {
  const uri = COLLECTIONS_API + "/" + payload
  console.log("444444444", uri)
  yield abstractGetDataWorker(uri, GET_PRODUCTS_BY_COLLECTION__API)
}


function* getProductsBySubCategoryWorker({ payload }) {
  console.log(payload)
  let uri;
  switch (payload.type) {
    case "byCountry":
      uri = SUBCATEGORY_BY_COUNTRY_API + payload.category + "/" + payload.id
      break
    case "byType":
      uri = SUBCATEGORY_BY_TYPE_API + payload.id
      break
  }
  yield abstractGetDataWorker(uri, GET_PRODUCTS_BY_SUBCATEGORY__API)
}


function* getCategoriesListWorker() {
  yield abstractGetDataWorker(CATEGORIES_API, FETCH_CATEGORIES_LIST__API)
}

function* getPickpointsListWorker() {
  yield abstractGetDataWorker(PICKPOINTS_API, GET_PICKPOINT)
}

function* getProductsByCategoryWorker({ payload }) {
  console.log(payload)
  const uri = PRODUCTS_API + '/v01/' + payload
  yield abstractGetDataWorker(uri, GET_PRODUCTS_BY_CATEGORY__API)
}

export function* getOneProduct({ payload }) {
  console.log(payload)
  const uri = PRODUCTS_API + '/getProduct/' + payload
  yield abstractGetDataWorker(uri, GET_ONE_SCU_BY_PRODUCTS__API)
}


function* abstractGetDataWorker(apiUri, ACTIONConst) {
  yield put({ type: ACTIONConst + START })
  try {
    const payload = yield call(getApiData, apiUri)
    //console.log("ACTIONConst", ACTIONConst)
    yield put({ type: ACTIONConst + SUCCESS, payload })
  } catch(e) {
    yield put({ type: ACTIONConst + FAIL })
  }
}

async function getApiData(uri) {
  const responce = await fetch(uri)
  return await responce.json()
}

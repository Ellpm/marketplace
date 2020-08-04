import { GET_FULL_PRODUCT_LIST,
        GET_PRODUCT_LIST_BY_CATEGORY__ADM, UPDATE_PRODUCT_DATA } from './constans'

export function getFullProductsList() {
  return {
    type: GET_FULL_PRODUCT_LIST
  }
}

export function getPoductsByCategory(id) {
  return {
    type: GET_PRODUCT_LIST_BY_CATEGORY__ADM,
    payload: id
  }
}

export function updateProductById(data) {
  return {
    type: UPDATE_PRODUCT_DATA,
    payload: data
  }
}

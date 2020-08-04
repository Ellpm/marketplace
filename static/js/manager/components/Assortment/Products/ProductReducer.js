import {products} from '../../../fakeData/products'

import { START, SUCCESS, FAIL } from '../../../constants'
import { GET_FULL_PRODUCT_LIST, GET_PRODUCT_LIST_BY_CATEGORY__ADM } from './constans'

const ProductDefaultState = {
  loading: false,
  loaded: false,
  errors: null,
  entitys: []
}

export default (productState = ProductDefaultState, action) => {

  const { type, payload } = action

  switch (type) {
    case GET_FULL_PRODUCT_LIST:
      return { ...productState, entitys: products }

    case GET_PRODUCT_LIST_BY_CATEGORY__ADM + START:
      return { ...productState, loading: true }

    case GET_PRODUCT_LIST_BY_CATEGORY__ADM + SUCCESS:
      return { ...productState, loading: false, loaded: true, entitys: payload }

    case GET_PRODUCT_LIST_BY_CATEGORY__ADM + FAIL:
      return { ...productState, loading: false, errors: true }

    default:
      return productState
  }
}

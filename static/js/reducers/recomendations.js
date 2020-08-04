import {OrderedMap, Map, Record} from 'immutable'
import {arrToMap, mapToArr} from '../helpers/converters'

import { START, SUCCESS, FAIL, GET_PRODUCTS_BY_RECOMENDATION__API} from '../constans'


const ProductsDefaultState = {
  loading: false,
  loaded: false,
  errors: null,
  entitys: []
}

export default (productsState = ProductsDefaultState, action) => {

  const {type, json, payload} = action

  switch (type) {
    case GET_PRODUCTS_BY_RECOMENDATION__API + START:
      console.log(GET_PRODUCTS_BY_RECOMENDATION__API + START)
      return { ...productsState, loading: true }

    case GET_PRODUCTS_BY_RECOMENDATION__API + SUCCESS:
      console.log(GET_PRODUCTS_BY_RECOMENDATION__API + SUCCESS)
      return { ...productsState, loading: false, loaded: true, entitys: payload }

    case GET_PRODUCTS_BY_RECOMENDATION__API + FAIL:
      console.log(GET_PRODUCTS_BY_RECOMENDATION__API + FAIL)
      return { ...productsState, loading: false, errors: true }


    default:
      return productsState
  }

}

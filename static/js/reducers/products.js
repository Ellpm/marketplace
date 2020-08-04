import {OrderedMap, Map, Record} from 'immutable'
import {arrToMap, mapToArr} from '../helpers/converters'

import {GET_PRODUCTS_BY_CATEGORY, GET_PRODUCT_ITEM, GET_PRODUCTS_BY_SUBCATEGORY,
        START, SUCCESS, FAIL, GET_PRODUCTS_BY_COLLECTION, GET_PRODUCTS_BY_CATEGORY__API,
        GET_ONE_SCU_BY_PRODUCTS__API, GET_PRODUCTS_BY_SUBCATEGORY__API,
        GET_PRODUCTS_BY_COLLECTION__API, GET_PRODUCT_BY_TAG_NAME} from '../constans'


const ProductsDefaultState = {
  loading: false,
  loaded: false,
  errors: null,
  entitys: []
}

export default (productsState = ProductsDefaultState, action) => {

  const {type, json, payload} = action

  switch (type) {
    case GET_PRODUCTS_BY_CATEGORY__API + START:
      //console.log(GET_PRODUCTS_BY_CATEGORY__API + START)
      return { ...productsState, loading: true }

    case GET_PRODUCTS_BY_CATEGORY__API + SUCCESS:
      //console.log(GET_PRODUCTS_BY_CATEGORY__API + SUCCESS)
      return { ...productsState, loading: false, loaded: true, entitys: payload }

    case GET_PRODUCTS_BY_CATEGORY__API + FAIL:
      //console.log(GET_PRODUCTS_BY_CATEGORY__API + FAIL)
      return { ...productsState, loading: false, errors: true }

    case GET_ONE_SCU_BY_PRODUCTS__API + START:
      //console.log(GET_ONE_SCU_BY_PRODUCTS__API + START)
      return { ...productsState, loading: true }

    case GET_ONE_SCU_BY_PRODUCTS__API + SUCCESS:
      //console.log(GET_ONE_SCU_BY_PRODUCTS__API + SUCCESS, payload)
      return { ...productsState, loading: false, loaded: true, entitys: payload }

    case GET_ONE_SCU_BY_PRODUCTS__API + FAIL:
      //console.log(GET_ONE_SCU_BY_PRODUCTS__API + FAIL)
      return { ...productsState, loading: false, errors: true }

    case GET_PRODUCTS_BY_SUBCATEGORY__API + START:
      return { ...productsState, loading: true }

    case GET_PRODUCTS_BY_SUBCATEGORY__API + SUCCESS:
      return { ...productsState, loading: false, loaded: true, entitys: payload }

    case GET_PRODUCTS_BY_SUBCATEGORY__API + FAIL:
      return { ...productsState, loading: false, errors: true }

    case GET_PRODUCTS_BY_COLLECTION__API + START:
      //console.log(GET_PRODUCTS_BY_COLLECTION__API + START)
      return { ...productsState, loading: true }

    case GET_PRODUCTS_BY_COLLECTION__API + SUCCESS:
      return { ...productsState, loading: false, loaded: true, entitys: payload }

    case GET_PRODUCTS_BY_COLLECTION__API + FAIL:
      return { ...productsState, loading: false, errors: true }

    case GET_PRODUCT_BY_TAG_NAME + START:
        //console.log(GET_PRODUCTS_BY_COLLECTION__API + START)
      return { ...productsState, loading: true }

    case GET_PRODUCT_BY_TAG_NAME + SUCCESS:
      return { ...productsState, loading: false, loaded: true, entitys: payload }

    case GET_PRODUCT_BY_TAG_NAME + FAIL:
      return { ...productsState, loading: false, errors: true }


    default:
      return productsState
  }

}




//import {newProducts} from '../fakeData/newFakeProducts'

/*
//import {finalProducts} from '../fakeData/finalProduct'
import {last} from '../fakeData/lastFake'
//const products = arrToMap(newProducts)
const products = last

//console.log("last", last)

/*const sortByCategory = (arr, category) => {
  return arr.filter(item => {
    if (item.category_id == category) {
      return item
    }
  })
}*/

//const sortingProducts = (arr, row, sorted) => arr.filter( item => item[row] == sorted ? item : false )
//const oneProduct = (arr, productId) => arr.filter( item => item.scu_id == productId ? item : false )

//const getProdyctsByCollection = (arr, collectionId) => arr.filter( item => item.collection == collectionId ? item : false )


/*const productRecord = new Record({
  scu_id: undefined,
  scu_name: undefined,
  md_id: undefined,
  brand_name: undefined,
  category_id: undefined,
  country_name: undefined,
  mbc_id: undefined,
  pack_quantity: undefined,
  price_by_one: undefined,
  subcategory_id: undefined,
  subcategory_name: undefined,
})

const ReducerProductState = new Record({
  loading: false,
  loaded: false,
  entitys: arrToMap(products, productRecord),
  fail: false
})*/

/*const ReducerProductState = {
  loading: false,
  loaded: false,
  entitys: products
}

export default (productState = ReducerProductState, action) => {
  const {type, json, payload} = action

  switch(type) {
    case GET_PRODUCTS_BY_CATEGORY:
      //console.log("GET_PRODUCTS_BY_CATEGORY", productState)
      return { ...productState, entitys: sortingProducts(productState.entitys, "category_id", payload) }
    case GET_PRODUCT_ITEM:
      return { ...productState, entitys: sortingProducts(productState.entitys, "scu_id", payload) }
    case GET_PRODUCTS_BY_SUBCATEGORY:
      return { ...productState, entitys: sortingProducts(productState.entitys, "subcategory_id", payload) }
    case GET_PRODUCTS_BY_COLLECTION:
      return { ...productState, entitys: sortingProducts(productState.entitys, "collections", payload) }
    default:
      return productState
  }
}
*/

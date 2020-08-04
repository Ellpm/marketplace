import {GET_CART_FROM_LOCAL_STORAGE, ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART,
        GET_TOTAL_SUM_FROM_CART, GET_PRODUCTS_BY_CATEGORY, GET_PRODUCTS_BY_SUBCATEGORY,
        FILTER_PRODUCT_BY_TYPE, FILTER_PRODUCT_BY_BRAND, FILTER_PRODUCT_BY_VOLUME, FILTER_PRODUCT_BY_COUNTRY,
        FILTER_PRODUCT_BY_PACKAGE, GET_PRODUCT_ITEM, GET_FILTERS, GET_PRODUCTS_BY_COLLECTION,
        GET_PRODUCTS_BY_CATEGORY__API, GET_DETAIL_CATEGORY, GET_ONE_SCU_BY_PRODUCTS__API, GET_PICKPOINT,
       GET_PRODUCTS_BY_SUBCATEGORY__API, GET_PRODUCTS_BY_COLLECTION__API, GET_PRODUCTS_BY_RECOMENDATION__API,
     FETCH_TAGS_LIST__API, GET_PRODUCT_BY_TAG_NAME, GET_DETAIL_TAG} from '../constans'


export function getTagsByCategory(category) {
  return {
    type: FETCH_TAGS_LIST__API,
    payload: category
  }
}

export function getDetailTag(tagname) {
  return {
    type: GET_DETAIL_TAG,
    payload: tagname
  }
}

export function getProductsByTagName(category, tag) {
  return {
    type: GET_PRODUCT_BY_TAG_NAME,
    payload: { category, tag }
  }
}

export function getAllPickPoints() {
  return {
    type: GET_PICKPOINT
  }
}

export function getProductsByRecomendation(category, subcategory) {
  return {
    type: GET_PRODUCTS_BY_RECOMENDATION__API,
    payload: { category, subcategory }
  }
}

export function getProductsByCollection_api(name) {
  return {
    type: GET_PRODUCTS_BY_COLLECTION__API,
    payload: name
  }
}


export function getProductsBySubCategory_api(type, id, category) {
  return {
    type: GET_PRODUCTS_BY_SUBCATEGORY__API,
    payload: { type, id, category }
  }
}

export function getOneProduct(scuid) {
  return {
    type: GET_ONE_SCU_BY_PRODUCTS__API,
    payload: scuid
  }
}


export function getDetailCategory(catId) {
  return {
    type: GET_DETAIL_CATEGORY,
    payload: catId
  }
}


export function getProductsByCategory_api(catId) {
  return {
    type: GET_PRODUCTS_BY_CATEGORY__API,
    payload: catId
  }
}


export function getFilters() {
  return {
    type: GET_FILTERS
  }
}


export function getCartFromLocalStorage() {
  return {
    type: GET_CART_FROM_LOCAL_STORAGE
  }
}

export function addItemToCart(item) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item
  }
}

export function getTotalCardSumm() {
  return {
    type: GET_TOTAL_SUM_FROM_CART
  }
}

export function deleteItemFromCart(id) {
  return {
    type: DELETE_ITEM_FROM_CART,
    payload: id
  }
}

export function getProductsByCategory(categoryId) {
  return {
    type: GET_PRODUCTS_BY_CATEGORY,
    payload: categoryId
  }
}

export function getProductsBySubCategory(subcategoryId) {
  console.log("THIS ONE")
  return {
    type: GET_PRODUCTS_BY_SUBCATEGORY,
    payload: subcategoryId
  }
}

export function filterProductByType(selected) {
  return {
    type: FILTER_PRODUCT_BY_TYPE,
    payload: selected
  }
}

export function filterProductByBrand(selected) {
  return {
    type: FILTER_PRODUCT_BY_BRAND,
    payload: selected
  }
}

export function filterProductByVolume(selected) {
  return {
    type: FILTER_PRODUCT_BY_VOLUME,
    payload: selected
  }
}

export function filterProductByCountry(selected) {
  return {
    type: FILTER_PRODUCT_BY_COUNTRY,
    payload: selected
  }
}

export function filterProductByPackage(selected) {
  return {
    type: FILTER_PRODUCT_BY_PACKAGE,
    payload: selected
  }
}

export function getProductItem(id) {
  return {
    type: GET_PRODUCT_ITEM,
    payload: id
  }
}

export function getProductsByCollection(collectionId) {
  return {
    type: GET_PRODUCTS_BY_COLLECTION,
    payload: collectionId
  }
}

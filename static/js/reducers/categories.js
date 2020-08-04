import { FETCH_CATEGORIES_LIST__API, GET_DETAIL_CATEGORY, START, SUCCESS, FAIL } from '../constans'

const CategoriesDefaultState = {
  loading: false,
  loaded: false,
  errors: null,
  entitys: [],
  detail: []
}


export default (categoriesState = CategoriesDefaultState, action) => {
  const {type, json, payload} = action

  switch (type) {
    case FETCH_CATEGORIES_LIST__API + START:
      //console.log(FETCH_CATEGORIES_LIST__API + START)
      return { ...categoriesState, loading: true }

    case FETCH_CATEGORIES_LIST__API + SUCCESS:
      //console.log(FETCH_CATEGORIES_LIST__API + SUCCESS, payload)
      return { ...categoriesState, loading: false, loaded: true, entitys: payload }

    case FETCH_CATEGORIES_LIST__API + FAIL:
      //console.log(FETCH_CATEGORIES_LIST__API + FAIL)
      return { ...categoriesState, error: true, loading: false }

    default:
      return { ...categoriesState }
  }

}

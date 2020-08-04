import { START, SUCCESS, FAIL } from '../../../constants'
import { LOAD_NEW_PRICE_LIST } from './constants'

const updateDataDefaultState = {
  loading: false,
  loaded: false,
  errors: null,
  responce: null
}

export default (updateDataState = updateDataDefaultState, actions) => {

  const { type, payload } = actions

  switch (type) {
    case LOAD_NEW_PRICE_LIST + START:
      return { ...updateDataState, loading: true }

    case LOAD_NEW_PRICE_LIST + SUCCESS:
      return { ...updateDataState, loading: false, loaded: true, responce: payload }

    case LOAD_NEW_PRICE_LIST + FAIL:
      return { ...updateDataState, loading: false, errors: true }

    default:
      return updateDataState
  }

}

import { LOAD_ALL_BRANDS } from './constants'
import { START, SUCCESS, FAIL } from '../../../constants'

const BrandDefaultState = {
  loading: false,
  loaded: false,
  errors: null,
  entitys: []
}

export default (brandState = BrandDefaultState, action) => {

  const { type, payload } = action

  switch (type) {
    case LOAD_ALL_BRANDS + START:
      return { ...brandState, loading: true }
    case LOAD_ALL_BRANDS + SUCCESS:
      return { ...brandState, loading: false, loaded: true, entitys: payload }
    case LOAD_ALL_BRANDS + FAIL:
      return { ...brandState, loading: false, errors: true }

    default:
      return brandState

  }

}

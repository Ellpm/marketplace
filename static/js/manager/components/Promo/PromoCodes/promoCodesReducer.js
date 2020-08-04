import { LOAD_ALL_PROMOCODES } from '../constants'
import { START, SUCCESS, FAIL } from '../../../constants'

const promoCodesReducerDefault = {
  loading: false,
  loaded: false,
  errors: null,
  entitys: []
}
 
export default (promoCodesState = promoCodesReducerDefault, actions ) => {

  const { type, payload } = actions

  switch (type) {
    case LOAD_ALL_PROMOCODES + START:
      return { ...promoCodesState, loading: true }

    case LOAD_ALL_PROMOCODES + SUCCESS:
      return { ...promoCodesState, loading: false, loaded: true, entitys: payload }

    case LOAD_ALL_PROMOCODES + FAIL:
      return { ...promoCodesState, loading: false, errors: true }

    default:
      return promoCodesState
  }

}

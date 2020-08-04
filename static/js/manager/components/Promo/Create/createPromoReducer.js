import { CREATE_PROMO } from '../constants'
import { START, SUCCESS, FAIL } from '../../../constants'

const createPromoDefaultState = {
  loading: false,
  loaded: false,
  errors: null,
  responce: null
}

export default (createPromoState = createPromoDefaultState, actions) => {

  const { type, payload } = actions

  switch (type) {
    case CREATE_PROMO + START:
      return { ...createPromoState, loading: true }

    case CREATE_PROMO + SUCCESS:
      return { ...createPromoState, loading: false, loaded: true, responce: payload }

    case CREATE_PROMO + FAIL:
      return { ...createPromoState, loading: false, errors: true }

    default:
      return createPromoState
  }
}

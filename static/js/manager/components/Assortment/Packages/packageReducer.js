import { START, SUCCESS, FAIL } from '../../../constants'
import { LOAD_ALL_PACKAGES } from './constants'

const packageDefaultState = {
  loading: false,
  loaded: false,
  errors: null,
  entitys: []
}

export default (packageState = packageDefaultState, action) => {

  const { type, payload } = action

  switch (type) {
    case LOAD_ALL_PACKAGES + START:
      return { ...packageState, loading: true }
    case LOAD_ALL_PACKAGES + SUCCESS:
      return { ...packageState, loading: false, loaded: true, entitys: payload }
    case LOAD_ALL_PACKAGES + FAIL:
      return { ...packageState, loading: false, errors: true }

    default:
      return packageState
  }
}

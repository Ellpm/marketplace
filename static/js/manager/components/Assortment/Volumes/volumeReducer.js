import { START, SUCCESS, FAIL } from '../../../constants'
import { LOAD_ALL_VOLUMES } from './constants'

const volumeDefaultState = {
  loading: false,
  loaded: false,
  errors: null,
  entitys: []
}

export default (volumeState = volumeDefaultState, action) => {

  const { type, payload } = action

  switch (type) {
    case LOAD_ALL_VOLUMES + START:
      return { ...volumeState, loading: true }
    case LOAD_ALL_VOLUMES + SUCCESS:
      return { ...volumeState, loading: false, loaded: true, entitys: payload }
    case LOAD_ALL_VOLUMES + FAIL:
      return { ...volumeState, loading: false, errors: true }

    default:
      return volumeState
  }
}

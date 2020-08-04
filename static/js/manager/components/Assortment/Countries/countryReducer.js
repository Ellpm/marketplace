import { LOAD_ALL_COUNTRIES } from './constants'
import { START, SUCCESS, FAIL } from '../../../constants'

const countryDefaultState = {
  loading: false,
  loaded: false,
  errors: null,
  entitys: []
}

export default (countryState = countryDefaultState, action) => {

  const { type, payload } = action

  switch (type) {
    case LOAD_ALL_COUNTRIES + START:
      return { ...countryState, loading: true }

    case LOAD_ALL_COUNTRIES + SUCCESS:
      return { ...countryState, loading: false, loaded: true, entitys: payload }

    case LOAD_ALL_COUNTRIES + FAIL:
      return { ...countryState, loading: false, errors: true }


    default:
        return countryState
  }
}

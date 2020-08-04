import { START, SUCCESS, FAIL } from '../../../constants'
import { GET_LLEGAL_INFO_BY_KEYNAME, GET_LLEGAL_INFO,
        UPDATE_LLEGAL_DATA_BY_KEY } from '../constants'

const llegalDefaultState = {
  loading: false,
  loaded: false,
  errors: true,
  entitys: [],
  updateLoading: false,
  isUpdated: false,
  updateErrors: null
}

export default (llegalDataState = llegalDefaultState, actions) => {

  const { type, payload } = actions

  switch (type) {

    case GET_LLEGAL_INFO + START:
      return { ...llegalDataState, loading: true }

    case GET_LLEGAL_INFO + SUCCESS:
      return { ...llegalDataState, loading: false, loaded: true, entitys: payload }

    case GET_LLEGAL_INFO + FAIL:
      return { ...llegalDataState, loading: false, errors: true }


    case UPDATE_LLEGAL_DATA_BY_KEY + START:
      console.log(UPDATE_LLEGAL_DATA_BY_KEY + START)
      return { ...llegalDataState, updateLoading: true }

    case UPDATE_LLEGAL_DATA_BY_KEY + SUCCESS:
      console.log(UPDATE_LLEGAL_DATA_BY_KEY + SUCCESS)
      return { ...llegalDataState, updateLoading: false, isUpdated: true }

    case UPDATE_LLEGAL_DATA_BY_KEY + FAIL:
      return { ...llegalDataState, updateLoading: false, updateErrors: true }

    default:
      return llegalDataState
  }

}

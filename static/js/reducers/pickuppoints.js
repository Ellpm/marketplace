import { GET_PICKPOINT, START, SUCCESS, FAIL } from '../constans'

const PickpointsDefaultState = {
  loading: false,
  loaded: false,
  errors: null,
  entitys: []
}


export default (pickpointsState = PickpointsDefaultState, action) => {
  const {type, json, payload} = action

  switch (type) {
    case GET_PICKPOINT + START:
      //console.log(GET_PICKPOINT + START)
      return { ...pickpointsState, loading: true }

    case GET_PICKPOINT + SUCCESS:
      //console.log(GET_PICKPOINT + SUCCESS, payload)
      return { ...pickpointsState, loading: false, loaded: true, entitys: payload }

    case GET_PICKPOINT + FAIL:
      //console.log(GET_PICKPOINT + FAIL)
      return { ...pickpointsState, error: true, loading: false }

    default:
      return { ...pickpointsState }
  }

}

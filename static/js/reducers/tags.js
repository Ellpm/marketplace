import { FETCH_TAGS_LIST__API, GET_DETAIL_TAG, START, SUCCESS, FAIL } from '../constans'

const TagsDefaultState = {
  loading: false,
  loaded: false,
  errors: null,
  entitys: []
}


export default (tagsState = TagsDefaultState, action) => {
  const {type, json, payload} = action

  switch (type) {
    case FETCH_TAGS_LIST__API + START:
      console.log(FETCH_TAGS_LIST__API + START)
      return { ...tagsState, loading: true }

    case FETCH_TAGS_LIST__API + SUCCESS:
      console.log(FETCH_TAGS_LIST__API + SUCCESS, payload)
      return { ...tagsState, loading: false, loaded: true, entitys: payload }

    case FETCH_TAGS_LIST__API + FAIL:
      console.log(FETCH_TAGS_LIST__API + FAIL)
      return { ...tagsState, error: true, loading: false }

    case GET_DETAIL_TAG + START:
      console.log(GET_DETAIL_TAG + START)
      return { ...tagsState, loading: true }

    case GET_DETAIL_TAG + SUCCESS:
      console.log(GET_DETAIL_TAG + SUCCESS, payload)
      return { ...tagsState, loading: false, loaded: true, entitys: payload }

    case GET_DETAIL_TAG + FAIL:
      console.log(GET_DETAIL_TAG + FAIL)
      return { ...tagsState, error: true, loading: false }

    default:
      return { ...tagsState }
  }

}

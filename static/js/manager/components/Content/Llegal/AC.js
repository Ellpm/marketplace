import { GET_LLEGAL_INFO_BY_KEYNAME, GET_LLEGAL_INFO, UPDATE_LLEGAL_DATA_BY_KEY } from '../constants'


export function getLlegalInfo() {
  return {
    type: GET_LLEGAL_INFO
  }
}


export function updateLlegalDataByKey(data) {
  return {
    type: UPDATE_LLEGAL_DATA_BY_KEY,
    payload: data
  }
}

export function getLlegalInfoByKeyname(keyname) {
  return {
    type: GET_LLEGAL_INFO_BY_KEYNAME,
    payload: keyname
  }
}

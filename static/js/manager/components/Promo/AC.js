import { CREATE_PROMO } from './constants'
import { LOAD_ALL_PROMOCODES } from './constants'

export function createPromo(data) {
  return {
    type: CREATE_PROMO,
    payload: data
  }
}

export function loadAllPromocodes() {
  return {
    type: LOAD_ALL_PROMOCODES
  }
} 

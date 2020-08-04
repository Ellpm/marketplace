import { LOAD_NEW_PRICE_LIST } from './constants'

export function loadNewPriceList(pricelist) {
  return {
    type: LOAD_NEW_PRICE_LIST,
    payload: pricelist
  }
}

import {OrderedMap, Map, Record} from 'immutable'
import {GET_CART_FROM_LOCAL_STORAGE, ADD_ITEM_TO_CART, GET_CART_LENGTH} from '../constans'

const CardRecord = Record({
  id: undefined,
  products: undefined,
  totalSum: undefined,
  totalProducts: undefined,
  isAlc: undefined,
  createdAt: undefined
})

const ReducerCartState = new Record({
  loading: false,
  loaded: false,
  entitys: new OrderedMap({}),
  fail: false
})

const defaultCartState = new ReducerCartState()

export default (cartState = defaultCartState, action) => {
  const {type, json, payload} = action

  switch(type) {
    case GET_CART_FROM_LOCAL_STORAGE:
      console.log("GET_CART_FROM_LOCAL_STORAGE")
      return cartState

    case ADD_ITEM_TO_CART:
      console.log("ADD_ITEM_TO_CART")
      return cartState

    case GET_CART_LENGTH:
      console.log("ADD_ITEM_TO_CART")
      return cartState
  }

  return cartState
}

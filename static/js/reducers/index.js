import {combineReducers} from 'redux'

import cart from './cart'
import products from './products'
import categories from './categories'
import pickpoints from './pickuppoints'
import recomendations from './recomendations'
import tags from './tags'

import adminProduct from '../manager/components/Assortment/Products/ProductReducer'
import adminBrands from '../manager/components/Assortment/Brands/BrandReducer'
import adminCountries from '../manager/components/Assortment/Countries/countryReducer'
import adminPackages from '../manager/components/Assortment/Packages/packageReducer'
import adminVolumes from '../manager/components/Assortment/Volumes/volumeReducer'
import adminUpdateData from '../manager/components/Assortment/UpdateData/updateDataReduces'
import adminCreatePromo from '../manager/components/Promo/Create/createPromoReducer'
import adminPromoCodes from '../manager/components/Promo/PromoCodes/promoCodesReducer'
import adminLlegalData from '../manager/components/Content/Llegal/llegalReducer'

import filterProducts from './filterProduct'

export default combineReducers({
  cart, products,
  filterProducts, categories,
  pickpoints, recomendations,
  tags, adminProduct, adminCountries,
  adminBrands, adminPackages, adminVolumes,
  adminUpdateData, adminCreatePromo,
  adminPromoCodes, adminLlegalData
})

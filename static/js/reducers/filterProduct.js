import { FILTER_PRODUCT_BY_TYPE, FILTER_PRODUCT_BY_BRAND, FILTER_PRODUCT_BY_VOLUME, FILTER_PRODUCT_BY_COUNTRY,
        GET_FILTERS, FILTER_PRODUCT_BY_PACKAGE} from '../constans'
 
const defaultProductFilter = {
  selectedType: [],
  selectedBrand: [],
  selectedVolume: [],
  selectedCountry: [],
  selectedPackages: []
}

export default (filterProductState = defaultProductFilter, action) => {
  const {type, payload} = action

  switch(type) {
    case FILTER_PRODUCT_BY_TYPE:
      return {...filterProductState, selectedType: payload}
    case FILTER_PRODUCT_BY_BRAND:
      return {...filterProductState, selectedBrand: payload}
    case FILTER_PRODUCT_BY_VOLUME:
      return {...filterProductState, selectedVolume: payload}
    case FILTER_PRODUCT_BY_COUNTRY:
      return {...filterProductState, selectedCountry: payload}
    case FILTER_PRODUCT_BY_PACKAGE:
      return {...filterProductState, selectedPackages: payload}
    case GET_FILTERS:
      return filterProductState
  }

  return filterProductState
}

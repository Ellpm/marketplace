import {createSelector} from 'reselect';

const filtersProductsGetter = state => state.filterProducts
const productsGetter = state => state.products.entitys

export const filtrateProductsSelector = createSelector(productsGetter, filtersProductsGetter, (products, filters) => {
  const {selectedType, selectedBrand, selectedVolume, selectedCountry, selectedPackages} = filters


  return products.filter(product => {
    return (!selectedType.length || selectedType.includes(product.subcategory_id))
        && (!selectedBrand.length || selectedBrand.includes(product.brand_nameId))
        && (!selectedVolume.length || selectedVolume.includes(product.volume_nameId))
        && (!selectedCountry.length || selectedCountry.includes(product.country_nameId))
  })
})

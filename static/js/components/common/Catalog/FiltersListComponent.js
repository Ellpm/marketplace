import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'
import { connect } from 'react-redux'
import Select from 'react-select'


import { USER_BRAND_FILTERS } from '../../../constans'
import { getProductsByCategory_api,
        filterProductByType, filterProductByBrand, filterProductByVolume, filterProductByCountry,
        getFilters, filterProductByPackage } from '../../../AC'

import {Grid, Row, Col, media} from '../../kit/Grid'
import {theme} from '../../kit/theme'
import FilterItems from './Filters/FilterItemsComponent'
import Filter from './Filters/FilterComponent'
import FiltersModal from '../../common/Modals/FiltersModal'

import {fakeProducts} from '../../../fakeData/fakeProducts'

const ModalStyles = {
  overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 50
  },
  content : {
    bottom                : 'auto',
    right                 : 'auto',
    left                  :  '0',
    top                   : '0',
    width                 : '100%',
    height                : '800px',
    border                : '0',
    backgroundColor       : 'rgba(0, 0, 0, 1)',
  }
};



const Line = styled.div`
  flex: ${(props) => props.size};

  ${(props) => props.hide && media[props.hide](`
    display: none;
  `)};
`

const FilterList = styled.div`
  height: ${props => props.height || '90px'};
  margin-top: 20px;
  margin-bottom: 10px;
`

const FiltersBlock = styled.div`
  height: 80px;
  border-right: 1px solid ${props => props.theme.color.gray};
  padding-left: 20px;
  padding-right: 20px;
`

const HeaderBlock = styled.p`
  color: ${props => props.theme.color.darkGray};
  font-size: 14px;
`

const MobileFilter = styled.div`
  padding: 20px;
  color: ${props => props.theme.color.green};
  font-size: 1.5em;
`

class FiltersListComponent extends Component {

  state = {
    brandFilters: [],
    volumeFilters: [],
    typeFilters: [],
    countryFilters: [],
    packageFilters: [],
    isModalOpen: false
  }


  addFilterToStorage = (arr, filterType) => {
    localStorage.setItem(filterType, JSON.stringify(arr))
  }

  getFiltersFromStorage = (filterType) => {
    let filters = JSON.parse(localStorage.getItem(filterType))
    if (Array.isArray(filters)) {
      return filters
    } else {
      return []
    }
  }

  componentDidMount() {
    //this.props.getProductsByCategory_api(this.props.category)
    //this.getFiltersFromStorage()
  }

  brandChangeHandler = (selected) => {
    if (selected) {
      console.log("----", selected, selected.map(option => option.value))
      //this.addFilterToStorage(selected.map(option => option.value), USER_BRAND_FILTERS)
      this.props.filterProductByBrand(selected.map(option => option.value))
    } else {
      this.props.filterProductByBrand([])
    }
  }

  typeChangeHandler = (selected) => {
    if (selected) {
      this.props.filterProductByType(selected.map(option => option.value))
    } else {
      this.props.filterProductByType([])
    }
  }

  volumeChangeHandler  = (selected) => {
    if (selected) {
      this.props.filterProductByVolume(selected.map(option => option.value))
    } else {
      this.props.filterProductByVolume([])
    }
  }

  countryChangeHandler  = (selected) => {
    if (selected) {
      this.props.filterProductByCountry(selected.map(option => option.value))
    } else {
      this.props.filterProductByCountry([])
    }
  }

  packageChangeHandler = (selected) => {
    if (selected) {
      this.props.filterProductByPackage(selected.map(option => option.value))
    } else {
      this.props.filterProductByPackage([])
    }
  }

  getFiltersFromStorage = () => {
    //const filters = JSON.parse(localStorage.getItem('REDUX_GETDRINKS'))
    //console.log(filters.filterProducts)
    /*this.setState({
      brandFilters: filters.filterProducts.selectedBrand,
      volumeFilters: filters.filterProducts.selectedVolume,
      typeFilters: filters.filterProducts.selectedType,
      countryFilters: filters.filterProducts.selectedCountry
    })*/
  }

  openModal = () => {
    this.setState({isModalOpen: true})
  }

  closeModal = () => {
    this.setState({isModalOpen: false})
  }

  render() {
    // !!! Только для теста !!!
    // Заменить на значений из БД
    const brands = this.props.productsList.map((item) => { return { label: item.brand_name, value: item.brand_nameId } })
    const types = this.props.productsList.map((item) => { return { label: item.subcategory_name, value: item.subcategory_id } })
    const volumes = this.props.productsList.map((item) => { return { label: item.volume_name, value: item.volume_nameId } })
    const countries = this.props.productsList.map((item) => { return { label: item.country_name, value: item.country_nameId } })
    const packages = this.props.productsList.map((item) => { return { label: item.packageName, value: item.package_nameId } })

    const uniqueFilterValues = (arr) => {
      let result = []
      arr.forEach(item => {
        let i = result.findIndex(x => x.value === item.value)
        if (i <= -1) {
          if ( item.label !== "NO_BRAND" && item.label !== "0" && item.label !== "NO_COUNTRY" && item.label !== "NO_SUBCAT" ) {
              result.push({ label: item.label, value: item.value })
          }
        }
      })
      return result;
    }

    //console.log("uniqueFilterValues(brands)", uniqueFilterValues(brands))
    //const brandsReady = uniqueFilterValues(brands)

    return (
      <ThemeProvider theme={theme}>
        <FilterList height={this.props.height}>
          <Row hide="xs">
            <FilterItems
              hideTypes={this.props.hideTypes}
              typesValues={uniqueFilterValues(types)}
              typesChangeHandler={this.typeChangeHandler}
              placeholderStyle={this.props.placeholderStyle}
              brandValues={uniqueFilterValues(brands)}
              brandChangeHandler={this.brandChangeHandler}
              volumeValues={uniqueFilterValues(volumes)}
              volumeChangeHandler={this.volumeChangeHandler}
              countryValues={uniqueFilterValues(countries)}
              countryChangeHandler={this.countryChangeHandler}
              packageValues={uniqueFilterValues(packages)}
              packageChangeHandler={this.packageChangeHandler}
            />
          </Row>
          <Line hide="lg">
            <MobileFilter>
              <p onClick={this.openModal}>Фильтры</p>
            </MobileFilter>
          </Line>
        </FilterList>

        <FiltersModal
          isModalOpen={this.state.isModalOpen}
          close={this.closeModal}
        >
          <FilterItems
            hideTypes={this.props.hideTypes}
            typesValues={uniqueFilterValues(types)}
            typesChangeHandler={this.typeChangeHandler}
            brandValues={uniqueFilterValues(brands)}
            brandChangeHandler={this.brandChangeHandler}
            volumeValues={uniqueFilterValues(volumes)}
            volumeChangeHandler={this.volumeChangeHandler}
            countryValues={uniqueFilterValues(countries)}
            countryChangeHandler={this.countryChangeHandler}
            packageValues={uniqueFilterValues(packages)}
            packageChangeHandler={this.packageChangeHandler}
            isHorisontal={false}
            headerSize="18px"
          />
      </FiltersModal>

      </ThemeProvider>
    )
  }
}

export default connect((state) => {
  return {
    productsList: state.products.entitys,
    filterProducts: state.filterProducts
  }
}, { getProductsByCategory_api, filterProductByType, filterProductByBrand, filterProductByVolume, filterProductByCountry, getFilters, filterProductByPackage })(FiltersListComponent)

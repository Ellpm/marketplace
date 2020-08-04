import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Card} from '../styled'
import ProductItem from './ProductItem'

import { SERVER_ADDR } from '../../../constans'

const CatMenuItem = styled.span`
  display: inline-block;
  margin-right: 15px;
  cursor: pointer;
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 3px;
`

class ProductList extends Component {

  generateOptionsCats = (defaulValue) => {
    const {categories} = this.props
    const result = categories.map(item => {
      if (defaulValue == item.id) {
        return(
          <option key={item.id} selected value={item.id}>
            {item.cat_name}
          </option>
        )
      } else {
        return(
          <option key={item.id} value={item.id}>
            {item.cat_name}
          </option>
        )
      }
    })
    return result
  }

  generateOptionsSubCats = (defaulValue) => {
    const {subcategories} = this.props
    const result = subcategories.map(item => {
      //console.log("item---+++", item, defaulValue)
      if (defaulValue == item.id) {
        return(
          <option key={item.id} selected value={item.id}>
            {item.subcat_name}
          </option>
        )
      } else {
        return(
          <option key={item.id} value={item.id}>
            {item.subcat_name}
          </option>
        )
      }
    })
    return result
  }

  generateOptionsBrand = (defaulValue) => {
    const {brands} = this.props
    const result = brands.map(item => {
      if (defaulValue == item.id) {
        return(
          <option key={item.id} selected value={item.id}>
            {item.brand_name}
          </option>
        )
      } else {
        return(
          <option key={item.id} value={item.id}>
            {item.brand_name}
          </option>
        )
      }
    })
    return result
  }

  generateOptionsPackages = (defaulValue) => {
    const {packages} = this.props
    const result = packages.map(item => {
      if (defaulValue == item.id) {
        return(
          <option key={item.id} selected value={item.id}>
            {item.package_name}
          </option>
        )
      } else {
        return(
          <option key={item.id} value={item.id}>
            {item.package_name}
          </option>
        )
      }
    })
    return result
  }


  generateOptionsTags = (defaulValue) => {
    let {tags} = this.props
    const result = tags.map(item => {
      if (!tags) {
        tags = -1
      }
      if (defaulValue == item.id) {
        return(
          <option key={item.id} selected value={item.id}>
            {item.name}
          </option>
        )
      } else {
        return(
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        )
      }
    })
    return result
  }


  generateOptionsVolumes = (defaulValue) => {
    const {volumes} = this.props
    const result = volumes.map(item => {
      if (defaulValue == item.id) {
        return(
          <option key={item.id} selected value={item.id}>
            {item.volume_name}
          </option>
        )
      } else {
        return(
          <option key={item.id} value={item.id}>
            {item.volume_name}
          </option>
        )
      }
    })
    return result
  }

  generateOptionsCountries = (defaulValue) => {
    const {countries} = this.props
    const result = countries.map(item => {
      //console.log("Country", defaulValue, item.id)
      if (defaulValue == item.id) {
        return(
          <option key={item.id} selected value={item.id}>
            {item.country_name}
          </option>
        )
      } else {
        return(
          <option key={item.id} value={item.id}>
            {item.country_name}
          </option>
        )
      }
    })
    return result
  }

  render() {
    const {categories, products} = this.props
    //console.log(products)
    return (
      <div>
        <h3>Продукты</h3>
        <div style={{margin: '15px'}}>
        { categories.map(item => {
          return(
            <CatMenuItem
              key={item.id}
              data-id={item.id}
              data-catid={item.cat_id}
              onClick={(e) => { this.props.showProductByCategory(e) }}
            >
              {item.cat_name}
            </CatMenuItem>
          )
        }) }
        </div>

        <div>
          <span>Количество продуктов: {products.length}</span>
          { products.map(item => {
            return(
              <ProductItem
                product={item}
                key={item.id}
                generateOptionsCats={this.generateOptionsCats}
                generateOptionsBrand={this.generateOptionsBrand}
                generateOptionsPackages={this.generateOptionsPackages}
                generateOptionsVolumes={this.generateOptionsVolumes}
                generateOptionsCountries={this.generateOptionsCountries}
                generateOptionsSubCats={this.generateOptionsSubCats}
                generateOptionsTags={this.generateOptionsTags}
              />
            )
          }) }
        </div>
      </div>
    )
  }
}

export default ProductList

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {theme} from '../components/kit/theme'
import Header from '../components/common/HeaderComponent'
import FooterComponent from '../components/common/FooterComponent'
import CategoryBannerComponent from '../components/common/CategoryBannerComponent'
import FiltersListComponent from '../components/common/Catalog/FiltersListComponent'
import CatalogLoader from '../components/common/Loaders/CatalogLoader'
import ProductCardComponent from '../components/common/Catalog/ProductCardComponent'

import {getProductsBySubCategory_api, getDetailCategory} from '../AC'
import {filtrateProductsSelector} from '../selectors'
import {isInBasket} from '../helpers/localStorage'

const Wrapper = styled.div`
  margin-left: 60px;
  margin-right: 50px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-left: 0;
    margin-right: 0;
  }
`

const ProductWrapper = styled.div`
  width: 100%;
  text-align: center;
`

const TagsWrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  max-width: 100%;
  text-align: left;
  padding-left: 20px;
`

const TagHeader = styled.h3`
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 10px;
`

const TagQuantity = styled.span`
  font-weight: normal !important;
  font-size: 14px;
`

const BCLink = styled.a`
  margin-right: 10px;
  :hover {
    color: ${theme.color.darkGreen};
  }
`


const BCElem = styled.span`
  margin-right: 10px;
`

class SubCategoryScreen extends Component {

  state = {}

  componentDidMount() {
    const {category, country, subcategory} = this.props.match.params
    this.props.getDetailCategory()
    //console.log("???????", category, country, subcategory, "!!!!!!!!")
    if (country) {
      this.props.getProductsBySubCategory_api("byCountry", country, category)
    }
    if (subcategory) {
      this.props.getProductsBySubCategory_api("byType", subcategory)
    }
  }

  filterCategories = (arr, id) => {
    const result = arr.filter(item => {
      if (item.cat_id == id) {
        return item
      }
    })
    return result
  }

  render() {
    //console.log(this.props)
    const {category, country, subcategory} = this.props.match.params
    const { loaded, loading, categoryLoaded, categoryData, products, errors } = this.props
    //console.log("props", category, country, subcategory)
    console.log("PROPS", this.props)

    let categoryInfo, categoryUri, countryInfo, countryInfoName = ''
    if (categoryLoaded) {
      categoryInfo = this.filterCategories(categoryData, this.props.match.params.category)
      categoryUri = '/catalog/' + categoryInfo[0].cat_id
      console.log("categoryData", categoryData)
    }

    //let countyData = []
    if (country && country === 'rossiya') {
      countryInfoName = "Российское пиво"
      countryInfo = []
      countryInfo.push({
        cat_id: "pivo",
        bannerUrl: "/img/banners/russia.png",
        showName: "Российское пиво",
        slogan: "ПИВО ОТ ОТЕЧЕСТВЕННЫХ ПРОИЗВОДИТЕЛЕЙ"
      })
    }

    return (
      <>
        <Header />
        { categoryLoaded ? (
            <CategoryBannerComponent
              info={countryInfo}
            />
        ) : (<CategoryBannerComponent info={[]} /> )}

        <Wrapper>
          {/*<FiltersListComponent category={category} />*/}
          { loading ? (<CatalogLoader />) : (<></>) }
          { errors ? (<h1>Ошибка загрузки продуктов</h1>) : (<></>) }
          { loaded && categoryLoaded ? (
            <ProductWrapper>
              <TagsWrapper>
                <div>
                  <TagHeader>
                    <BCLink href={categoryUri}>{categoryInfo[0].cat_name}</BCLink>
                    <BCElem>/</BCElem>
                    {country ? (
                      <>
                        <BCElem>{countryInfoName} <TagQuantity> ({products.length} результатов)</TagQuantity></BCElem>
                      </>
                    ) : (
                      <></>
                    )}
                  </TagHeader>
                </div>
              </TagsWrapper>

              {products.map(item => {
                let price_by_one = (item.price_by_one*1).toFixed(2)
                item.price = (price_by_one * item.pack_quantity).toFixed(2)
                if (item.isshow && item.stock*1 > 0) {
                  return(
                    <ProductCardComponent
                      product={item}
                      isInBasket={isInBasket(item)}
                      key={item.scu_id}
                    />
                  )
                }
              })}
            </ProductWrapper>
          ) : (<></>)}
        </Wrapper>
        <FooterComponent />
      </>
    );
  }
}

SubCategoryScreen.propTypes = {
  products: PropTypes.array.isRequired // from react-redux
}

export default connect((state) => {
  return {
    products: filtrateProductsSelector(state),
    loading: state.products.loading,
    loaded: state.products.loaded,
    errors: state.products.errors,
    categoryData: state.categories.entitys,
    categoryLoaded: state.categories.loaded
  }
}, {getProductsBySubCategory_api, getDetailCategory})(SubCategoryScreen);

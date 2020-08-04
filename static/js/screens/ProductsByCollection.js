import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {connect} from 'react-redux'

import { USER_AGE_SETTINGS_STORAGE } from '../constans'
import {Grid, Row, Col} from '../components/kit/Grid'
import { theme } from '../components/kit/theme'

import Header from '../components/common/HeaderComponent'
import FooterComponent from '../components/common/FooterComponent'
import CategoryBannerComponent from '../components/common/CategoryBannerComponent'
import FiltersListComponent from '../components/common/Catalog/FiltersListComponent'
import ProductListComponent from '../components/common/Catalog/ProductListComponent'
import OurBenefitsComponent from '../components/common/OurBenefitsComponent'
import HowToOrderComponent from '../components/common/HowToOrderComponent'
//import AlcAttention from '../components/common/Catalog/AlcAttntionComponent'
//import AgeModal from '../components/common/Modals/AgeModal'
import FilterItem from '../components/common/Catalog/FilterItemComponent'
//import ProductList from '../components/common/Catalog/ProductList'
import CatalogLoader from '../components/common/Loaders/CatalogLoader'
import ProductCardComponent from '../components/common/Catalog/ProductCardComponent'

import { getProductsByCollection_api } from '../AC'
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
  margin-top: 10px;
`

const info = [{
  showName: "Импортное пиво",
  slogan: " ",
  bannerUrl: "/img/banners/import.png"
}]

class ProductsByCollection extends PureComponent {

  componentDidMount() {
    const collection = this.props.match.params.collection
    //console.log(collection, "------------------")
    this.props.getProductsByCollection_api(collection)
    //console.log("-------------", this.props.match.params.collection)
  }

  render() {
    const { loaded, loading, categoryLoaded, categoryData, products, errors } = this.props
    console.log("PRODUCTS", products)

    return(
      <React.Fragment>
        <Header />
        <CategoryBannerComponent info={info} />
        <Wrapper>
          {/*<FiltersListComponent category={"beer"} />*/}

          { loading ? (<CatalogLoader />) : (<></>) }
          { errors ? (<h1>Ошибка загрузки продуктов</h1>) : (<></>) }

          { loaded ? (
            <ProductWrapper>
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
          ) : (<></>) }

        </Wrapper>
        <div style={{paddingLeft: '40px'}}>
            <HowToOrderComponent></HowToOrderComponent>
        </div>
        <FooterComponent></FooterComponent>
      </React.Fragment>
    )
  }
}

export default connect((state) => {
  return {
    products: filtrateProductsSelector(state),
    //products: state.products.entitys,
    loading: state.products.loading,
    loaded: state.products.loaded,
    errors: state.products.errors,
  }
}, { getProductsByCollection_api })(ProductsByCollection)

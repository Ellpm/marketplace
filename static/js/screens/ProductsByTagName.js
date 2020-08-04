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
import OurResponsibility from '../components/common/OurResponsibility'
import HowToOrderComponent from '../components/common/HowToOrderComponent'
//import AlcAttention from '../components/common/Catalog/AlcAttntionComponent'
//import AgeModal from '../components/common/Modals/AgeModal'
import FilterItem from '../components/common/Catalog/FilterItemComponent'
//import ProductList from '../components/common/Catalog/ProductList'
import CatalogLoader from '../components/common/Loaders/CatalogLoader'
import ProductCardComponent from '../components/common/Catalog/ProductCardComponent'

import { getProductsByTagName, getDetailTag, getDetailCategory, getTagsByCategory } from '../AC'
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

const TagList = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const TagItem = styled.div`
  padding: 5px;
  font-size: 14px;
  background: ${props => props.background};
  border-radius: 5px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background: ${theme.color.green};
  }
`

const TagLink = styled.a`
  text-decoration: none;
  color: ${theme.color.black};
`



class ProductsByTagName extends PureComponent {

  componentDidMount() {
    const tagname = this.props.match.params.tagname
    const category = this.props.match.params.category
    //console.log(collection, "------------------")
    this.props.getDetailCategory(category)
    this.props.getProductsByTagName(category, tagname)
    this.props.getTagsByCategory(category)
    //this.props.getDetailTag(tagname)
    //console.log("-------------", this.props.match.params.collection)
  }

  filterCategories = (arr, id) => {
    const result = arr.filter(item => {
      if (item.cat_id === id) {
        return item
      }
    })
    return result
  }

  getCurrentTag = (arr, id) => {
    const result = arr.filter(item => {
      if (item.tag_id === id) {
        return item
      }
    })
    return result
  }

  render() {
    const { loaded, loading, categoryLoaded, categoryData, products, errors, tag } = this.props
    const tagname = this.props.match.params.tagname
    console.log("PRODUCTS", this.props)

    let categoryInfo, categoryUri, currentTag = ''
    let tagBanner = []
    if (categoryLoaded && tag.loaded) {
      categoryInfo = this.filterCategories(categoryData, this.props.match.params.category)
      categoryUri = '/catalog/' + categoryInfo[0].cat_id
      currentTag = this.getCurrentTag(tag.entitys, tagname)
      tagBanner.push({
        bannerUrl: currentTag[0].banner_url,
        cat_name: currentTag[0].name,
        showName: currentTag[0].show_name,
        slogan: currentTag[0].slogan
      })
    }
    //console.log("categoryInfo", categoryInfo)

    return(
      <React.Fragment>
        <Header />
        { categoryLoaded ?
          (<CategoryBannerComponent info={tagBanner}></CategoryBannerComponent>)
          : (<></>) }
        <Wrapper>
          {/*<FiltersListComponent category={"beer"} />*/}

          { loading ? (<CatalogLoader />) : (<></>) }
          { errors ? (<h1>Ошибка загрузки продуктов</h1>) : (<></>) }

          { loaded && tag.loaded && categoryLoaded ? (
            <>
            <ProductWrapper>
              <TagsWrapper>
                <div>
                  <TagHeader>
                    <BCLink href={categoryUri}>{categoryInfo[0].cat_name}</BCLink>
                    <BCElem>/</BCElem>
                    <BCElem>{currentTag[0].name} <TagQuantity> ({products.length} результатов)</TagQuantity></BCElem>
                  </TagHeader>
                  <TagList>
                    {
                      tag.entitys.map(item => {
                        const url = '/catalog/' + this.props.match.params.category + '/byTag/' + item.tag_id
                        const bg = item.tag_id === tagname ? theme.color.green : theme.color.gray
                        console.log("BG", bg)
                        return (
                          <TagItem background={bg}>
                            <TagLink href={url}>{item.name}</TagLink>
                          </TagItem>
                        )
                      })
                    }
                  </TagList>
                </div>
              </TagsWrapper>
              <div>
              {products.map(item => {
                //console.log(item)
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
            </div>
            </ProductWrapper>
            </>
          ) : (<></>) }

        </Wrapper>
        <div style={{paddingLeft: '40px'}}>
            <HowToOrderComponent></HowToOrderComponent>
            <OurResponsibility />
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
    tag: state.tags,
    categoryData: state.categories.entitys,
    categoryLoaded: state.categories.loaded,
  }
}, { getProductsByTagName, getDetailTag, getDetailCategory, getTagsByCategory })(ProductsByTagName)

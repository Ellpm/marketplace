import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled, {ThemeProvider} from 'styled-components'

import { USER_AGE_SETTINGS_STORAGE } from '../constans'
//import { Row, Col} from '../components/kit/Grid'
import { theme } from '../components/kit/theme'

import Header from '../components/common/HeaderComponent'
import FooterComponent from '../components/common/FooterComponent'
import CategoryBannerComponent from '../components/common/CategoryBannerComponent'
import FiltersListComponent from '../components/common/Catalog/FiltersListComponent'
//import ProductListComponent from '../components/common/Catalog/ProductListComponent'
import HowToOrderComponent from '../components/common/HowToOrderComponent'
import OurResponsibility from '../components/common/OurResponsibility'
import ProductList from '../components/common/Catalog/ProductList'
import AlcAttention from '../components/common/Catalog/AlcAttntionComponent'
import AgeModal from '../components/common/Modals/AgeModal'
//import FilterItem from '../components/common/Catalog/FilterItemComponent'
import {getProductsByCategory_api, getDetailCategory, getTagsByCategory} from '../AC'
import {filtrateProductsSelector} from '../selectors'

import CatalogLoader from '../components/common/Loaders/CatalogLoader'
import ProductCardComponent from '../components/common/Catalog/ProductCardComponent'

import {BASKET_LOCAL_STORAGE_NAME} from '../constans'

const TopMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  z-index: 100;
  background: white;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.5);
`

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
`

const TagHeader = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`

const TagQuantity = styled.span`
  font-weight: normal !important;
  font-size: 14px;
`

const TagList = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const TagItem = styled.div`
  padding: 5px;
  font-size: 14px;
  background: ${props => props.theme.color.gray};
  border-radius: 5px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background: ${props => props.theme.color.green};
  }
`

const TagLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color.black};
`

const Select = styled.select`
  border: 0;
  display: inline-block;
  margin-top: 10px;
`

const Selector = styled.div`
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Span = styled.span`
  font-size: 14px;
`


function sortByPriceLow(arr) {
  arr.sort((a, b) => +a.price_by_one > +b.price_by_one ? 1 : -1)
}

function sortByPriceUp(arr) {
  arr.sort((a, b) => +a.price_by_one < +b.price_by_one ? 1 : -1)
}

class CategoryScreen extends PureComponent {

  state = {
    ageModalOpen: false,
    isShowTopMenu: false,
    thisCategory: [],
    selector: "",
    products: []
  }

  componentDidMount = () => {
    this.checkAge()
    this.props.getProductsByCategory_api(this.props.match.params.category)
    this.props.getTagsByCategory(this.props.match.params.category)
    //this.props.getDetailCategory(this.props.match.params.category)
    //window.addEventListener('scroll', this.showTopMenuOnScroll, true);
  }

  componentWillUnmount = () => {
    //window.removeEventListener('scroll', this.showTopMenuOnScroll);
  }

  setUpProducts = () => {
    const { loaded, products} = this.props

    if (loaded) {
        //console.log("YES")
        this.setState({products: products})
    }
  }

  showTopMenuOnScroll = (e) => {
    if (window.pageYOffset > 400) {
      if (!this.state.isShowTopMenu) {
        this.setState({isShowTopMenu: true})
      }
    } else {
      if (this.state.isShowTopMenu) {
        this.setState({isShowTopMenu: false})
      }
    }
  }

  checkAge = () => {
    if (this.props.match.params.category === 'pivo') {
        let userData = localStorage.getItem(USER_AGE_SETTINGS_STORAGE)
        userData = JSON.parse(userData)

        if (!userData) {
          this.setState({ageModalOpen: true})
        }
    }
  }

  closeAgeModal = () => {
    this.setState({ageModalOpen: false})
  }

  redirect = () => {
    // Переписать через history.push()
    window.location.href = '/catalog/napitki';
  }

  isInBasket = (product) => {
    let result = false;
    let storageData = localStorage.getItem(BASKET_LOCAL_STORAGE_NAME)
    storageData = JSON.parse(storageData)

    if (Array.isArray(storageData)) {
      for (let i = 0; i < storageData.length; i++) {
        if (storageData[i][0].scu_id === product.scu_id) {
          result = true
        }
      }
    }
    return result
  }

  filterCategories = (arr, id) => {
    const result = arr.filter(item => {
      if (item.cat_id === id) {
        return item
      }
    })
    return result
  }


  sortChangeHandler = (e) => {
    const type = e.target.value
    const result = this.state.products;

    switch(type) {
      case 'low':
        console.log("LOW")
        sortByPriceLow(result)
        console.log(result)
        this.setState({products: result})
        break

      case "high":
        console.log("HIGH")
        sortByPriceUp(result)
        console.log(result)
        this.setState({products: result})
        break
      case "haha":
        const {products} = this.props
        this.setState({products: products})
        break;

      default:
        break
    }

  }



  render() {
    const {loading, loaded, errors, products, categoryLoaded, categoryData, tags} = this.props
    const categoryId = this.props.match.params.category
    const stylePlaceholder = 'napitki' ?  'выберите раздел' : 'выберите стиль'

    console.log(this.props)
    if (loaded) {
      this.setUpProducts()
    }

    let categoryInfo = '';
    if (categoryLoaded) {
      categoryInfo = this.filterCategories(categoryData, this.props.match.params.category)
    }
    console.log("categoryInfo", categoryInfo)

    return (
      <ThemeProvider theme={theme}>
        <Header />
        { categoryLoaded ? (<CategoryBannerComponent info={this.filterCategories(categoryData, this.props.match.params.category)}></CategoryBannerComponent>) : (<></>) }
        <Wrapper>
          <AgeModal isOpen={this.state.ageModalOpen} close={this.closeAgeModal} fail={this.redirect} />
          { this.props.match.params.category === 'beer' ? <AlcAttention /> : <p></p> }

          {/*<FiltersListComponent
            category={this.props.match.params.category}
            placeholderStyle={stylePlaceholder}
          />*/}

          { tags.loaded && loaded && categoryLoaded ? (
            <TagsWrapper>
              <TagHeader>{categoryInfo[0].cat_name} <TagQuantity>({products.length} результатов)</TagQuantity> </TagHeader>
              <TagList>
                {
                  tags.entitys.map(item => {
                    const url = '/catalog/' + this.props.match.params.category + '/byTag/' + item.tag_id
                    return (
                      <TagItem>
                        <TagLink href={url}>{item.name}</TagLink>
                      </TagItem>
                    )
                  })
                }
              </TagList>
              {/*<Selector>
                <Span>Сортировать: </Span>
                <Select onChange={this.sortChangeHandler}>
                  <option value="haha">По бренду</option>
                  <option value="low">Сначала дешевые</option>
                  <option value="high">Сначала дорогие</option>
                </Select>
              </Selector>*/}
            </TagsWrapper>
          ) : (<></>) }

          { loading ? (<CatalogLoader />) : (<></>) }
          { errors ? (<h1>Ошибка загрузки продуктов</h1>) : (<></>) }
          { loaded ? (
            <>
            {
              /*<ProductList products={products} />*/
              this.state.products.map(item => {
                let price_by_one = (item.price_by_one*1).toFixed(2)
                item.price = (price_by_one * item.pack_quantity).toFixed(2)
                if (item.isshow && item.stock*1 > 0) {
                  return(
                    <ProductCardComponent
                      product={item}
                      isInBasket={this.isInBasket(item)}
                      key={item.scu_id}
                    />
                  )
                }
              })
            }
            </>
          ) : (<></>) }

          <div style={{paddingLeft: '40px'}}>
            <HowToOrderComponent></HowToOrderComponent>
            <OurResponsibility />
          </div>

        </Wrapper>
        <FooterComponent></FooterComponent>
        { this.state.isShowTopMenu ? (
          <TopMenu>

          </TopMenu>
        ) : ('') }
      </ThemeProvider>
    )
  }
}

export default connect((state) => {
  return {
    //products: state.products.entitys,
    products: filtrateProductsSelector(state),
    loading: state.products.loading,
    loaded: state.products.loaded,
    errors: state.products.errors,
    categoryData: state.categories.entitys,
    categoryLoaded: state.categories.loaded,
    tags: state.tags
  }
}, {getProductsByCategory_api, getDetailCategory, getTagsByCategory})(CategoryScreen)

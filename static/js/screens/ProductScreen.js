import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, {ThemeProvider} from 'styled-components'
import Zoom from 'react-img-zoom'

import { getOneProduct } from '../AC'
import {Grid, Row, Col, media} from '../components/kit/Grid'
import {theme} from '../components/kit/theme'

import {BASKET_LOCAL_STORAGE_NAME} from '../constans'
import {addLocalStorageData} from '../helpers/localStorage'

import Header from '../components/common/HeaderComponent'
import FooterComponent from '../components/common/FooterComponent'
//import OurBenefitsComponent from '../components/common/OurBenefitsComponent'
import HowToOrderComponent from '../components/common/HowToOrderComponent'
import SameProducts from '../components/common/SameProductsCmoponent'
import BreadCrumbs from '../components/common/Product/BreadCrumbsComponent'
import InfoBlock from '../components/common/Product/InfoBlockComponent'
import Specks from '../components/common/Product/SpecksComponent'
//import BestSellers from '../components/common/BestSellersComponent'
import AddToBasketModal from '../components/common/Modals/AddToBasketModal'
import OurResponsibility from '../components/common/OurResponsibility'

export const Wrapper = styled.div`
  margin-left: 60px;
  margin-right: 50px;
  @media (max-width: ${theme.sizes.mobileL}) {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 10px;
    padding-right: 10px;
  }
`

const Packshoot = styled.div`
  height: 480px;
  background-image: url(${props => props.img});
  background-color: ${props => props.theme.color.gray};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
  margin-left: -70px;
  cursor: zoom-in;
  padding-top: 50px;
  overflow: hidden;
  @media (max-width: ${theme.sizes.mobileL}) {
    height: 280px;
    padding-top: 0px;
    margin-left: 0px;
  }
`
const Info = styled.div`
  margin-left: 30px;
`

const Column = styled.div`
  display: inline-block;
  width: ${props => props.width};
  vertical-align: top;
  @media (max-width: ${theme.sizes.mobileL}) {
    display: block;
    width: 100%;
  }
`

class ProductScreen extends Component {

  state = {
    addToBasketModal: false,
    inCart: false,
  }

  componentDidMount() {
    //console.log(this.props.match.params.product)
    this.props.getOneProduct(this.props.match.params.product)
    this.isInBasket(this.props.match.params.product)
  }

  closeAddToBasketModal = () => {
    //setTimeout( () => {
      this.setState({addToBasketModal: false})
      //window.location.reload(); // Костыли :-((
    //}, 2000);
  }

  closeBasketModal = () => {
    this.setState({addToBasketModal: false})
    window.location.reload();
  }

  addToBasket = () => {
    const product = this.props.product.entitys
    this.setState({addToBasketModal: true})

    let storageData = localStorage.getItem(BASKET_LOCAL_STORAGE_NAME)
    storageData = JSON.parse(storageData)
    product.quantity = 1
    product.price = (product.price_by_one * product.pack_quantity).toFixed(2)
    product.total = (product.price_by_one * product.pack_quantity).toFixed(2)

    let arr = new Array(product);
    addLocalStorageData(BASKET_LOCAL_STORAGE_NAME, arr)
    setTimeout(() => {
        this.closeBasketModal()
    }, 100)
  }

  isInBasket = (id) => {
    let result = false;
    let storageData = localStorage.getItem(BASKET_LOCAL_STORAGE_NAME)
    storageData = JSON.parse(storageData)

    if (Array.isArray(storageData)) {
      for (let i = 0; i < storageData.length; i++) {
        //console.log(id, storageData[i][0].scu_id, id == storageData[i][0].scu_id)
        if (storageData[i][0].scu_id == id) {
          result = true
        }
      }
    }
    this.setState({inCart: result})
  }

  packshootWidth = () => {
    return window.innerWidth < parseInt(theme.sizes.mobileL) ? window.innerWidth : 640
  }

  packshootHeight = () => {
    return window.innerWidth < parseInt(theme.sizes.mobileL) ? 280 : 420
  }

  render() {
    const { loading, loaded, entitys, errors } = this.props.product
    const { category, subcategory, product } = this.props.match.params

    let productInfo = this.props.product[0]
    if (!productInfo) { productInfo = {} }

    let packshoot = '/img/noimage.jpg'
    if (loaded) {
      //console.log("entitys", entitys)
      try {
        packshoot = entitys.packshoot[0].card
        console.log("packshoot", entitys.packshoot[0].card)
      } catch(e) {
        packshoot = '/img/noimage.jpg'
      }
    }

    return (
      <ThemeProvider theme={theme}>
          <Header></Header>
          { loaded ? (
            <Wrapper>
              <Row>
                <BreadCrumbs
                  categoryName={entitys.category_name || 'каталог'}
                  categoryId={entitys.category_nameid || ''}
                  subcategoryName={entitys.tag_name || ''}
                  subcategoryId={entitys.tag_nameId || ''}
                  brandId={entitys.brand_nameId || ''}
                  brandName={entitys.brand_name || ''}
                ></BreadCrumbs>
              </Row>

              <div>
                <Column width="43%">
                  <Packshoot>
                    <Zoom
                      img={packshoot}
                      zoomScale={2}
                      width={this.packshootWidth()}
                      height={this.packshootHeight()}
                      transitionTime={0.5}
                    />
                  </Packshoot>
                </Column>
                <Column width="53%">
                  <InfoBlock
                    scuName={entitys.scu_name}
                    country={entitys.country_name}
                    likes={entitys.likes}
                    package={entitys.pack_name}
                    price={(entitys.price_by_one * entitys.pack_quantity).toFixed(2)}
                    pricePerUnit={(+entitys.price_by_one).toFixed(2)}
                    description={entitys.description}
                    addToBasket={this.addToBasket}
                    isInBasket={this.state.inCart}
                  ></InfoBlock>
                </Column>
              </div>
              <SameProducts
                categoryName={category}
                subcategoryName={subcategory}
                productId={product}
              />

            {/*<BestSellers></BestSellers>*/}
              <div style={{paddingLeft: '40px'}}>
                {/*<OurBenefitsComponent></OurBenefitsComponent>*/}
                <HowToOrderComponent></HowToOrderComponent>
                <OurResponsibility />
              </div>
            </Wrapper>
          ) : (<p>...</p>) }
          <FooterComponent></FooterComponent>
          <AddToBasketModal close={this.closeAddToBasketModal} isOpen={this.state.addToBasketModal} product={productInfo} />
      </ThemeProvider>
    )
  }
}

export default connect((state) => {
  return {
    product: state.products
  }
}, { getOneProduct })(ProductScreen)

import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import styled from 'styled-components'
import {Provider} from 'react-redux'
import Modal from 'react-modal'
import CookiesModal from './components/common/Modals/CookiesModals'

import store from './store';
import { USER_ACEPT_COOKIES } from './constans'

import MainPageScreen from './screens/MainPageScreen'
import CategoryScreen from './screens/CategoryScreen'
import SubCategoryScreen from './screens/SubCategoryScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import SubCategoryByTypeScreen from './screens/SubCategoryByTypeScreen'
import PickUpOrderFinal from './screens/PickUpOrderFinalScreen'
import SumulateBank from './screens/SimulateBankScreen'
import SuccessPaid from './screens/SuccessPaidScreen'
import TermsScreen from './screens/TermsScreen'
import ReturnScreen from './screens/ReturnScreen'
import FinancialScreen from './screens/FinancialScreen'
import AboutUsScreen from './screens/AboutUsScreen'
import DeliveryFinalSuccess from './screens/DeliveryFinalSuccess'
import ProductsByCollection from './screens/ProductsByCollection'
import NotFoundScreen from './screens/NotFoundScreen'
import PointsComponent from './screens/PointsComponent'
import ProductsByTagName from './screens/ProductsByTagName'
import UserAgreement from './screens/UserAgreementScreen'

import LoginAdmScreen from './admin/login/LoginScreen'
import MainAdmScreen from './admin/screens/MainAdmScreen'
import OrdersAdmScreen from './admin/screens/OrdersAdmScreen'
import ProductsAdmScreen from './admin/screens/ProductsAdmScreen'
import ReportsAdmScreen from './admin/screens/ReportsAdmScreen'
import BannersAdmScreen from './admin/screens/BannersAdmScreen'
import BrandsAdmScreen from './admin/screens/BrandsAdmScreen'
import VolumeAdmScreen from './admin/screens/VolumeAdmScreen'
import PackageAdmScreen from './admin/screens/PackageAdmScreen'
import CategoryAdmScreen from './admin/screens/CategoryAdmScreen'
import SubCategoryAdmScreen from './admin/screens/SubCategoriesAdmScreen'
import CollectionAdmScreen from './admin/screens/CollectionAdmScreen'
import CountryAdmScreen from './admin/screens/CountryAdmScreen'

import LoginScreen from './manager/components/Login/LoginScreen'
import Assortment from './manager/components/Assortment/AssortmentScreen'
import ContentScreen from './manager/components/Content/ContentScreen'
import PromoScreen from './manager/components/Promo/PromoScreen'

import TextComp from './screens/TestComp'

import { YMInitializer } from 'react-yandex-metrika';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
`


class App extends Component {

  state = {
    isCookiesModalOpen: true
  }

  componentDidMount() {
    this.checkUserAceptCookie()
  }

  checkUserAceptCookie = () => {
    let userAceptCookie = localStorage.getItem(USER_ACEPT_COOKIES)
    userAceptCookie = JSON.parse(userAceptCookie)
    if (userAceptCookie) {
      this.setState({isCookiesModalOpen: false})
    }
  }

  closeCookiesApproval = () => {
    this.setState({isCookiesModalOpen: false})
  }

  render() {
  return (
    <Provider store={store}>
      <Router>
        <Wrapper>
          <Switch>
            <Route exact path="/" render={(props) => <MainPageScreen {...props} />} />
            <Route exact path="/test" render={(props) => <TextComp {...props} />} />
            <Route exact path="/points" render={(props) => <PointsComponent {...props} />} />
            <Route exact path="/catalog/:category/byTag/:tagname" render={(props) => <ProductsByTagName {...props} />} />
            <Route exact path="/catalog/collections/:collection" render={(props) => <ProductsByCollection {...props} />} />
            <Route exact path="/catalog/:category" render={(props) => <CategoryScreen {...props} />} />
            <Route exact path="/catalog/:category/country/:country" render={(props) => <SubCategoryScreen {...props} />} />
            <Route exact path="/catalog/:category/:subcategory" render={(props) => <SubCategoryScreen {...props} />} />
            <Route exact path="/catalog/:category/:subcategory/:product" render={(props) => <ProductScreen {...props} />} />
            <Route exact path="/cart" render={(props) => <CartScreen {...props} />} />
            <Route exact path="/pickup-success" render={(props) => <PickUpOrderFinal {...props} />} />
            <Route exact path="/delivery-success" render={(props) => <DeliveryFinalSuccess {...props} />} />
            <Route exact path="/simulatebank" render={(props) => <SumulateBank {...props} />} />
            <Route exact path="/successpaid" render={(props) => <SuccessPaid {...props} />} />
            <Route exact path="/llegal" render={(props) => <TermsScreen {...props} />} />
            <Route exact path="/return" render={(props) => <ReturnScreen {...props} />} />
            <Route exact path="/about" render={(props) => <AboutUsScreen {...props} />} />
            <Route exact path="/financial" render={(props) => <FinancialScreen {...props} />} />
            <Route exact path="/useragreement" render={(props) => <UserAgreement {...props} />} />
            {/*<Route component={NotFoundScreen} />*/}
          </Switch>
          <Switch>
            <Route exact path="/ffhdsksdkfsh/main" render={(props) => <MainAdmScreen {...props} />} />
            <Route exact path="/ffhdsksdkfsh/orders" render={(props) => <OrdersAdmScreen {...props} />} />
            <Route exact path="/ffhdsksdkfsh/products" render={(props) => <ProductsAdmScreen {...props} />} />
            <Route exact path="/ffhdsksdkfsh/products/brands" render={(props) => <BrandsAdmScreen {...props} />} />
            <Route exact path="/ffhdsksdkfsh/products/volumes" render={(props) => <VolumeAdmScreen {...props} />} />
            <Route exact path="/ffhdsksdkfsh/products/packages" render={(props) => <PackageAdmScreen {...props} />} />
            <Route exact path="/ffhdsksdkfsh/products/categories" render={(props) => <CategoryAdmScreen {...props} />} />
            <Route exact path="/ffhdsksdkfsh/products/subcategories" render={(props) => <SubCategoryAdmScreen {...props} />} />
            <Route exact path="/ffhdsksdkfsh/products/collections" render={(props) => <CollectionAdmScreen {...props} />} />
            <Route exact path="/ffhdsksdkfsh/products/countries" render={(props) => <CountryAdmScreen {...props} />} />
            <Route exact path="/ffhdsksdkfsh/reports" render={(props) => <ReportsAdmScreen {...props} />} />
            <Route exact path="/ffhdsksdkfsh/banners" render={(props) => <BannersAdmScreen {...props} />} />
            <Route exact path="/ffhdsksdkfsh" render={(props) => <LoginAdmScreen {...props} />} />
          </Switch>
          <Switch>
            <Route exact path="/manager/login" render={(props) => <LoginScreen {...props} />} />
            <Route exact path="/manager/assortment" render={(props) => <Assortment {...props} />} />
            <Route exact path="/manager/content" render={(props) => <ContentScreen {...props} />} />
            <Route exact path="/manager/promo" render={(props) => <PromoScreen {...props} />} />
            <Route exact path="/manager/orders" render={(props) => <ContentScreen {...props} />} />
            <Route exact path="/manager/reports" render={(props) => <ContentScreen {...props} />} />
            <Route exact path="/manager/pickpoints" render={(props) => <ContentScreen {...props} />} />
            <Route exact path="/manager/settings" render={(props) => <ContentScreen {...props} />} />
          </Switch>

          <YMInitializer accounts={[62412622]} options={{webvisor: true}}/>
          <CookiesModal isOpen={this.state.isCookiesModalOpen} close={this.closeCookiesApproval} />
        </Wrapper>
      </Router>
    </Provider>
  )
  }
}

export default App;

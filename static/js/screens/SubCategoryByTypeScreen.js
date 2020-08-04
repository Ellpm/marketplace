import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { USER_AGE_SETTINGS_STORAGE } from '../constans'
import {Grid, Row, Col, Wrapper} from '../components/kit/Grid'

import Header from '../components/common/HeaderComponent'
import FooterComponent from '../components/common/FooterComponent'
import CategoryBannerComponent from '../components/common/CategoryBannerComponent'
import FiltersListComponent from '../components/common/Catalog/FiltersListComponent'
import OurBenefitsComponent from '../components/common/OurBenefitsComponent'
import HowToOrderComponent from '../components/common/HowToOrderComponent'
import AlcAttention from '../components/common/Catalog/AlcAttntionComponent'
import AgeModal from '../components/common/Modals/AgeModal'
import FilterItem from '../components/common/Catalog/FilterItemComponent'
import ProductListSubCategory from '../components/common/Catalog/ProductListSubCategory'
import ProductListComponent from '../components/common/Catalog/ProductListSubCategory'

import {fakeMenu} from '../fakeData/fakeMenu'
import {fakeProducts} from '../fakeData/fakeProducts'

class SubCategoryByTypeScreen extends Component {

  state = {
    ageModalOpen: false,
    isShowTopMenu: false
  }

  componentDidMount = () => {
    this.checkAge()
    window.addEventListener('scroll', this.showTopMenuOnScroll, true);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.showTopMenuOnScroll);
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
    if (this.props.match.params.category == 'beer') {
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
    window.location.href = '/catalog/water';
  }


  render() {

    const categoryInfo = fakeMenu.filter(item => {
      if (this.props.match.params.category == item.itemId) {
        return item
      }
    });

    //console.log("categoryInfo", this.props.match.params.subcategory);

    return (
      <div>
        <Header></Header>
        <CategoryBannerComponent info={categoryInfo}></CategoryBannerComponent>
        <Wrapper>
          <AgeModal isOpen={this.state.ageModalOpen} close={this.closeAgeModal} fail={this.redirect} />
          { this.props.match.params.category == 'beer' ? <AlcAttention /> : <p></p> }
          <FiltersListComponent
            category={this.props.match.params.category}
            hideTypes={true}
          />

          <ProductListSubCategory category={categoryInfo} categoryName={this.props.match.params.subcategory} ></ProductListSubCategory>

          <OurBenefitsComponent></OurBenefitsComponent>
          <HowToOrderComponent></HowToOrderComponent>
        </Wrapper>
        <FooterComponent></FooterComponent>
      </div>
    )
  }
}

export default SubCategoryByTypeScreen

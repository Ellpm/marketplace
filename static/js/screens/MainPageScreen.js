import React, { useState, useEffect } from 'react'
//import styled, {ThemeProvider} from 'styled-components'
import { USER_AGE_SETTINGS_STORAGE, USER_AGE_SETTINGS_INIT_TIME } from '../constans'

import HeaderComponent from '../components/common/HeaderComponent';
import BannerComponent from '../components/common/BannerComponent';
import FooterComponent from '../components/common/FooterComponent';
import MainPageContent from './MainPage/MainPageContent';
import AgeModal from '../components/common/Modals/AgeModal'

const MainPageScreen = (props) => {

  const [isShowModal, modalToogle] = useState(false)

  useEffect(() => {
    checkAge()
  }, [])

  const redirect = () => window.location.href = '/catalog/napitki';

  const checkAge = () => {
    let userData = localStorage.getItem(USER_AGE_SETTINGS_STORAGE)
    let initDate = localStorage.getItem(USER_AGE_SETTINGS_INIT_TIME)
    let limit = 2 * 3600 * 1000 // 2 часа
    userData = JSON.parse(userData)

    if (!userData || !initDate) {
      modalToogle(!isShowModal)
    } else if (+new Date() - initDate > limit ) {
      modalToogle(!isShowModal)
    }
  }

  return (
    <>
      <AgeModal
        isOpen={isShowModal}
        close={modalToogle}
        fail={redirect}
      />
      <HeaderComponent />
      <BannerComponent />
      <MainPageContent />
      <FooterComponent />
    </>
  )
}

export default MainPageScreen

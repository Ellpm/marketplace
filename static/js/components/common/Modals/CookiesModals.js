import React from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'

import { USER_ACEPT_COOKIES } from '../../../constans'
import {Button} from '../../kit/styled-components/controls'
import {theme} from '../../kit/theme'

const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 110px;
  z-index: 50;
  bottom: 0;
  text-align: center;
  @media (max-width: ${theme.sizes.mobileL}) {
    height: auto;
  }
`

const Wrapper = styled.div`
  width: 60%;
  min-width: 300px;
  margin: 0 auto;
  text-align: left;
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  position: relative;
  padding: 10px;
  border-radius: 5px;
  color: white;
`

const Text = styled.p`
  font-size: 13px;
`

const Link = styled.a`
  color: white;
`


const CookiesModal = (props) => {

  const setUserAceptCookies = () => {
    let userCookieData = localStorage.setItem(USER_ACEPT_COOKIES, true)
    props.close()
  }

  return (
    <ThemeProvider theme={theme}>
    { props.isOpen ? (

        <Modal>
          <Wrapper>
            <Text>«Мы используем cookie-файлы для персонализации контента,
                улучшения пользовательского опыта и бора статистики.
                Чтобы получить дополнительную информацию,
                вы можете ознакомиться с нашей <Link href="/llegal" target="blank">«Политикой по использованию cookie-файлов».</Link>
            </Text>
            <Button
              height="20px"
              font-size="14px"
              width="100px"
              paddingTop="1px"
              paddingBottom="1px"
              marginLeft="40%"
              onClick={setUserAceptCookies}
            >Понятно</Button>
          </Wrapper>
        </Modal>

    ) : ('') }
    </ThemeProvider>
  )
}

export default CookiesModal

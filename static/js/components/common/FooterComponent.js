import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import {theme} from '../kit/theme'
import {Row, Col} from '../kit/Grid'
import { LITRA_FINANCE_INFO } from '../../constans'

const Footer = styled.div`
  height: 500px;
  background: ${props => props.theme.color.gray};
  color: ${props => props.theme.color.darkGray};

  @media (max-width: ${theme.sizes.mobileL}) {
    height: 100%;
  }
`;

const Wrapper = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  padding-top: 50px;
`

const Logo = styled.div`
  background: url('/img/logo/grayLogo.svg') no-repeat;
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
`

const Link = styled.a`
  font-size: 17px;
  color: ${props => props.theme.color.darkGray};
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  :hover {
    text-decoration: underline;
    color: ${props => props.theme.color.black}
  }
`

const AdditionLinks = styled.div`
  margin-left: 30px;
`

const SocialLogo = styled.span`
  display: inline-block;
  background: url('/img/common/instagram.svg') no-repeat;
  width: 30px;
  height: 30px;
`

const LlegalLine = styled.p`
  margin-top: 10px;
  font-size: 14px;
`

const Warning = styled.p`
  font-size: 3.2em;
  text-transform: uppercase;
  text-align: justify;
	text-align-last: center;
  margin-top: 30px;
  font-weight: 100;

  @media (max-width: ${theme.sizes.mobileL}) {
    font-size: 1.2em;
  }
`

const FooterComponent = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Footer>
        <Wrapper>
          <Row inlineBlock="xs">
            <Col size={1}>
              <Logo />
            </Col>
            <Col size={1}>
              <AdditionLinks style={{paddingRight: '20px'}}>
                <p><Link target="_blank">Возврат</Link></p> {/* /return */}
                <p><Link target="_blank">Реквизиты</Link></p> {/* /financial */}
                <p><Link >Политика в отношении обработки персональных данных </Link></p> {/* /llegal */}
                <p><Link >Правила онлайн платформы Getdrinks.ru </Link></p> {/* /useragreement */}
              </AdditionLinks>
            </Col>
            <Col size={1}>

                <h2>Свяжитесь с нами</h2>
                <p><Link href="mailto:hello@getdrinks.ru">hello@getdrinks.ru</Link></p>
                <p><Link href="tel:+79269303000">+7 (926) 930-30-00</Link></p>

            </Col>
            <Col size={1}>
              <h2>Оставайтесь на связи ;)</h2>
              <Link href="https://www.instagram.com/getdrinks.ru/" target="_blank"><SocialLogo></SocialLogo></Link>
            </Col>
          </Row>
          <Row>
            {/*<LlegalLine>ООО «М ДИСТРИБЬЮШН» (5029189020) является владельцем и оператором онлайн платформы getdrinks.ru. Цены, характеристики и внешний вид товара в пунктах продажи могут отличаться от указанных на сайте getdrinks.ru. Информация, размещенная на сайте, носит ознакомительный / информационный характер, не является рекламой. Сайт содержит информацию о средней цене во всех точках продажи в выбранном регионе. Фактическая цена товара в магазине может отличаться от указанной цены как в большую, так и в меньшую сторону.</LlegalLine>*/}
          </Row>
          <Row>
            <Warning>Чрезмерное употребление алкогольной продукцией вредит вашему здоровью</Warning>
          </Row>
        </Wrapper>
      </Footer>
    </ThemeProvider>
  )
}

export default FooterComponent

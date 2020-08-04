import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'
import Modal from 'react-modal'

import {theme} from '../../kit/theme'


const ModalStyles = {
  overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: 50
  },
  content : {
    bottom                : 'auto',
    right                 : 'auto',
    left                 : '30%',
    top                : '25%',
    width                 : '450px',
    border                : '0',
  }
};


const Wrapper = styled.div`
  width: 100%;
  height: 200px;
`
const PlaceBlock = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  @media (max-width: ${theme.sizes.mobileL}) {
    width: 100%;
  }
`
const Button = styled.div`
  width: 99%;
  min-width: 150px;
  height: 30px;
  cursor: pointer;
  margin-bottom: 20px;
  text-align: center;
  color: ${props => props.theme.color.white};
  font-weight: bold;
  font-size: 18px;
  @media (max-width: ${theme.sizes.mobileL}) {
    width: 100%;
  }
`

const ActiveButton = styled.div`
  background: ${props => props.theme.color.green};
  width: 100%;
  height: 100%;
  padding-top: 10px;
  border-radius: 5px;
`

const UnActiveButton = styled.div`
  background: ${props => props.theme.color.gray};
  width: 100%;
  height: 100%;
  padding-top: 10px;
  cursor: none;
  border-radius: 5px;
`

const Llegal = styled.span`
  font-size: 14px;
  color: ${props => props.theme.color.darkGray};
`

const PlaceOrder = (props) => {
  const [isOpen, toogleModal] = useState(false)

  const openModal = () => { toogleModal(!isOpen) }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <PlaceBlock>
          <div style={{marginBottom: '20px'}}>
            <input type="checkbox" value="" checked />
            <Llegal>Я подтверждаю, что ознакомлен (-лась) с <a href="/llegal" target="blank">«Политикой обработки и защиты персональных данных»</a> и соглашаюсь с ее условиями.</Llegal>
            <Llegal onClick={openModal}> [ ? ] </Llegal>
        </div>
          {
            props.validate() ?
              (<Button onClick={props.orderCartBtnHandler}><ActiveButton>Оформить заказ</ActiveButton></Button>)
              : (<Button><UnActiveButton>Оформить заказ</UnActiveButton></Button>)
          }
        </PlaceBlock>
      </Wrapper>
      <Modal
        isOpen={isOpen}
        style={ModalStyles}
        onRequestClose={() => toogleModal(!isOpen)}
      >
        <p>Настоящим,  я добровольно предоставляю свои персональные данные в ООО «М Дистрибьюшн» для бронирования, организации доставки и/или самовывоза продукции ООО «М Дистрибьюшн», и даю согласие на их обработку ООО «М Дистрибьюшн» ( с   использованием   или   без использования средств автоматизации). Перечень персональных данных: фамилия, имя, отчество, номер мобильного телефона или иного телефона для связи, адрес доставки (для доставки безалкогольной продукции), адрес электронной почты. Также, я уведомлен (-а), что мои персональные данные будут храниться в течение того времени, которое необходимо для целей, для которых их собирали, и любых других разрешенных связанных с ней целей, я имею право на изменение персональных данных, ознакомление с ними, отзыв, а также уничтожение, для чего мне необходимо направить сообщение на следующий адрес электронной почты: ________________________. </p>
      </Modal>
    </ThemeProvider>
  )
}

export default PlaceOrder

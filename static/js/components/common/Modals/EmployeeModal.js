import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal';
import styled, {ThemeProvider} from 'styled-components'
import sha256 from 'crypto-js/sha256';

import {BASKET_LOCAL_STORAGE_NAME, SERVER_ADDR} from '../../../constans'
import {addLocalStorageData} from '../../../helpers/localStorage'
import {theme} from '../../kit/theme'
import {Label} from '../Cart/styled-components'
import {Row, Col} from '../../kit/Grid'

const sendMail = async (url, mail, text, code) => {
    const data = { mail: mail, text: text, code: code }
    try {
        const resp = await fetch(url, {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(data),
          })

          const answ = await resp.text()
          return answ
    } catch(e) {
        console.log(e)
    }
}

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
    top                : '35%',
    width                 : '450px',
    border                : '0',
  }
};

const Header = styled.h4`
  font-size: 25px;
  margin-bottom: 10px;
`

export const Button = styled.div`
  width: ${props => props.width || '70%'};
  min-width: 150px;
  height: 30px;
  cursor: pointer;
  margin-bottom: 20px;
  text-align: center;
  color: ${props => props.theme.color.white};
  background: ${props => props.background || props.theme.color.green};
  font-weight: bold;
  font-size: 16px;
  margin-top: 3px;
  padding-top: 6px;
  margin-left: ${props => props.marginLeft || '0px'};
`

export const Input = styled.input`
  width: 99%;
  height: 30px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.color.darkGray};
  margin-top: 5px;
`

class EmployeeModal extends Component {

  state = {
    mail: '',
    result: '',
    isValidMail: false,
    isValidCode: false,
    validMailAddr: '',
    code: '',
    receiveCode: '',
    hash: '',
  }

  inputHandler = (e) => {
    this.setState({result: '', isValidMail: false, mail: e.target.value})
    //this.setState({mail: e.target.value})
  }

  codeHandler = (e) => {
    let code = e.target.value
    this.setState({code: code.trim()})
  }


  checkMail = async () => {
    const {mail} = this.state
    let checkUrl = SERVER_ADDR + "employers"
    const data = {mail: mail.toLowerCase(), isOrder: false}

    try {
      const send = await fetch(checkUrl, {
        method: "POST",
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
      })
      const resp = await send.json()
      const { mail, promocode, isOrder } = resp

      const url = SERVER_ADDR + "sendMail"
      if (resp.isOrder == "false") {
        const x = sendMail(url, mail, "Код для активации - ", promocode)
        this.setState({
          result: 'Промокод отправлен Вам на почту',
          isValidMail: true,
          receiveCode: promocode,
          validMailAddr: mail
        })
      } else {
        this.setState({result: 'Ваш промокод уже был активирован', isValidMail: false})
      }
    } catch(e) {
      this.setState({result: 'Некорректный e-mail', isValidMail: false})
    }
  }


  checkCode = () => {
    if (this.state.isValidMail) {
      if (this.state.receiveCode == this.state.code) {
        this.checkProducts()
      } else {
        alert("Неверный код активации!")
      }
    }
  }

  checkProducts = () => {
    let status = false
    let storageData = localStorage.getItem(BASKET_LOCAL_STORAGE_NAME)
    storageData = JSON.parse(storageData)
    const pr = [
      'pivo-zhiguli-barnoe-pshenichnoe-0,45-l-x-24-sht',
    ]

    const sc = [
      'pivo-volkovskaya-pivovarnya-svetlyachok-0,33-x-24-sht',
      'pivo-zhiguli-barnoe-pshenichnoe-0,45-l-x-24-sht',
      "pivo-zhiguli-barnoe-eeksport-0,45-l-x-24-sht",
    ]

    if (Array.isArray(storageData)) {
      if (storageData.length == 1) {
        let freeBeer = false
        for(let i = 0; i < storageData.length; i++) {
          console.log(storageData[i])
          let id = storageData[i][0].scu_id
          if (sc.indexOf(id) != -1) {
            freeBeer = true
          }
          if (sc.indexOf(id) != -1) {
            storageData[i][0].frozenQuantity = true
            storageData[i][0].isAlc = false
            storageData[i][0].total = 0
            status = true;
          }
          if (id == pr[0]) {
            storageData[i][0].frozenQuantity = true
            storageData[i][0].isAlc = false
            storageData[i][0].total = 0
            status = true;
          }
        }
      } else {
        alert("Промокод действует только на 1 продукт")
      }

      localStorage.setItem(BASKET_LOCAL_STORAGE_NAME, JSON.stringify(storageData))

      if (status) {
        this.props.openDelivery()

        const data = { mail: this.state.validMailAddr }
        let url = SERVER_ADDR + "employers/change"
        fetch(url, {
          method: "POST",
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify(data)
        }).then(resp => {
          return resp.text()
        })
        .then(data => {
          console.log(data)
        })
        .catch(e => {
          console.log(e)
        })
        this.props.openDelivery()
        alert('Промокод применен')
        window.location.reload()
      } else {
        alert('У Вас в корзине нет продуктов для промокода')
      }
    }
    //this.setState({totalProducts: sum})
  }


  render() {
    return (
      <ThemeProvider theme={theme}>
        <Modal
          isOpen={this.props.isOpen}
          style={ModalStyles}
          onRequestClose={this.props.close}
          shouldCloseOnOverlayClick={true}
        >
          <Row>
            <Col size={1}>
              <Header>Активация промо кода</Header>
              <Row>
                <Col>
                  <p>{ this.state.result }</p>
                  <Label>Введите e-mail</Label>
                </Col>
              </Row>
              <Row>
                <Col size={3}>
                  <Input type="text" value={this.state.mail} onChange={this.inputHandler} />
                </Col>
                <Col size={1}>
                  <Button marginLeft="-5px" onClick={this.checkMail}>Отправить код</Button>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <Label>Введите полученный код</Label>
                  <Input type="text" value={this.state.code} onChange={this.codeHandler} />
                </Col>
              </Row>
              {
                this.state.isValidMail ? (
                  <Button marginLeft="15%" onClick={this.checkCode}>Активировать промо-код</Button>
                ) : (
                  <Button marginLeft="15%" background={theme.color.darkGray}>Активировать промо-код</Button>
                )
              }
            </Col>
          </Row>
        </Modal>
      </ThemeProvider>
    )
  }
}

export default EmployeeModal

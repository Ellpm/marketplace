import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal';
import styled, {ThemeProvider} from 'styled-components'

import { USER_AGE_SETTINGS_STORAGE, USER_AGE_SETTINGS_INIT_TIME } from '../../../constans'
import {theme} from '../../kit/theme'
import {Row, Col} from '../../kit/Grid'
import {Button} from '../../kit/styled-components/controls'



const Header = styled.h3`
  text-align: center;
`

const AgeModal = (props) => {

  const saveSuccess = () => {
    const data = +new Date()
    localStorage.setItem(USER_AGE_SETTINGS_STORAGE, true)
    localStorage.setItem(USER_AGE_SETTINGS_INIT_TIME, data)
    props.close()
  }

  let width, right, left;
  const isMobile = window.innerWidth < 510
  if (isMobile) {
    width = '80%'
    right = '10%'
    left = '5%'
  } else {
    width = '30%'
    right = '10%'
    left = '35%'
  }
  console.log("MODAL", isMobile, window.innerWidth)

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
      right                 : right,
      left                 : left,
      top                : '35%',
      width                 : width,
      border                : '0',
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <div style={{ midth: '50%' }}>
    <Modal
      isOpen={props.isOpen}
      style={ModalStyles}
      onRequestClose={props.close}
      shouldCloseOnOverlayClick={false}
    >
      <div>
        <Header>Вам исполнилось 18 лет?</Header>
        <Row>
          <Col size={1}>
            <Button
              onClick={saveSuccess}
            >Да</Button>
          </Col>
          <Col size={1}>
            <Button
              onClick={props.fail}
            > Нет </Button>
          </Col>
        </Row>
      </div>
    </Modal>
    </div>
    </ThemeProvider>
  )
}

export default AgeModal

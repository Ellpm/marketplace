import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal';
import styled, {ThemeProvider} from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import {theme} from '../../kit/theme'
import {Row, Col} from '../../kit/Grid'
import {Button} from '../../kit/styled-components/controls'
import LogoComponent from '../../common/LogoComponent'
import MenuComponent from '../../common/MenuComponent'

//import './css/burger.css'



const ModalStyles = {
  overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 50
  },
  content : {
    bottom                : 'auto',
    right                 : 'auto',
    left                  :  '0',
    top                   : '0',
    width                 : '100%',
    height                : '800px',
    border                : '0',
    backgroundColor       : 'rgba(0, 0, 0, 1)',
  }
};

const CloseBtn = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  position: relative;
  z-index: 1;
  margin: 20px auto;
  cursor: pointer;
  :before {
    content: '+';
    color: ${props => props.theme.color.white};
    position: absolute;
    z-index: 2;
    transform: rotate(45deg);
    font-size: 50px;
    line-height: 1;
    top: -5px;
    left: 6px;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
  }
`

const BurgerMenu = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Modal
        isOpen={props.isOpen}
        style={ModalStyles}
        onRequestClose={props.close}
        shouldCloseOnOverlayClick={false}
        closeTimeoutMS={200}
      >

          <Row>
            <Col size={1}>
              <CloseBtn onClick={props.close} />
            </Col>
            <Col size={4}>
              <LogoComponent />
            </Col>
          </Row>
          <Row>
            <MenuComponent
              isHorisontal={false}
              items={props.items}
            />
          </Row>
      </Modal>
    </ThemeProvider>
  )
}

export default BurgerMenu

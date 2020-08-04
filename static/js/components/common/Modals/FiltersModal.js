import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, {ThemeProvider} from 'styled-components'
import Modal from 'react-modal'

import { theme } from '../../kit/theme'
import {Button} from '../../kit/styled-components/controls'
import { CSSTransition } from 'react-transition-group'


const ModalStyles = {
  overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9998
  },
  content : {
    bottom                : 'auto',
    right                 : 'auto',
    left                  :  '0',
    top                   : '0',
    width                 : '100%',
    height                : '800px',
    border                : '0',
    backgroundColor       : 'rgba(255, 255, 255, 1)',
    zIndex: 9999
  }
};

const Header = styled.p`
  padding: 20px;
  color: ${props => props.theme.color.green};
  font-size: 1.5em;
`

const FiltersModal = (props) => {
  return(
    <ThemeProvider theme={theme}>

      <Modal
        isOpen={props.isModalOpen}
        style={ModalStyles}
        onRequestClose={props.close}
        shouldCloseOnOverlayClick={false}
      >
        <div>
          <Header>Фильтры</Header>
          {props.children}
          <Button onClick={props.close}>Применить</Button>
        </div>
      </Modal>
    
    </ThemeProvider>
  )
}

export default FiltersModal

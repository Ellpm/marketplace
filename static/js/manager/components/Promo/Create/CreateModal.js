import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Modal from 'react-modal'
//import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import { Row, Column, H1, Label } from '../../../kit/styled'
import { Input, Button } from '../../../kit/styled/controls'
import { DateInput } from '../styled'
import { createPromo } from '../AC'

const CreatePromoCodeModalStyles = {
  overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 50
  },
  content : {
    bottom                : 'auto',
    right                 : 'auto',
    left                 : '20%',
    top                : '20%',
    width                 : '700px',
    border                : '0',
    height               : '500px',
  }
};

class CreateModal extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    name: '',
    discount: 0,
    start: new Date(),
    endDate: new Date(),
  }

  setStartDate = (date) => {
    this.setState({start: date})
  }

  setEndDate = (date) => {
    this.setState({endDate: date})
  }

  inputHandler = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name] : value })
  }

  createPromoBtnHandler = () => {
    const { name, discount, start, endDate } = this.state

    const data = {
      name,
      discount: +discount,
      startdate: start,
      enddate: endDate
    }
    console.log(data)
    this.props.createPromo(data)
  }

  render() {
    const {isOpen, close, promoStatus} = this.props
    const { start, endDate } = this.state
    //console.log("promoStatus", promoStatus)

    if (promoStatus.loaded && promoStatus.status === 201) {
      console.log(close)
      close()
    }

    return (
      <Modal
        isOpen={isOpen}
        style={CreatePromoCodeModalStyles}
        onRequestClose={close}
      >
        <Row>
          <H1>Создать промокод</H1>
        </Row>
        <Row>
          <Column minWidth="40%">
            <Label>Название промокода</Label>
            <Input type="text" name="name" onChange={this.inputHandler} />
          </Column>
          <Column minWidth="40%">
            <Label>Скидка</Label>
            <Input type="number" name="discount" onChange={this.inputHandler} />
          </Column>
        </Row>
        <Row>
          <Column  minWidth="40%">
            <Label>Начало действия</Label>
            <DateInput
              selected={start}
              onChange={this.setStartDate}
              minDate={new Date()}
            />
          </Column>
          <Column minWidth="40%">
            <Label>Окончание действия</Label>
            <DateInput
              selected={endDate}
              onChange={this.setEndDate}
              minDate={endDate}
              width="100% !important"
            />
          </Column>
        </Row>

        <Row>
          <Button onClick={this.createPromoBtnHandler}>Создать</Button>
        </Row>
        <Row>
          <Column minWidth="90%">
            { promoStatus.loading ? (
              <p>Промокод создается</p>
            ) : (
              <></>
            ) }

            { promoStatus.loaded && promoStatus.responce === 201 ? (
              <p>Промокод создан</p>
            ) : (
              <></>
            ) }
          </Column>
        </Row>
      </Modal>
    );
  }
}

CreateModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
}

export default connect((state) => {
  return {
    promoStatus: state.adminCreatePromo
  }
}, { createPromo })(CreateModal);

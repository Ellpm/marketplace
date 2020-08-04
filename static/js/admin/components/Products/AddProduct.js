import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {transliterate} from '../../../helpers/converters'

import { SERVER_ADDR } from '../../../constans'
import { sendPostData } from '../../helpers'
import { Input } from '../styled'

const BRAND_API = SERVER_ADDR + "api/brands"

const Label = styled.label`
  display: block;
`

const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

class AddProduct extends Component {

  state = {
    name: '',
    id: '',
  }

  nameInputHandler = (e) => {
    let id = transliterate(e.target.value).toLowerCase().replace(/\s/g, '-');
    this.setState({name: e.target.value, id: id})
  }


  addProductHandler = () => {

  }

  render() {
    const {name, id} = this.state;

    return (
      <Wrapper>
        <div>
          <h4>Загрузить из excel</h4>
          <h4>Выгрузить в excel</h4>
        </div>
        <h3>Добавить продукт</h3>
        <label>Бренд</label>
        <select></select>
        <label>Объем</label>
        <select></select>
        <label>Тип упаковки</label>
        <select></select>
        <Label>Название продукта: {name}, id = {id}</Label>
        <Input type="text" value={name} onChange={this.nameInputHandler}  />
        <Label>Описание</Label>
        <textarea></textarea>
        <button onClick={this.addProductHandler}>Добавить</button>
      </Wrapper>
    )
  }
}

export default AddProduct

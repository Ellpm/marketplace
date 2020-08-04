import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {transliterate} from '../../../helpers/converters'

import { SERVER_ADDR } from '../../../constans'
import { sendPostData } from '../../helpers'
import { Input } from '../styled'

const COUNTRIES_API = SERVER_ADDR + "api/countries"

const Label = styled.label`
  display: block;
`

const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

class AddCountry extends Component {

  state = {
    name: '',
    id: '',
  }

  nameInputHandler = (e) => {
    let id = transliterate(e.target.value).toLowerCase().replace(/\s/g, '-');
    this.setState({name: e.target.value, id: id})
  }


  addCountryHandler = () => {
    const { name, id } = this.state;
    const country = {
      countryId:  id,
      countryName: name,
    }
    
    sendPostData(COUNTRIES_API, country)
      .then(res => {
        if (res.status == 200) {
          alert("Страна создана")
          this.setState({name: "", id: ""})
          window.location.reload()
        } else {
          alert("Ошибка создания")
          this.setState({name: "", id: ""})
        }
      })
  }

  render() {
    const {name, id} = this.state;

    return (
      <Wrapper>
        <h3>Добавить страну</h3>
        <Label>Название страны: {name}, id = {id}</Label>
        <Input type="text" value={name} onChange={this.nameInputHandler}  />
        <button onClick={this.addCountryHandler}>Добавить</button>
      </Wrapper>
    )
  }
}

export default AddCountry

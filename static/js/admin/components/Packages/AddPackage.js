import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {transliterate} from '../../../helpers/converters'

import { SERVER_ADDR } from '../../../constans'
import { sendPostData } from '../../helpers'
import { Input } from '../styled'

const PACKAGE_API = SERVER_ADDR + "api/packages"
 
const Label = styled.label`
  display: block;
`

const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

class AddPackage extends Component {

  state = {
    name: '',
    id: '',
  }

  nameInputHandler = (e) => {
    let id = transliterate(e.target.value).toLowerCase().replace(/\s/g, '-');
    this.setState({name: e.target.value, id: id})
  }


  addPackageHandler = () => {
    const { name, id } = this.state;
    const packageInfo = {
      packageId:  id,
      packageName: name,
    }

    sendPostData(PACKAGE_API, packageInfo)
      .then(res => {
        if (res.status == 200) {
          alert("Тип упаковки создан")
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
        <h3>Добавить упаковку</h3>
        <Label>Название упаковки: {name}, id = {id}</Label>
        <Input type="text" value={name} onChange={this.nameInputHandler}  />
        <button onClick={this.addPackageHandler}>Добавить</button>
      </Wrapper>
    )
  }
}

export default AddPackage

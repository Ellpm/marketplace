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

class AddBrand extends Component {

  state = {
    brandName: '',
    brandId: '',
  }

  brandNameInputHandler = (e) => {
    let brandId = transliterate(e.target.value).toLowerCase().replace(/\s/g, '-');
    this.setState({brandName: e.target.value, brandId: brandId})
  }

  checkBrand = async (brandId) => {
    const URL = BRAND_API + "/" + brandId
    const resp = await fetch(URL, {method: "GET"})
    const text = await resp.text()
    return text
  }

  addBrandHandler = () => {
    const {brandName, brandId} = this.state;
    const brand = {
      brand_id: brandId,
      brand_name: brandName,
      logotype: "",
      description: ""
    }

    const check = this.checkBrand(brandId)
    check.then(data => {
      const resp = JSON.parse(data)
      switch(resp.status) {
        case "OK":
          alert("Такой бренд уже есть");
          this.setState({brandName: "", brandId: ""})
          break;
        case "NOT FOUND":
          sendPostData(BRAND_API, brand)
            .then(res => {
              if (res.status == 200) {
                alert("Бренд создан")
                this.setState({brandName: "", brandId: ""})
                window.location.reload()
              } else {
                alert("Ошибка создания")
                this.setState({brandName: "", brandId: ""})
              }
            })
          break;
      }
    })
  }

  render() {
    const {brandName, brandId} = this.state;

    return (
      <Wrapper>
        <h3>Добавить бренд</h3>
        <Label>Название бренда: {brandName}, id = {brandId}</Label>
        <Input type="text" value={brandName} onChange={this.brandNameInputHandler}  />
        <button onClick={this.addBrandHandler}>Добавить бренд</button>
      </Wrapper>
    )
  }
}

export default AddBrand

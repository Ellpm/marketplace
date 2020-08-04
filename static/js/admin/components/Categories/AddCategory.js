import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {transliterate} from '../../../helpers/converters'

import { SERVER_ADDR } from '../../../constans'
import { sendPostData } from '../../helpers'
import { Input } from '../styled'

const CATEGORY_API = SERVER_ADDR + "api/categories"

const Label = styled.label`
  display: block;
`

const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

class AddCategory extends Component {

  state = {
    name: '',
    id: '',
  }

  nameInputHandler = (e) => {
    let id = transliterate(e.target.value).toLowerCase().replace(/\s/g, '-');
    this.setState({name: e.target.value, id: id})
  }


  addCategoryHandler = () => {
    const { name, id } = this.state;
    const category = {
      categoryId:  id,
      categoryName: name,
    }

    sendPostData(CATEGORY_API, category)
      .then(res => {
        if (res.status == 200) {
          alert("Категория создана")
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
        <h3>Добавить категорию</h3>
        <Label>Название категории: {name}, id = {id}</Label>
        <Input type="text" value={name} onChange={this.nameInputHandler}  />
        <button onClick={this.addCategoryHandler}>Добавить</button>
      </Wrapper>
    )
  }
}

export default AddCategory

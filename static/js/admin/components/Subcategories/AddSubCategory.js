import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {transliterate} from '../../../helpers/converters'

import { SERVER_ADDR } from '../../../constans'
import { sendPostData } from '../../helpers'
import { Input } from '../styled'

const CATEGORY_API = SERVER_ADDR + "api/categories"
const SUBCATEGORIES_API = SERVER_ADDR + "api/subcategories"

const Label = styled.label`
  display: block;
`

const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

class AddSubCategory extends Component {

  state = {
    name: '',
    id: '',
    categories: [],
    selectCatId: null,
  }

  componentDidMount() {
    this.getCategoriesList()
  }

  nameInputHandler = (e) => {
    let id = transliterate(e.target.value).toLowerCase().replace(/\s/g, '-');
    this.setState({name: e.target.value, id: id})
  }

  getCategoriesList = async () => {
    const resp = await fetch(CATEGORY_API, { method: 'GET' })
    if (resp.status == 200) {
      const data = await resp.json()
      this.setState({ categories: data })
    } else {
      alert("Ошибка загрузки категорий")
    }
  }

  categoryChangeHandler = (e) => {
    this.setState({selectCatId: e.target.value})
  }

  addSubCategoryHandler = () => {
    const { name, id } = this.state;
    const category = {
      subcatId:  id,
      subcatName: name,
      categoryId: this.state.selectCatId
    }

    console.log(category)
    sendPostData(SUBCATEGORIES_API, category)
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
    const {name, id, categories} = this.state;
    console.log(categories)
    return (
      <Wrapper>
        <h3>Добавить подкатегорию</h3>
        <Label>Название подкатегории: {name}, id = {id}</Label>
        <Input type="text" value={name} onChange={this.nameInputHandler}  />
        <Label>Выберите категорию</Label>
        <select onChange={this.categoryChangeHandler}>
          <option>Выберите категорию</option>
          {
            categories.map(item => {
              return(
                <option value={item.id}>{item.cat_name}</option>
              )
            })
          }
        </select>
        <button onClick={this.addSubCategoryHandler}>Добавить</button>
      </Wrapper>
    )
  }
}

export default AddSubCategory

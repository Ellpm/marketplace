import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SERVER_ADDR } from '../../../constans'
import {Card} from '../styled'
const CATEGORY_API = SERVER_ADDR + "api/categories"

class CategoriesList extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    categories: []
  }

  componentDidMount() {
    this.getCategories()
  }

  getCategories = () => {
    fetch(CATEGORY_API, { method: "GET" })
      .then(res => {
        return res.json()
      })
      .then(json => {
        //console.log(json)
        this.setState({categories: json})
      })
  }

  renderData = () => {
    const {categories} = this.state
    const result = categories.map(item => {
      return(
        <Card key={item.id}>
          <p>{item.cat_name}</p>
        </Card>
      )
    })
    return result
  }

  render() {
    return (
      <div>
        <h3>Категории</h3>
        <div>
          {this.renderData()}
        </div>
      </div>
    );
  }
}

CategoriesList.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default CategoriesList;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import { SERVER_ADDR } from '../../../constans'
import {Card} from '../styled'
const BRAND_API = SERVER_ADDR + "api/brands"


class BrandList extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    brands: []
  }

  componentDidMount() {
    this.getBrand()
  }

  getBrand = () => {
    fetch(BRAND_API, { method: "GET" })
      .then(res => {
        return res.json()
      })
      .then(json => {
        //console.log(json)
        this.setState({brands: json})
      })
  }

  renderData = () => {
    const {brands} = this.state
    const result = brands.map(item => {
      return(
        <Card key={item.id}>
          <p>{item.brand_name}</p>
        </Card>
      )
    })
    return result
  }

  render() {
    const {brands} = this.state
    return (
      <div>
        <h3>Бренды</h3>
        <p>Всего созданно брендов: {brands.length}</p>
        <div>
          {this.renderData()}
        </div>
      </div>
    );
  }
}

BrandList.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default BrandList;

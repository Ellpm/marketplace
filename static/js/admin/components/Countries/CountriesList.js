import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SERVER_ADDR } from '../../../constans'
import {Card} from '../styled'
const COUNTRIES_API = SERVER_ADDR + "api/countries"

class CountriesList extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    countries: []
  }

  componentDidMount() {
    this.getCountries()
  }

  getCountries = () => {
    fetch(COUNTRIES_API, { method: "GET" })
      .then(res => {
        return res.json()
      })
      .then(json => {
        //console.log(json)
        this.setState({countries: json})
      })
  }

  renderData = () => {
    const {countries} = this.state
    const result = countries.map(item => {
      return(
        <Card key={item.id}>
          <p>{item.country_name}</p>
        </Card>
      )
    })
    return result
  }

  render() {
    const {countries} = this.state
    return (
      <div>
        <h3>Страны</h3>
        <p>Всего стран: {countries.length} </p>
        <div>
          {this.renderData()}
        </div>
      </div>
    );
  }
}

CountriesList.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default CountriesList;

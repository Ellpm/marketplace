import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SERVER_ADDR } from '../../../constans'
import {Card} from '../styled'
const PACKAGE_API = SERVER_ADDR + "api/packages"

class PackagesList extends Component { // eslint-disable-line react/prefer-stateless-function
 
  state = {
    packages: []
  }

  componentDidMount() {
    this.getPackage()
  }

  getPackage = () => {
    fetch(PACKAGE_API, { method: "GET" })
      .then(res => {
        return res.json()
      })
      .then(json => {
        //console.log(json)
        this.setState({packages: json})
      })
  }

  renderData = () => {
    const {packages} = this.state
    const result = packages.map(item => {
      return(
        <Card key={item.id}>
          <p>{item.package_name}</p>
        </Card>
      )
    })
    return result
  }

  render() {
    return (
      <div>
        <h3>Типы упаковок</h3>
        <div>
          {this.renderData()}
        </div>
      </div>
    );
  }
}

PackagesList.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default PackagesList;

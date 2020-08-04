import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SERVER_ADDR } from '../../../constans'
import {Card} from '../styled'
const VOLUME_API = SERVER_ADDR + "api/volumes"

class VolumesList extends Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    volumes: []
  }

  componentDidMount() {
    this.getVolume()
  }

  getVolume = () => {
    fetch(VOLUME_API, { method: "GET" })
      .then(res => {
        return res.json()
      })
      .then(json => {
        //console.log(json)
        this.setState({volumes: json})
      })
  }

  renderData = () => {
    const {volumes} = this.state
    const result = volumes.map(item => {
      return(
        <Card key={item.id}>
          <p>{item.volume_name} л.</p>
        </Card>
      )
    })
    return result
  }

  render() {
    return (
      <div>
        <h3>Объемы</h3>
        <div>
          {this.renderData()}
        </div>
      </div>
    );
  }
}

VolumesList.propTypes = {
  //prop: PropTypes.type.isRequired
}

export default VolumesList;
